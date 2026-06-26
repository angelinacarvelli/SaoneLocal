import { Link } from 'react-router-dom';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Profile_Client() {
  return (
    <main className="bg-saone-cream font-montserrat text-[#2E2E2E]">
      <Header />
      <div className="max-w-[375px] mx-auto min-h-screen px-4 pb-[140px]">
        <section className="mt-[42px] flex items-center gap-3">
          <img src="../image/saonelocal-sophie-client.jpg" alt="Sophie" className="w-[68px] h-[68px] rounded-[20px] object-cover"/>
          <div>
            <h2 className="font-caveat text-[16px] text-[#2D231F]">Sophie</h2>
            <Link to="/modif-client" className="mt-2 block bg-saone-terracotta text-saone-cream rounded-full px-5 py-2 text-[12px] font-semibold shadow-custom text-center">Modifier le profil</Link>
          </div>
        </section>

        <section className="mt-10">
          <h3 className="font-bold text-[14px] mb-4">Mes informations</h3>
          <div className="bg-white p-4 rounded-2xl shadow-sm text-[12px]">
            <p>Email : sophie.exemple@email.com</p>
            <p className="mt-2">Adresse : 71200 Le Creusot</p>
          </div>
        </section>

        <section className="mt-6">
          <Link to="/historique-commandes" className="block w-full py-4 bg-white text-center rounded-2xl shadow-sm text-[12px] font-medium">
            Historique des commandes
          </Link>
          <Link to="/deconnexion" className="block w-full py-4 mt-3 bg-saone-green text-saone-cream text-center rounded-2xl shadow-sm text-[12px] font-medium">
            Déconnexion
          </Link>
        </section>
      </div>
      <Navbar />
      <Footer />
    </main>
  );
}