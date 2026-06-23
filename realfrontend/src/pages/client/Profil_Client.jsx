import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Profil_Client() {
  return (
    <body class="bg-saone-cream font-montserrat text-[#2E2E2E]">
        <div class="max-w-[375px] mx-auto min-h-screen px-4 pb-[140px]">

            <section class="mt-[42px] flex items-center gap-3">
                <img src="../image/saonelocal-sophie-client.jpg" alt="Sophie" class="w-[68px] h-[68px] rounded-[20px] object-cover"/>

                <div>
                    <h2 class="font-caveat text-[16px] text-[#2D231F]">Sophie</h2>
                    <button class="mt-2 bg-saone-terracotta text-saone-cream rounded-full px-5 py-2 text-[12px] font-semibold shadow-custom">Modifier le profil</button>
                </div>
            </section>

            <section class="mt-[18px] flex gap-2">
                <button class="flex-1 bg-saone-terracotta text-saone-cream rounded-full py-3 text-[12px] font-medium shadow-custom">Mes favoris</button>
                <button class="flex-1 bg-saone-terracotta text-saone-cream rounded-full py-3 text-[12px] font-medium shadow-custom">Mes événements</button>
            </section>

            <section class="mt-[18px] bg-saone-green rounded-[16px] p-4 text-saone-cream">
                <h2 class="font-caveat text-[14px]">Statut de la commande</h2>

                <p class="mt-1 text-[12px] font-semibold">Le paiement a été validé.</p>
            </section>

            <section class="mt-[18px] bg-saone-green rounded-[16px] p-4 text-saone-cream">
                <div class="flex justify-between items-center">

                    <h2 class="font-caveat text-[14px]">Historique des commandes</h2>

                    <span class="text-[12px]">5</span>
                </div>

                <div class="mt-4 border border-saone-cream rounded-[16px] px-3 py-4 flex items-center justify-between gap-2">
                    <span class="text-[12px]">CC-1403-038</span>

                    <span class="text-[12px]">14 mars 2026</span>

                    <span class="text-[12px]">Retirée</span>

                    <button
                        class="bg-saone-terracotta text-saone-cream rounded-full px-4 py-2 text-[12px] shadow-custom">
                        Voir plus
                    </button>
                </div>
            </section>

            <section class="mt-[22px]">
                <h2 class="font-caveat text-[16px] text-saone-green uppercase mb-[22px]">
                    Vous pourriez aimer ceci :
                </h2>
                <div class="grid grid-cols-3 gap-x-3">
                    <article>
                        <div class="relative">
                            <button><img src="../image/boulangerie-pain-levain.jpg" alt="Pain au levain" class="w-full aspect-square rounded-[24px] object-cover text-[10px]"/></button>
                            <button class="absolute top-2 right-2 text-white text-xl">♡</button>
                        </div>

                        <h3 class="mt-[8px] text-center text-[12px]">Pain au levain</h3>
                        <p class="mt-[10px] text-center text-[12px]">4,50€</p>
                        <button class="mt-[12px] w-full bg-saone-terracotta text-saone-cream rounded-full py-2 text-[12px] shadow-custom leading-tight">Ajouter au panier</button>
                    </article>

                    <article>
                        <div class="relative">
                            <button><img src="../image/legumes-radis.jpg" alt="Radis" class="w-full aspect-square rounded-[24px] object-cover text-[10px]"/></button>
                            <button class="absolute top-2 right-2 text-white text-xl">♡</button>
                        </div>

                        <h3 class="mt-[8px] text-center text-[12px]">Radis</h3>
                        <p class="mt-[10px] text-center text-[12px]">1,80€</p>
                        <button class="mt-[12px] w-full bg-saone-terracotta text-saone-cream rounded-full py-2 text-[12px] shadow-custom leading-tight">Ajouter au panier</button>
                    </article>

                    <article>
                        <div class="relative">
                            <button><img src="../image/vins-mercurey-blanc.jpg" alt="Mercurey blanc" class="w-full aspect-square rounded-[24px] object-cover text-[10px]"/></button>
                            <button class="absolute top-2 right-2 text-white text-xl">♡</button>
                        </div>

                        <h3 class="mt-[8px] text-center text-[12px]">Mercurey blanc</h3>
                        <p class="mt-[10px] text-center text-[12px]">13€</p>
                        <button
                            class="mt-[12px] w-full bg-saone-terracotta text-saone-cream rounded-full py-2 text-[12px] shadow-custom leading-tight">
                            Ajouter au panier
                        </button>
                    </article>
                </div>
            </section>
        </div>
    </body>
  );
}