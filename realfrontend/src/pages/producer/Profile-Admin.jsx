import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Profile_Admin() {
  return (
    <main class="bg-saone-cream font-montserrat">
        <div class="max-w-[375px] mx-auto px-4 pb-24">

            <section class="pt-[60px]">
                <div class="flex items-center gap-3">
                    <img src="../image/saonelocal-francoise-producteur.jpg" class="w-[60px] h-[60px] rounded-[18px] object-cover"/>

                    <div class="flex-1">
                        <h1 class="font-caveat text-[16px]"><b>Françoise</b></h1>

                        <div class="flex gap-2 mt-2">
                            <button class="bg-saone-terracotta text-saone-cream rounded-full px-4 py-2 text-[11px] shadow-custom">Modifier le profil</button>
                            <button class="bg-saone-terracotta text-saone-cream rounded-full px-4 py-2 text-[11px] shadow-custom">Passer en vue client</button>
                        </div>
                    </div>
                </div>
            </section>


            <section class="grid grid-cols-2 gap-3 mt-[18px]">
                <div class="bg-saone-green rounded-[16px] p-4 text-saone-cream shadow-custom">
                    <h2 class="font-montserrat text-[14px]">Commandes ce mois-ci :</h2>
                    <p class="text-right text-[28px]">205</p>
                </div>

                <div class="bg-saone-green rounded-[16px] p-4 text-saone-cream shadow-custom">
                    <h2 class="font-montserrat text-[14px]">Chiffre d'affaires ce mois-ci :</h2>
                    <p class="text-right text-[24px]">2 120€</p>
                </div>
            </section>

            <section class="mt-[18px] bg-saone-green rounded-[16px] p-4 text-saone-cream">

                <div class="flex justify-between items-center">
                    <h2 class="font-montserrat text-[14px]">Modifier les fiches producteurs</h2>
                    <button onclick="toggleProduit()"class="text-1'">⊕</button>
                </div>

                <div id="produit" class="hidden mt-4">

                    <section class="mt-[18px] bg-saone-green rounded-[16px] px-2 text-saone-cream flex flex-col gap-2 items-center">
                        <div class="flex flex-row gap-2">
                            <img src="../../../public/assets/users/saonelocal-karim-producteur.jpg" class="w-[90px] h-[90px] rounded-[18px] object-cover"/>
                            <img src="../../../public/assets/users/saonelocal-michel-producteur.jpg" class="w-[90px] h-[90px] rounded-[18px] object-cover"/>
                            <img src="../../../public/assets/users/saonelocal-isabelle-producteur.jpg" class="w-[90px] h-[90px] rounded-[18px] object-cover"/>
                        </div>

                        <div class="mt-2 border border-saone-cream rounded-xl p-3 text-[12px] w-full">
                            <div class="flex flex-row gap-3 mb-[10px]">
                                <span class="bg-saone-terracotta w-[75px] h-[75px] rounded-[16px] ">
                                    <p class="text-[20px] pt-[22px] pl-[30px] object-cover">⊕</p>
                                </span>
                                <div class="flex flex-col gap-2">                     
                                    <p>Nom du producteur : </p>
                                    <p>Spécialisation :</p>
                                    <p>Localisation :</p>
                                </div>
                            </div>

                            <p>Description :</p>
                            <button class="bg-saone-terracotta rounded-full px-4 py-2 text-[11px] float-right mt-3">Ajouter</button>
                        </div>

                    </section>
                    <div class="clear-both"></div>
                </div>

                <button class="bg-saone-terracotta rounded-full px-5 py-2 text-[11px] float-right mt-4">Voir l'équipe</button>
                <div class="clear-both"></div>
            </section>
        </div>

        {
        function toggleProduit(){
        document.getElementById("produit").classList.toggle("hidden");}
        }
    </main>
  );
}