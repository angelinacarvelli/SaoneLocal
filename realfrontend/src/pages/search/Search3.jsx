import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Search3() {
  return (
    <main class="bg-saone-cream font-montserrat">
        <div class="max-w-[375px] mx-auto px-4 pb-24">

            <input type="text" placeholder="Que recherchez-vous ?" class="mt-[18px] w-full h-[35px] rounded-full bg-saone-green text-saone-cream placeholder:text-saone-cream px-4 text-[12px]"/>

            <section class="mt-[22px] bg-saone-green rounded-[16px] p-2">
                <img src="../../../assets/le-saviez-vous-miel.jpg" class="w-full h-[105px] rounded-[14px] object-cover"/>
                <p class="mt-3 text-saone-cream text-[11px] px-2 pb-2">Le pain d'épices de Dijon est l'un des plus anciens de France. fabriqué à base de farine de seigle
                    et de miel, il doit contenir au minimum 50% de miel pour porter l'appellation officielle dijonnaise.</p>
            </section>      

            <section class="mt-[12px] bg-saone-green rounded-[16px] p-2">
                <img src="../../../assets/le-saviez-vous-fromage-epoisses.jpg" class="w-full h-[105px] rounded-[14px] object-cover"/>
                <p class="mt-3 text-saone-cream text-[11px] px-2 pb-2">L'Époisse est un fromage à croûte lavée produit dans un petit village de Bourgogne
                    du même nom. Napoléon en était parait-il si friand qu'il le faisait livrer sur ses campagnes militaires.</p>
            </section>
        </div>
    </main>
  );
}