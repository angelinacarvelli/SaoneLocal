import React, { useState } from 'react';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Favorites() {
  // Vos données locales (vous pouvez facilement ajouter d'autres produits ici)
  const [favorites, setFavorites] = useState([
    { id: 1, name: 'Pain de campagne', price: 5.60, img: '../../../assets/products/Boulangerie/boulangerie-pain-campagne.jpg' },
    { id: 2, name: 'Pommes de terre', price: 6.50, img: '../../../assets/products/Fruits-légumes/legumes-patates.jpg' },
    { id: 3, name: 'Radis', price: 2.40, img: '../../../assets/products/Fruits-légumes/legumes-radis.jpg' },
  ]);

  // Fonction pour retirer un favori au clic sur le cœur
  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-saone-cream min-h-screen flex flex-col items-center">
      <main className="w-full max-w-md min-h-screen relative shadow-2xl flex flex-col pb-24 px-4">
        <Header title="Mes favoris" />

        <div className="w-full mt-6">
          <h2 className="font-caveat text-saone-green text-[18px] mb-6">Succombez à ces pépites</h2>

          {favorites.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">Aucun favori pour le moment.</p>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {favorites.map((item) => (
                <div key={item.id} className="bg-white p-2 rounded-[20px] shadow-sm">
                  <div className="relative">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-[120px] rounded-[16px] object-cover" 
                    />
                    {/* Le bouton Cœur pour retirer */}
                    <button 
                      onClick={() => removeFavorite(item.id)}
                      className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full text-red-500 shadow-md transition hover:scale-110"
                    >
                      ♥
                    </button>
                  </div>
                  <div className="mt-2 px-1 pb-1">
                    <p className="text-[13px] font-medium truncate">{item.name}</p>
                    <p className="text-[12px] text-gray-600">{item.price.toFixed(2)}€</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <Navbar />
        <Footer />
      </main>
    </div>
  );
}