import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function ProducerDetail() {
  return (
    <div className="bg-saone-cream min-h-screen flex flex-col items-center font-montserrat">
      <main className="w-full max-w-md min-h-screen relative shadow-2xl bg-saone-cream flex flex-col p-4 gap-4">
        
        <Header title="Fiches Producteurs" />

        {/* Profil Producteur */}
        <div className="flex gap-4 items-start mt-4">
        <img src="/assets/users/saonelocal-karim-producteur.png" alt="Karim Benchouia" className="w-24 h-24 rounded-2xl object-cover" />
          <div>
            <h2 className="font-bold text-lg text-saone-green">Karim Benchouia</h2>
            <p className="text-sm font-semibold">Boulanger artisan</p>
            <p className="text-xs text-gray-500">Saint-Marcel</p>
          </div>
        </div>

        {/* Biographie */}
        <p className="text-sm text-gray-700 leading-relaxed">
          La boulangerie, Karim n'a jamais envisagé autre chose. Il pétrit à la main, surveille son levain et enfourne des pains au four à sole avec la même attention qu'à ses débuts et il ne compte pas changer ça.
          <br /><br />
          Ses spécialités ? Des recettes ancrées dans le terroir bourguignon, travaillées avec des farines locales.
          <br /><br />
          Son pain, lui, vous parle du coin.
        </p>

        <hr className="border-saone-green/20" />

        {/* Section Produits */}
        <h3 className="font-bold text-saone-green">LES PRODUITS</h3>
        <div className="grid grid-cols-3 gap-2">
          
        {/* Produit */}
          <Link to="/produit/baguette-tradition" className="flex flex-col gap-1">
            <img src="/assets/products/Boulangerie/boulangerie-baguette-tradition.jpg" alt="Baguette" className="w-full aspect-square rounded-xl object-cover" />
            <h4 className="text-[10px] font-bold leading-tight">Baguette tradition</h4>
            <p className="text-[10px] text-gray-600">1,20€</p>
          </Link>

          {/* Produit */}
          <Link to="/produit/flute" className="flex flex-col gap-1">
            <img src="/assets/products/Boulangerie/boulangerie-flute.jpg" alt="Flûte" className="w-full aspect-square rounded-xl object-cover" />
            <h4 className="text-[10px] font-bold leading-tight">Flûte</h4>
            <p className="text-[10px] text-gray-600">0,90€</p>
          </Link>

          {/* Produit */}
          <Link to="/ProductDetail-Pain-aux-céréales" className="flex flex-col gap-1">
            <img src="/assets/products/Boulangerie/boulangerie-pain-cereales.jpg" alt="Pain aux céréales" className="w-full aspect-square rounded-xl object-cover" />
            <h4 className="text-[10px] font-bold leading-tight">Pain aux céréales</h4>
            <p className="text-[10px] text-gray-600">3,20€</p>
          </Link>

          

        </div>

        <div className="mt-auto">
            <Navbar />
            <Footer />
        </div>
      </main>
    </div>
  );
}