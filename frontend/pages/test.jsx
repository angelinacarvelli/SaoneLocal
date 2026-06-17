import Card from "./components/Card";

export default function Test() {
    return (
    <>
    <meta charSet="UTF-8" />
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <title>SaôneLocal - Accueil</title>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />

    <link
        href="https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Montserrat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
    />
    <header classname="w-full pt-[60px] pb-[42px]">
        <html-include src="../components/header.jsx" />
    </header>
    <main classname="w-full flex-1 space-y-[22px] pb-[120px]">
        <card
        title="Plus sur nous"
        description="Notre association est une association de proximité, nous créons du lien avec nos clients. Ce ne sont pas de simples produits mais la Bourgogne entière que vous mettez en bouche."
        btn-text="Nous connaître"
        ></card>
        <card
        title="Nos producteurs locaux"
        description="Nos produits sont si savoureux parce qu'ils sont faits avec l'amour de nos producteurs. Nos producteurs s'impliquent dans leur travail."
        btn-text="Voir l'équipe"
        ></card>
        <card
        title="Se laisser tenter"
        description="Il faut mettre en bouche ces délices pour ressentir la Bourgogne et tout ce savoir-faire."
        btn-text="Goûter"
        has-images=""
        ></card>
    </main>
    <div classname="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] px-4 pb-4 bg-gradient-to-t from-saone-cream via-saone-cream/95 to-transparent pt-6 flex flex-col items-center gap-3 z-50">
        <html-include src="../components/navbar.jsx" classname="w-full" />
        <div classname="w-full">
        <html-include src="../components/footer.jsx" />
        </div>
    </div>
    </>
    );
}

