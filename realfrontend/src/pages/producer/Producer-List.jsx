import { Link } from 'react-router-dom'; // Assurez-vous que cet import est présent
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Producer_List() {
  return (
    <div className="bg-saone-cream min-h-screen flex flex-col items-center">
        <main className="w-full max-w-md min-h-screen relative shadow-2xl flex flex-col text-[16px] bg-saone-cream font-montserrat">
            <Header title="fiches producteurs"/>
            
            <div className="flex flex-row gap-2 m-[20px]">
                {/* Karim */}
                <div className="flex flex-col gap-1 items-center text-center text-[#383C40]">
                    <Link to="/ProducerDetail-Karim-Benchouia">
                        <img 
                            src="../../../assets/users/saonelocal-karim-producteur.png" 
                            alt="Karim" 
                            className="w-[120px] h-[120px] object-cover rounded-2xl cursor-pointer"
                        />
                    </Link>
                    <h2 className="text-saone-green font-caveat text-[14px]">Karim BENCHOUIA</h2>
                    <p>Boulanger<br/>artisan</p>
                </div>

                {/*/ Michel */}
                <div className="flex flex-col gap-1 items-center text-center text-[#383C40]">
                    <Link to="/ProducerDetail-Michel-Durand">
                        <img 
                            src="../../../assets/users/saonelocal-michel-producteur.png" 
                            alt="Michel" 
                            className="w-[120px] h-[120px] object-cover rounded-2xl cursor-pointer"
                        />
                    </Link>
                    <h2 className="text-saone-green font-caveat text-[14px]">Michel DURAND</h2>
                    <p>Maraîcher</p>
                </div>

                <div className="flex flex-col gap-1 items-center text-center text-[#383C40]">
                    <button><img src="../../../assets/users/saonelocal-isabelle-producteur.png" alt="Isabelle" className="w-[120px] h-[120px] object-cover rounded-2xl"/></button>
                    <h2 className="text-saone-green font-caveat text-[14px]">Isabelle <br/>FONTAINE-MARCHAIS</h2>
                    <p>Vigneronne</p>
                </div>
            </div>    
            <Navbar />
            <Footer />
        </main>
    </div>    
  );
}