import { Link } from 'react-router-dom';
import Head from '../../component/Head';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function More_On_Us() {
  return (
    <main className="w-[375px] mx-auto min-h-screen bg-saone-cream font-montserrat p-6">
        <Head />
        <Header />
        <h1 className="text-center font-caveat text-[24px] mb-6">À propos de nous</h1>
        <div className="text-[14px] text-[#383C40] mb-8">
            <p>SaôneLocal est une initiative visant à rapprocher les producteurs locaux de la région de la Saône des consommateurs soucieux de manger sain et local.</p>
        </div>
        <div className="flex flex-col gap-4">
            <Link to="/contact" className="text-center bg-saone-terracotta text-saone-cream py-3 rounded-full">Nous contacter</Link>
            <Link to="/" className="text-center border border-saone-green text-saone-green py-3 rounded-full">Retour à l'accueil</Link>
        </div>
        <Navbar />
        <Footer />
    </main>
  );
}