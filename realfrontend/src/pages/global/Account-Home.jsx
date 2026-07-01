import { Link } from 'react-router-dom';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Account_Home() {
  return (
     <div class="bg-saone-cream min-h-screen flex flex-col items-center">
      <main className="w-full max-w-md min-h-screen relative shadow-2xl flex flex-col items-center text-center text-[#383C40]">
            <a href="/" class="absolute text-saone-green text-[30px] top-0 left-0 mt-[60px] ml-[30px]">
              <h2>←</h2>
            </a>

            <a href="/" class="absolute w-[40px] top-0 right-0 mt-[65px] mr-[30px]">
              <img src="../../assets/icon/picto-acceuil.png" alt="acceuil"/>
            </a>


          <h1 className="font-caveat text-[24px] mt-[200px]">BIENVENUE</h1>
          <p className="font-montserrat text-[18px]">sur</p>
          <img src="../../../assets/Logo-principal.png" alt="Logo" className="w-[200px] h-[200px] object-cover mb-[50px]"/>
          <p className="font-montserrat text-[18px] mb-[20px]">Je suis</p>
          <div className="flex flex-row gap-3 text-saone-cream font-montserrat text-[14px] mb-[160px]">
              <Link to="/login-client" className="flex-1 bg-saone-terracotta rounded-full w-[90px] py-3 px-1 text-center">Client</Link>
              <Link to="/login-producteur" className="flex-1 bg-saone-terracotta rounded-full w-[90px] py-3 px-2 text-center">Producteur</Link>
          </div>
          <Navbar />
          <Footer />
      </main>
    </div>
  );
}