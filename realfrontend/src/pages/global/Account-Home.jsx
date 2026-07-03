import { Link } from 'react-router-dom';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Account_Home() {
  return (
    <div className="bg-saone-cream min-h-screen flex flex-col items-center">
      <main className="w-full max-w-md min-h-screen relative shadow-2xl flex flex-col text-center text-[#383C40]">
          <Header title=""/>
          <div class="flex flex-col items-center">
            
              <h1 className="font-caveat text-[24px] mt-[180px]">BIENVENUE</h1>
              <p className="font-montserrat text-[18px]">sur</p>
              <img src="../../../assets/Logo-principal.png" alt="Logo" className="w-[220px] h-[220px] object-cover mb-[50px]"/>

            <p className="font-montserrat text-[18px] mb-[20px]">Je suis</p>
            <div className="flex flex-row gap-3 text-saone-cream font-montserrat text-[14px]">
                <Link to="/login-client" className="flex-1 bg-saone-terracotta rounded-full w-[90px] py-3 px-1 text-center">Client</Link>
                <Link to="/login-producter" className="flex-1 bg-saone-terracotta rounded-full w-[90px] py-3 px-2 text-center">Producteur</Link>
            </div>
          </div>  
          <Navbar />
          <Footer />
      </main>
    </div>
  );
}
