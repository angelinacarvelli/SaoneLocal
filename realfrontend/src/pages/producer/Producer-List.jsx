import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Producer_List() {
  return (
    <main class="w-[375px] mx-auto min-h-screen flex flex-col text-[16px] bg-saone-cream font-montserrat">
        <Header title="fiches producteurs"/>
        <div class="flex flex-row gap-2 m-[20px]">
            <div class="flex flex-col gap-1 items-center text-center text-[#383C40]">
                <button><img src="../../../assets/users/saonelocal-karim-producteur.png" alt="Karim" class="w-[120px] h-[120px] object-cover rounded-2xl"/></button>
                <h2 class="text-saone-green font-caveat text-[14px]">Karim BENCHOUIA</h2>
                <p>Boulanger<br/>artisan</p>
            </div>

            <div class="flex flex-col gap-1 items-center text-center text-[#383C40]">
                <button><img src="../../../assets/users/saonelocal-michel-producteur.png" alt="Michel" class="w-[120px] h-[120px] object-cover rounded-2xl"/></button>
                <h2 class="text-saone-green font-caveat text-[14px]">Michel DURAND</h2>
                <p>Maraîcher</p>
            </div>

            <div class="flex flex-col gap-1 items-center text-center text-[#383C40]">
                <button><img src="../../../assets/users/saonelocal-isabelle-producteur.png" alt="Isabelle" class="w-[120px] h-[120px] object-cover rounded-2xl"/></button>
                <h2 class="text-saone-green font-caveat text-[14px]">Isabelle <br/>FONTAINE-MARCHAIS</h2>
                <p>Vigneronne</p>
            </div>
        </div>    
        <Navbar />
        <Footer />
    </main>
  );
}