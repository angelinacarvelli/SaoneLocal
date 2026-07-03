import React, { useState } from 'react';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Favorites() {
  // État local pour gérer les favoris
  const [favorites, setFavorites] = useState([
    { id: 1, name: 'Pain de campagne', price: '2,90€', img: '../../../assets/products/Boulangerie/pain-campagne.jpg' },
    { id: 2, name: 'Pain de campagne', price: '2,90€', img: '../../../assets/products/Boulangerie/pain-campagne.jpg' },
  ]);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-saone-cream min-h-screen flex flex-col items-center">
      <main className="w-full max-w-md min-h-screen relative shadow-2xl flex flex-col items-center pb-24">
        <Header title="Mes favoris" />
        
        <div className="w-full px-4">
          <h2 className="mt-[22px] font-caveat text-saone-green uppercase text-[18px]">
            Succombez à ces pépites
          </h2>

          {/* Grille des favoris */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {favorites.map((item) => (
              <div key={item.id} className="flex flex-col gap-2">
                <div className="relative">
                  <img 
                    src={item.img} 
                    alt={item.name}
                    className="w-full h-[100px] rounded-[18px] object-cover" 
                  />
                  <button 
                    onClick={() => removeFavorite(item.id)} 
                    className="absolute top-1 right-1 text-white text-xl bg-black/20 rounded-full w-8 h-8 flex items-center justify-center"
                  >
                    ♥
                  </button>
                </div>

                <p className="text-[11px]">{item.name}</p>
                <p className="text-[11px] font-medium">{item.price}</p>
                <button className="bg-saone-terracotta text-saone-cream rounded-full w-full py-2 text-[10px] shadow-md hover:bg-[#8e362b] transition-colors">
                  Ajouter au panier
                </button>
              </div>
            ))}
          </div>
        </div>

        <Navbar />
        <Footer />
      </main>
    </div>
  );
}