import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Producer_List() {
  return (
    <main class="w-[375px] mx-auto min-h-screen bg-saone-cream flex flex-row gap-2 mt-[20px]">
        <div class="flex flex-col items-center text-center text-[#383C40] font-montserrat text-[16px]">
            <button><img src="../realfrontend/assets/karim-producteur.png" alt="Karim" class="w-[120px] h-[120px] object-cover rounded-3xl"/></button>
            <h2 class="text-saone-green font-caveat text-[14px]">Karim BENCHOUIA</h2>
            <p>Boulanger<br/>artisan</p>
        </div>

        <div class="flex flex-col items-center text-center text-[#383C40] font-montserrat text-[16px]">
            <button><img src="../realfrontend/assets/michel-producteur.png" alt="Michel" class="w-[120px] h-[120px] object-cover rounded-3xl"/></button>
            <h2 class="text-saone-green font-caveat text-[14px]">Michel DURAND</h2>
            <p>Maraîcher</p>
        </div>

        <div class="flex flex-col items-center text-center text-[#383C40] font-montserrat text-[16px]">
            <button><img src="../realfrontend/assets/isabelle-producteur.png" alt="Isabelle" class="w-[120px] h-[120px] object-cover rounded-3xl"/></button>
            <h2 class="text-saone-green font-caveat text-[14px]">Isabelle <br/>FONTAINE-MARCHAIS</h2>
            <p>Vigneronne</p>
        </div>
    </main>
  );
}