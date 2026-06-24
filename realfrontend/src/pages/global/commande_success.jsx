import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Commande_Success() {
  return (
    <body class="w-[375px] mx-auto min-h-screen bg-saone-cream">
        <h1 class="text-[#383C40] font-montserrat text-[18px] mt-[20px] mb-[70px] mt-[10px] font-medium">Commande CC-2304-038</h1>
        <div class="flex flex-col items-center gap-3">
            <div class="bg-saone-green flex flex-col items-center gap-3 text-center rounded-3xl px-[30px] py-[20px] mb-[50px]">
                <img src="../realfrontend/assets/paiement-effectue.png" alt="Check" class="w-[100px] h-[100px] object-cover"/>
                <h3 class="text-[18px] text-saone-cream font-montserrat">Commande passée avec <br/>succès</h3>
            </div>

            <button type="button" class="text-saone-cream font-montserrat text-[14px] bg-saone-terracotta rounded-full py-2 px-3 shadow-md shadow-zinc-400">Voir le suivi</button>
            <button type="button" class="text-saone-cream font-montserrat text-[14px] bg-saone-terracotta rounded-full py-2 px-2 shadow-md shadow-zinc-400">Télécharger ma facture</button>
        </div>

    </body>
  );
}