import {Client} from 'pg'
import bcrypt from "bcrypt"
import dotenv from "dotenv"

dotenv.config()

const client = new Client({
user: process.env.user,
host: process.env.host,
database: process.env.name,
password: process.env.password,
port: process.env.port,
})

async function seed() {

await client.connect()

try {
    await client.query('BEGIN')

    // ROLE :
    await client.query("INSERT INTO role(label) VALUES ('admin'), ('producer'), ('customer') ON CONFLICT (label) DO NOTHING")

    const roles_info = await client.query("SELECT id, label FROM role")
    const roleMap = {}
    roles_info.rows.forEach(role => {roleMap[role.label] = role.id})


    // EVENT :
    const events = [{title: "petit marché", date: "2026-05-21", description: "petit marché sur la place", location: "place du marché, 21600 villageDudébut"},
    {title: "vente de noël", date: "2026-12-25", description: "vente spéciale de noël", location: "17 rue des fêtes, 71190 Akoté"}]

    for (event of events) {
    await client.query("INSERT INTO event (title, date, description, location) VALUES ($1, $2, $3, $4) ON CONFLICT (title) DO NOTHING", [
    event.title,
    event.date,
    event.description,
    event.location])}

    const event_info = await client.query("SELECT id, title FROM event")
    const eventMap = {}
    event_info.rows.forEach(event => {eventMap[event.title] = event.id})


    // USERS :
    const users = [{firstname: "Clémence", lastname: "Langlais", password: "1234a", email: "clemencel@gmail.com", phone: "06 11 22 33 44", inscription: "2026-02-16", lastconnexion: "2026-05-20", event_id: NULL, role_id: roleMap["admin"]},
        {firstname: "Karim", lastname: "Benchouia", password: "5678b", email: "karimeb@outlook.com", phone: "06 11 22 33 44", inscription: "2026-06-14", lastconnexion: "2026-05-22", event_id: eventMap["petit marché"], role_id: roleMap["producer"]},
        {firstname: "Michel", lastname: "Durand", password: "90c", email: "mdurand@gmail.com", phone: "06 98 76 54 32", inscription: "2026-04-11", lastconnexion: "2026-05-17", event_id: eventMap["vente de noël"], role_id: roleMap["producer"]}]

    const protected_password = await bcrypt.hash(user.password, 10)

    for (user of users) {
    await client.query("INSERT INTO user (firstname, lastname, password, email, phone, inscription, lastconnexion, event_id, role_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) ON CONFLICT (email) DO NOTHING", [
    user.firstname,
    user.lastname,
    user.protected_password,
    user.email,
    user.phone,
    user.inscription,
    user.lastconnexion,
    user.event_id,
    user.role_id
    ])}

    const users_info = await client.query("SELECT id, email FROM users")
    const userMap = {}
    users_info.rows.forEach(user => {userMap[user.email] = user.id})


    // Producer :
    const producers = [{siret: "123 456 789 00012", presentation: "boulanger depuis longtemps, vend du pain et des gateaux", compagnyname: "petitPain", user_id: userMap["karimeb@outlook.com"], event_id: eventMap["petit marché"]},
    {siret: "987 654 321 00057", presentation: "Vend des fruits et légumes", compagnyname: "LeSaladier", user_id: userMap["mdurand@gmail.com"], event_id: NULL}]

    for (producer of producers) {
    await client.query("INSERT INTO producer (siret, presentation, compagnyname, user_id, event_id) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (siret) DO NOTHING", [
    producer.siret,
    producer.presentation,
    producer.compagnyname,
    producer.user_id,
    producer.event_id,
    ])}

    const producer_info = await client.query("SELECT id, compagnyname FROM producer")
    const producerMap = {}
    producer_info.rows.forEach(producer => {producerMap[producer.siret] = producer.id})


    // Category :
    await client.query("INSERT INTO category(label) VALUES ('boulangerie'), ('fruit et légume') ON CONFLICT (label) DO NOTHING")

    const category_info = await client.query("SELECT id, label FROM category")
    const categoryMap = {}
    category_info.rows.forEach(category => {categoryMap[category.label] = category.id})


    // Subcategory :
    const subcategory = [{label: "pain", category_id: categoryMap["boulangerie"]},
    {label: "légumes", category_id: categoryMap["fruit et légume"]}, 
    {label: "viennoiserie", category_id: categoryMap["boulangerie"]}]

    for (subcategories of subcategory) {
    await client.query("INSERT INTO subcategories (label, category_id) VALUES ($1, $2) ON CONFLICT (label) DO NOTHING", [
    subcategories.label,
    subcategories.category_id
    ])}

    const subcategory_info = await client.query("SELECT id, label FROM subcategories")
    const subcategoryMap = {}
    subcategory_info.rows.forEach(subcategory => {subcategoryMap[subcategory.label] = subcategory.id})

    // Product :
    const product = [{name: "pomme de terre", description: "ceci n'est pas une pomme", price: "5", image: "/Users/student/Documents/Project/SaoneLocal/front_base/images/legumes-patates.jpg", producer_id: producerMap["987 654 321 00057"], category_id: categoryMap["fruit et légume"], subcategory_id: subcategoryMap["légumes"]},
        {name: "croissant", description: "croissant doré", price: "4", image: "/Users/student/Documents/Project/SaoneLocal/front_base/images/boulangerie-croissants.jpg", producer_id: producerMap["123 456 789 00012"], category_id: categoryMap["boulangerie"], subcategory_id: subcategoryMap["viennoiserie"]},
        {name: "pain-campagne", description: "pain fait ce matin", price: "1.50", image: "/Users/student/Documents/Project/SaoneLocal/front_base/images/boulangerie-pain-campagne.jpg", producer_id: producerMap["123 456 789 00012"], category_id: categoryMap["boulangerie"], subcategory_id: subcategoryMap["pain"]}]

    for (products of product) {
    await client.query("INSERT INTO products (name, description, price, image, producer_id, category_id, subcategory_id) VALUES ($1, $2, $3, $4, $5, $6, $7) ON CONFLICT (image) DO NOTHING", [
    products.name,
    products.description,
    products.price,
    products.image,
    products.producer_id,
    products.category_id,
    products.subcategory_id
    ])}

    await client.query("COMMIT")
    console.log("le seeder a été executé")

    } 
    catch (error) {
        await client.query('rollback')
        console.error(' Erreur :', error)
    }

    finally {
        client.end()
    }
}

seed()
