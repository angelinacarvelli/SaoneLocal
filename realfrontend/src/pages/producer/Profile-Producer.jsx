import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Profile_Producer() {
  return (
    <main class="bg-saone-cream font-montserrat">
        <div class="max-w-[375px] mx-auto px-4 pb-24">

                <header class="pt-[60px]">
                    <div class="flex items-center gap-3">
                        <img src="../image/saonelocal-isabelle-producteur.jpg" class="w-[60px] h-[60px] rounded-[18px] object-cover"/>

                        <div class="flex-1">
                            <h1 class="font-caveat text-[16px]">Isabelle</h1>

                            <div class="flex gap-2 mt-2">
                                <button class="bg-saone-terracotta text-saone-cream rounded-full px-4 py-2 text-[11px] shadow-custom">Modifier le profil</button>
                                <button class="bg-saone-terracotta text-saone-cream rounded-full px-4 py-2 text-[11px] shadow-custom">Passer en vue client</button>
                            </div>
                        </div>
                    </div>
                </header>


            <section class="grid grid-cols-2 gap-3 mt-[18px]">
                <div class="bg-saone-green rounded-[16px] p-4 text-saone-cream shadow-custom">
                    <h2 class="font-caveat text-[14px]">Commandes ce mois-ci :</h2>
                    <p class="text-right text-[28px]">38</p>
                </div>

                <div class="bg-saone-green rounded-[16px] p-4 text-saone-cream shadow-custom">
                    <h2 class="font-caveat text-[14px]">Chiffre d'affaires ce mois-ci :</h2>
                    <p class="text-right text-[24px]">1240€</p>
                </div>
            </section>


            <section class="mt-[18px] bg-saone-green rounded-[16px] p-4 text-saone-cream">
                <h2 class="font-caveat text-[14px]">Statut des commandes</h2>

                <div class="mt-3 border border-saone-cream rounded-xl p-3 flex justify-between text-[12px]">
                    <span>CC-2304-038</span>
                    <span>23 avril 2026</span>
                    <span>Validée →</span>
                </div>
            </section>

            <section class="mt-[18px] bg-saone-green rounded-[16px] p-4 text-saone-cream">

                <div class="flex justify-between items-center">
                    <h2 class="font-caveat text-[14px]">Ajouter un produit</h2>
                    <button onclick="toggleProduit()"class="text-xl">⊕</button>
                </div>

                <div id="produit" class="hidden mt-4">

                    <div class="flex gap-3">
                        <div class="w-[65px] h-[65px] border border-saone-cream rounded-xl flex items-center justify-center">+</div>

                        <div class="text-[12px] leading-5">
                            <p>Nom du produit :</p>
                            <p>Prix :</p>
                            <p>Description :</p>
                        </div>
                    </div>

                    <button class="bg-saone-terracotta rounded-full px-4 py-2 text-[11px] float-right mt-3">Ajouter</button>

                    <div class="clear-both"></div>
                </div>

                <button class="bg-saone-terracotta rounded-full px-5 py-2 text-[11px] float-right mt-4">Mes produits</button>

                <div class="clear-both"></div>
            </section>


            <section class="mt-[18px] bg-saone-green rounded-[16px] p-4 text-saone-cream">

                <div class="flex justify-between items-center">
                    <h2 class="font-caveat text-[14px]">Ajouter un événement</h2>
                    <button onclick="toggleEvent()" class="text-xl">⊕</button>
                </div>

                <div id="event" class="hidden mt-4">

                    <div class="border border-saone-cream rounded-xl p-3 text-[12px] leading-5">
                        <p>Nom de l'événement :</p>
                        <p>Date :</p>
                        <p>Description :</p>
                    </div>

                    <button class="bg-saone-terracotta rounded-full px-4 py-2 text-[11px] float-right mt-3">Ajouter</button>

                    <div class="clear-both"></div>
                </div>

                <button class="bg-saone-terracotta rounded-full px-5 py-2 text-[11px] float-right mt-4">Mes événements</button>

                <div class="clear-both"></div>
            </section>
        </div>

        {
        function toggleProduit(){
        document.getElementById("produit").classList.toggle("hidden")}
        }

        {
        function toggleEvent(){
        document.getElementById("event").classList.toggle("hidden")}
        }
    </main>
  );
}