import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import Card from '../../component/Card';

export default function Home() {
  return (
    <div className="bg-[#F5F3E7] min-h-screen flex flex-col items-center">
      {/* Conteneur type téléphone */}
      <div className="w-full max-w-md bg-[#F5F3E7] min-h-screen relative shadow-2xl">

        <header>
            <img class="w-[180px] h-[180px] object-cover" src="../../assets/Logo-principal.png" alt="logo"/>
            <a href="/" class="absolute w-[40px] top-0 right-0 mt-[65px] mr-[30px]">
              <img src="../../assets/icon/picto-acceuil.png" alt="acceuil"/>
            </a>
        </header>
        
        <main className="p-2">
          <Card 
            title="PLUS SUR NOUS" 
            description="Notre association est une association de proximité, nous créons du lien avec nos clients. Ce sont pas de simples produits mais la Bourgogne entière que vous mettez en bouche. SaôneLocal c'est une expérience pour vos papilles." 
            btnText="Nous connaître"
            link="/more-on-us"
          />
          <Card 
            title="NOS PRODUCTEURS LOCAUX" 
            description="Nos produits sont si savoureux parce qu'ils sont faits avec l'amour de nos producteurs. Nos producteurs s'impliquent dans leur travail et ont un véritable savoir-faire dans leur domaine." 
            btnText="Voir l'équipe" 
            link="/producer-list"
          />

          <div className="bg-saone-green text-saone-cream rounded-3xl p-6 mb-4 shadow-lg w-full max-w-md mx-auto">
            <h2 className="font-bold text-lg uppercase tracking-wider mb-3 font-caveat">Se laisser tenter</h2>
            <p className="text-sm opacity-90 mb-5 leading-relaxed font-montserrat">Il faut mettre en bouche ces délices pour ressentir la Bourgogne et tout ce savoir-faire.</p>

            <div class="flex flex-row gap-2">
              <img src="../../../assets//products/Boulangerie/boulangerie-pain-campagne.jpg" alt="pain-campagne" class="w-[120px] h-[120px] object-cover rounded-3xl"/>
              <img src="../../../assets/products/Fruits & légumes/legumes-patates.jpg" alt="patates" class="w-[120px] h-[120px] object-cover rounded-3xl"/>
              <img src="../../../assets/products/Vins/vins-mercurey-blanc.jpg" alt="mercurey-blanc" class="w-[120px] h-[120px] object-cover rounded-3xl"/>
            </div>

            <button href="/"
              className="bg-saone-terracotta text-saone-cream px-6 py-2 mt-[20px] rounded-full text-sm font-montserrat shadow-md hover:bg-[#8e362b] transition-colors ml-[65%]">
                Goûter
            </button>
          </div>

        </main>
        
        <Footer />
        <Navbar />
      </div>
    </div>
  );
}