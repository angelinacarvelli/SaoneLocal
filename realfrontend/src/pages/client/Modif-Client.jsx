import { Link } from 'react-router-dom';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Modif_Client() {
  return (
    <main className="bg-saone-cream font-montserrat">
      <Header />
      <div className="max-w-[375px] mx-auto px-4 pb-24">
        <h2 className="text-[18px] font-bold text-center mt-8 mb-6">Modifier mon profil</h2>
        
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-[12px] mb-1">Nom</label>
            <input type="text" className="p-3 rounded-xl border border-gray-200" placeholder="Sophie" />
          </div>
          <div className="flex flex-col">
            <label className="text-[12px] mb-1">Email</label>
            <input type="email" className="p-3 rounded-xl border border-gray-200" placeholder="sophie.exemple@email.com" />
          </div>
          
          <div className="flex flex-col items-center gap-2 mt-[35px]">
            <Link to="/profile_client" className="bg-saone-terracotta text-saone-cream rounded-full px-10 py-3 text-[12px] font-bold shadow-custom">
              Enregistrer les modifications
            </Link>
          </div>
        </form> 
      </div>
      <Navbar />
      <Footer />
    </main>
  );
}