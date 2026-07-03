import { Client } from 'pg'
import bcrypt from "bcryptjs"
import dotenv from "dotenv"

dotenv.config()

const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
})

async function seed() {
    await client.connect()
    try {
        await client.query('BEGIN')

        // ROLE
        await client.query("INSERT INTO role(label) VALUES ('admin'), ('producer'), ('customer') ON CONFLICT DO NOTHING")
        const roles_info = await client.query("SELECT id, label FROM role")
        const roleMap = {}
        roles_info.rows.forEach(r => { roleMap[r.label] = r.id })

        // EVENT
        const events = [
            { title: "petit marché", date: "2026-05-21", description: "petit marché sur la place", location: "place du marché, 21600 villageDudébut" },
            { title: "vente de noël", date: "2026-12-25", description: "vente spéciale de noël", location: "17 rue des fêtes, 71190 Akoté" }
        ]
        for (const e of events) {
            await client.query("INSERT INTO event (title, date, description, location) VALUES ($1,$2,$3,$4) ON CONFLICT (title) DO NOTHING",
                [e.title, e.date, e.description, e.location])
        }
        const event_info = await client.query("SELECT id, title FROM event")
        const eventMap = {}
        event_info.rows.forEach(e => { eventMap[e.title] = e.id })

        // USERS
        const users = [
            { firstname: "Clémence", lastname: "Langlais", password: process.env.MDP_ADMIN || "admin123", email: "clemencel@gmail.com", phone: "06 94 48 30 24", inscription: "2026-02-16", last_connexion: "2026-05-20", event_id: null, role_id: roleMap["admin"] },
            { firstname: "Karim", lastname: "Benchouia", password: process.env.MDP_PRODUCER1 || "prod123", email: "karimeb@outlook.com", phone: "06 11 22 33 44", inscription: "2026-06-14", last_connexion: "2026-05-22", event_id: eventMap["petit marché"], role_id: roleMap["producer"] },
            { firstname: "Michel", lastname: "Durand", password: process.env.MDP_PRODUCER2 || "prod123", email: "mdurand@gmail.com", phone: "06 98 76 54 32", inscription: "2026-04-11", last_connexion: "2026-05-17", event_id: eventMap["vente de noël"], role_id: roleMap["producer"] },
            { firstname: "Léa", lastname: "Martin", password: process.env.MDP_CLIENT || "client123", email: "lea@gmail.com", phone: "06 12 34 56 78", inscription: "2026-06-20", last_connexion: "2026-06-25", event_id: null, role_id: roleMap["customer"] }
        ]
        for (const u of users) {
            const hash = await bcrypt.hash(u.password, 10)
            await client.query(
                "INSERT INTO users (firstname, lastname, password, email, phone, inscription, last_connexion, event_id, role_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) ON CONFLICT (email) DO NOTHING",
                [u.firstname, u.lastname, hash, u.email, u.phone, u.inscription, u.last_connexion, u.event_id, u.role_id])
        }
        const users_info = await client.query("SELECT id, email FROM users")
        const userMap = {}
        users_info.rows.forEach(u => { userMap[u.email] = u.id })

        // PANIER pour chaque utilisateur (indispensable pour l'ajout au panier)
        for (const email of Object.keys(userMap)) {
            await client.query("INSERT INTO basket (user_id) VALUES ($1) ON CONFLICT (user_id) DO NOTHING", [userMap[email]])
        }

        // PRODUCER
        const producers = [
            { siret: "123 456 789 00012", presentation: "boulanger depuis longtemps, vend du pain et des gateaux", compagnyname: "petitPain", user_id: userMap["karimeb@outlook.com"], event_id: eventMap["petit marché"] },
            { siret: "987 654 321 00057", presentation: "Vend des fruits et légumes", compagnyname: "LeSaladier", user_id: userMap["mdurand@gmail.com"], event_id: null }
        ]
        for (const p of producers) {
            await client.query('INSERT INTO producer (siret, presentation, "compagnyName", user_id, event_id) VALUES ($1,$2,$3,$4,$5) ON CONFLICT (siret) DO NOTHING',
                [p.siret, p.presentation, p.compagnyname, p.user_id, p.event_id])
        }
        const producer_info = await client.query("SELECT id, siret FROM producer")
        const producerMap = {}
        producer_info.rows.forEach(p => { producerMap[p.siret] = p.id })

        // CATEGORY
        await client.query("INSERT INTO category(label) VALUES ('boulangerie'), ('fruit et légume') ON CONFLICT DO NOTHING")
        const category_info = await client.query("SELECT id, label FROM category")
        const categoryMap = {}
        category_info.rows.forEach(c => { categoryMap[c.label] = c.id })

        // SUBCATEGORY
        const subcategory = [
            { label: "pain", category_id: categoryMap["boulangerie"] },
            { label: "légumes", category_id: categoryMap["fruit et légume"] },
            { label: "viennoiserie", category_id: categoryMap["boulangerie"] }
        ]
        for (const s of subcategory) {
            await client.query("INSERT INTO subcategory (label, id_category) VALUES ($1,$2) ON CONFLICT DO NOTHING", [s.label, s.category_id])
        }
        const subcategory_info = await client.query("SELECT id, label FROM subcategory")
        const subcategoryMap = {}
        subcategory_info.rows.forEach(s => { subcategoryMap[s.label] = s.id })

        // PRODUCT
        const product = [
            { name: "pomme de terre", description: "ceci n'est pas une pomme", price: 5, image: "/assets/products/Fruits-légumes/legumes-patates.jpg", producer_id: producerMap["987 654 321 00057"], category_id: categoryMap["fruit et légume"], subcategory_id: subcategoryMap["légumes"] },
            { name: "croissant", description: "croissant doré", price: 4, image: "/assets/products/Boulangerie/boulangerie-croissants.jpg", producer_id: producerMap["123 456 789 00012"], category_id: categoryMap["boulangerie"], subcategory_id: subcategoryMap["viennoiserie"] },
            { name: "pain-campagne", description: "pain fait ce matin", price: 1.50, image: "/assets/products/Boulangerie/boulangerie-pain-campagne.jpg", producer_id: producerMap["123 456 789 00012"], category_id: categoryMap["boulangerie"], subcategory_id: subcategoryMap["pain"] }
        ]
        for (const p of product) {
            await client.query("INSERT INTO product (name, description, price, image, producer_id, category_id, subcategory_id) VALUES ($1,$2,$3,$4,$5,$6,$7) ON CONFLICT (image) DO NOTHING",
                [p.name, p.description, p.price, p.image, p.producer_id, p.category_id, p.subcategory_id])
        }
        const product_info = await client.query("SELECT id, name FROM product")
        const productMap = {}
        product_info.rows.forEach(p => { productMap[p.name] = p.id })

        const leaId = userMap["lea@gmail.com"]
        if (leaId) {
            await client.query("INSERT INTO favorite_product (user_id, product_id) VALUES ($1,$2),($1,$3) ON CONFLICT DO NOTHING",
                [leaId, productMap["croissant"], productMap["pain-campagne"]])

            const basketRes = await client.query("SELECT id FROM basket WHERE user_id = $1", [leaId])
            const basketId = basketRes.rows[0].id
            await client.query("INSERT INTO basket_item (basket_id, product_id, quantity) VALUES ($1,$2,2),($1,$3,1) ON CONFLICT (basket_id, product_id) DO NOTHING",
                [basketId, productMap["croissant"], productMap["pain-campagne"]])
        }

        await client.query("COMMIT")
        console.log("✅ le seeder a été exécuté")
        console.log("   Client de démo : lea@gmail.com / " + (process.env.MDP_CLIENT || "client123"))
    } catch (error) {
        await client.query('ROLLBACK')
        console.error('❌ Erreur :', error)
    } finally {
        await client.end()
    }
}

seed()
