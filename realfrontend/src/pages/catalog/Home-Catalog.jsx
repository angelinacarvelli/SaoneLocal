import { Link } from 'react-router-dom';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Home_Catalog() {
  return (
    <div className="bg-saone-cream min-h-screen flex flex-col items-center">
        <main className="w-full max-w-md min-h-screen relative shadow-2xl flex flex-col gap-3 bg-saone-cream">
            <Header title="catalogue de nos produits"/>
            <div class="flex flex-col items-center gap-3">
                <Link to="/producer-list" className="w-[90%] py-[20px] mt-[30px] bg-saone-green text-center rounded-2xl">  
                    <h2 className="text-[12px] text-saone-cream font-montserrat">Fiches producteurs</h2>
                </Link>

                <div className="w-[90%] flex flex-row gap-2 items-center mb-[30px]">
                    <Link to="/favoris" className="bg-saone-green text-center rounded-2xl py-[20px] w-full">
                        <h2 className="text-[12px] text-saone-cream font-montserrat">Favoris</h2>
                    </Link>
                    <Link to="/profile_client" className="bg-saone-green text-center rounded-2xl py-[20px] w-full">
                        <h2 className="text-[12px] text-saone-cream font-montserrat">Compte</h2>
                    </Link>
                </div>

                <div className="flex flex-col gap-4 items-center">
                    <button type="button">            
                        <div className="bg-[url(../../../assets/products/Boulangerie/catalogue-categorie-boulangerie.jpg)] bg-cover text-center rounded-2xl py-[40px] px-[80px]">
                            <h2 className="text-[12px] text-saone-cream font-montserrat bg-saone-terracotta opacity-90">BOULANGERIE</h2>
                        </div>
                    </button>
                    <button type="button">
                        <div className="bg-[url(../../../assets/products/Fruits-légumes/fruits-legumes-catalogue.jpg)] bg-cover text-center rounded-2xl py-[40px] px-[65px]">
                            <h2 className="text-[12px] text-saone-cream font-montserrat bg-saone-terracotta opacity-90">FRUITS & LÉGUMES</h2>
                        </div>
                    </button>
                    <button type="button">
                        <div className="bg-[url(../../../assets/products/Vins/catalogue-categorie-vins.jpg)] bg-cover text-center rounded-2xl py-[40px] px-[110px]">
                            <h2 className="text-[12px] text-saone-cream font-montserrat bg-saone-terracotta opacity-90">VINS</h2>
                        </div>
                    </button>
                </div>
            </div>    
            <Navbar />
            <Footer />
        </main>
    </div>
  );
}