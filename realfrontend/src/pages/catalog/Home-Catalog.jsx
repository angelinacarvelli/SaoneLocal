import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Home_Catalog() {
  return (
    <main class="w-[375px] mx-auto min-h-screen bg-saone-cream flex flex-col items-center gap-3">
        <button type="button" class="w-full py-[20px] mt-[30px] bg-saone-green text-center rounded-2xl">  
            <h2 class="text-[12px] text-saone-cream font-montserrat">Fiches producteurs</h2>
        </button>

        <div class="w-full flex flex-row gap-2 items-center mb-[30px]">
            <button type="button" class="bg-saone-green text-center rounded-2xl py-[20px] w-full">
                <h2 class="text-[12px] text-saone-cream font-montserrat">Favoris</h2>
            </button>

            <button type="button" class="bg-saone-green text-center rounded-2xl py-[20px] w-full">
                <h2 class="text-[12px] text-saone-cream font-montserrat">Compte</h2>
            </button>
        </div>

        <div class="flex flex-col gap-4 items-center">
            <button type="button">            
                <div class="bg-[url(../images/catalogue-categorie-boulangerie.jpg)] bg-cover text-center rounded-2xl py-[40px] px-[80px]">
                    <h2 class=" text-[12px] text-saone-cream font-montserrat bg-saone-terracotta opacity-90">BOULANGERIE</h2>
                </div>
            </button>

            <button type="button">
                <div class="bg-[url(../images/catalogue-categorie.jpg-fruits-legumes.jpg)] bg-cover text-center rounded-2xl py-[40px] px-[65px]">
                    <h2 class=" text-[12px] text-saone-cream font-montserrat bg-saone-terracotta opacity-90">FRUITS & LÉGUMES</h2>
                </div>
            </button>

            <button type="button">
                <div class="bg-[url(../images/catalogue-categorie-vins.jpg)] bg-cover text-center rounded-2xl py-[40px] px-[110px]">
                    <h2 class=" text-[12px] text-saone-cream font-montserrat bg-saone-terracotta opacity-90">VINS</h2>
                </div>
            </button>
        </div>
    </main>
  );
}