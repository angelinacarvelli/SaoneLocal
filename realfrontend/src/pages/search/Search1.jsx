import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Search1() {
  return (
    <div className="bg-saone-cream min-h-screen flex flex-col items-center">
        <main class="w-full max-w-md min-h-screen relative shadow-2xl bg-saone-cream font-montserrat">
            <Header title="rechercher"/>
            <div class="flex flex-col items-center">
                <input type="text" placeholder="Que recherchez-vous ?" class=" w-[90%] mt-[18px] h-[35px] 
                rounded-full bg-saone-green text-saone-cream placeholder:text-saone-cream px-4 text-[12px]"/>

                <section class="w-[90%] mt-[22px] bg-saone-green rounded-[16px] p-2">
                    <img src="/assets/search/le-saviez-vous-appellations.jpg" class="w-full h-[105px] rounded-[14px] object-cover"/>
                    <p class="mt-3 text-saone-cream text-[11px] px-2 pb-2">La Bourgogne possède plus de 400 appellations d'origine contrôlée, 
                        ce qui en fait l'une des régions viticoles les plus complexes au monde.</p>
                </section>      

                <section class="w-[90%] mt-[12px] bg-saone-green rounded-[16px] p-2">
                    <img src="/assets/search/le-saviez-vous-climat.jpg" class="w-full h-[105px] rounded-[14px] object-cover"/>
                    <p class="mt-3 text-saone-cream text-[11px] px-2 pb-2">Le concept de "climat" en Bourgogne ne désigne pas la météo, 
                        mais une parcelle de vigne précisément délimitée, avec son sol, son exposition et son microclimat propres.</p>
                </section>
            </div>
            <Navbar />
            <Footer />
        </main>
    </div>
  );
}