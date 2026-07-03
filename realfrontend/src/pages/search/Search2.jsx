import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Search2() {
  return (
    <main class="bg-saone-cream font-montserrat">
        <div class="max-w-[375px] mx-auto px-4 pb-24">

            <input type="text" placeholder="Que recherchez-vous ?" class="mt-[18px] w-full h-[35px] rounded-full bg-saone-green text-saone-cream placeholder:text-saone-cream px-4 text-[12px]"/>

            <section class="mt-[22px] bg-saone-green rounded-[16px] p-2">
                <img src="/assets/le-saviez-vous-bourguignon.jpg" class="w-full h-[105px] rounded-[14px] object-cover"/>
                <p class="mt-3 text-saone-cream text-[11px] px-2 pb-2">Le boeuf bourguignon était à l'origine un plat de paysans, cuisiné longtemps
                    pour attendrir des morceaux bon marché.
                </p>
            </section>      

            <section class="mt-[12px] bg-saone-green rounded-[16px] p-2">
                <img src="/assets/le-saviez-vous-cassis.jpg" class="w-full h-[105px] rounded-[14px] object-cover"/>
                <p class="mt-3 text-saone-cream text-[11px] px-2 pb-2">La Bourgogne est le berceau de la cassis de Dijon, utilisé pour fabriquer
                    la célèbre crème de cassis. Mélanger à du vin blanc, elle donne du Kir.</p>
            </section>
        </div>
    </main>
  );
}