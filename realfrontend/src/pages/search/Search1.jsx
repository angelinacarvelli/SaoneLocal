import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Search1() {
  return (
    <main class="bg-saone-cream font-montserrat">
        <div class="max-w-[375px] mx-auto px-4 pb-24">

            <input type="text" placeholder="Que recherchez-vous ?" class="mt-[18px] w-full h-[35px] rounded-full bg-saone-green text-saone-cream placeholder:text-saone-cream px-4 text-[12px]"/>

            <section class="mt-[22px] bg-saone-green rounded-[16px] p-2">
                <img src="../realfrontend/assets/le-saviez-vous-appellations.jpg" class="w-full h-[105px] rounded-[14px] object-cover"/>
                <p class="mt-3 text-saone-cream text-[11px] px-2 pb-2">La Bourgogne possède plus de 400 appellations d'origine contrôlée, 
                    ce qui en fait l'une des régions viticoles les plus complexes au monde.</p>
            </section>      

            <section class="mt-[12px] bg-saone-green rounded-[16px] p-2">
                <img src="../realfrontend/assets/le-saviez-vous-climat.jpg" class="w-full h-[105px] rounded-[14px] object-cover"/>
                <p class="mt-3 text-saone-cream text-[11px] px-2 pb-2">Le concept de "climat" en Bourgogne ne désigne pas la météo, 
                    mais une parcelle de vigne précisément délimitée, avec son sol, son exposition et son microclimat propres.</p>
            </section>
        </div>
    </main>
  );
}