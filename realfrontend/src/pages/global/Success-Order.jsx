import { Link } from 'react-router-dom';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Success_Order() {
  return (
    <main className="w-[375px] mx-auto min-h-screen bg-saone-cream">
        <Header />
        <h1 className="text-[#383C40] font-montserrat text-[18px] mt-[20px] mb-[70px] font-medium text-center">Commande CC-2304-038</h1>
        <div className="flex flex-col items-center gap-3">
            <div className="bg-saone-green flex flex-col items-center gap-3 text-center rounded-3xl px-[30px] py-[20px] mb-[50px]">
                <img src="../realfrontend/public/assets/paiement-effectue.png" alt="Check" className="w-[100px] h-[100px] object-cover"/>
                <h3 className="text-[18px] text-saone-cream font-montserrat">Commande passée avec succès</h3>
            </div>
            <Link to="/suivi" className="text-saone-cream font-montserrat text-[14px] bg-saone-terracotta rounded-full py-2 px-3 shadow-md shadow-zinc-400">Voir le suivi</Link>
            <Link to="/facture" className="text-saone-cream font-montserrat text-[14px] bg-saone-terracotta rounded-full py-2 px-2 shadow-md shadow-zinc-400">Télécharger ma facture</Link>
        </div>
        <Navbar />
        <Footer />
    </main>
  );
}