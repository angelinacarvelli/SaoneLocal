import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Event() {
  return (
    <div class="bg-saone-cream min-h-screen flex flex-col items-center">
        <main class="w-full max-w-md min-h-screen relative shadow-2xl bg-saone-cream font-montserrat">
        <Header title="calendrier"/>
            <div class="flex flex-col items-center">
                <section class="mt-[22px] space-y-3 w-[90%]">
                    <div class="bg-saone-green text-saone-cream rounded-[16px] p-3">
                        <h3 class="font-caveat text-[14px]">Oenologue junior - Vendredi 15 mai 2026  à 18H</h3>
                        <p class="text-[11px] mt-1">Atelier découverte des saveurs du vin et dégustation de vins bourguignons.</p>

                        <div class="flex justify-end">
                            <button class="bg-saone-terracotta rounded-full px-4 py-2 mt-2 text-[11px]">Enregistrer</button>
                        </div>
                    </div>

                    <div class="bg-saone-green text-saone-cream rounded-[16px] p-3">
                        <h3 class="font-caveat text-[14px]">Marché en plein air - Jeudi 21 mai 2026 à 8H00</h3>
                        <p class="text-[11px] mt-1">Flâner au soleil, croiser des visages familiers et choisir ses fruits et légumes directement chez ceux qui les cultivent.</p>

                        <div class="flex justify-end">
                            <button class="bg-saone-terracotta rounded-full px-4 py-2 mt-2 text-[11px]">Enregistrer</button>
                        </div>
                    </div>
                </section>
            </div>

                <div class="w-80% items-center h-[1px] bg-saone-green fs-0 mt-[30px] mx-[20px]"></div>
                <h2 class="mt-[22px] ml-[20px] font-caveat text-[16px] text-saone-green uppercase">Vos événements enregistrés</h2>

            <div class="flex flex-col items-center">
                <section class="mt-[13px] space-y-3 w-[90%]">
                    <div class="bg-saone-green text-saone-cream rounded-[16px] p-3 relative">
                        <h3 class="font-montserrat text-[14px]">Mercredi 29 avril 2026 - 13h30/17h</h3>
                        <p class="text-[11px] mt-5">Atelier pâtisserie en famille.</p>
                        <button class="absolute right-3 top-3 text-saone-terracotta text-xl"><img/></button>
                    </div>

                    <div class="bg-saone-green text-saone-cream rounded-[16px] p-3 relative">
                        <h3 class="font-montserrat text-[14px]">Samedi 9 mai 2026 - 10h30/13h</h3>
                        <p class="text-[11px] mt-5">Atelier "Bien faire pousser ses légumes".</p>
                        <button class="absolute right-3 top-3 text-saone-terracotta text-xl"><img/></button>
                    </div>
                </section>
            </div>
            <Navbar />
            <Footer />
        </main>
    </div>
  );
}