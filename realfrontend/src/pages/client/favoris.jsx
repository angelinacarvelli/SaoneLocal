import React, { useEffect, useState } from 'react';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import { ClientAPI } from '../../api/client.api';
import { ProductAPI } from '../../api/product.api';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    ClientAPI.getFavorites()
      .then(setFavorites)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const removeFavorite = async (id) => {
    setFavorites((items) => items.filter((item) => item.id !== id));
    try {
      await ProductAPI.removeFavorite(id);
    } catch (err) {
      alert(err.message);
    }
  };

  const addToCart = async (id) => {
    try {
      await ProductAPI.addToCart(id, 1);
      alert("Produit ajouté au panier !");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="bg-saone-cream min-h-screen flex flex-col items-center">
      <main className="w-full max-w-md min-h-screen relative shadow-2xl flex flex-col items-center pb-24">
        <Header title="Mes favoris" />

        <div className="w-full px-4">
          <h2 className="mt-[22px] font-caveat text-saone-green uppercase text-[18px]">
            Succombez à ces pépites
          </h2>

          {loading && <p className="text-center text-sm text-gray-500 mt-4">Chargement…</p>}
          {error && <p className="text-center text-sm text-red-600 mt-4">{error}</p>}
          {!loading && !error && favorites.length === 0 && (
            <p className="text-center text-sm text-gray-500 mt-4">Aucun favori pour le moment.</p>
          )}

          <div className="grid grid-cols-2 gap-4 mt-4">
            {favorites.map((item) => (
              <div key={item.id} className="flex flex-col gap-2">
                <div className="relative">
                  <img
                    src={item.image}
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
                <p className="text-[11px] font-medium">{Number(item.price).toFixed(2)}€</p>
                <button
                  onClick={() => addToCart(item.id)}
                  className="bg-saone-terracotta text-saone-cream rounded-full w-full py-2 text-[10px] shadow-md hover:bg-[#8e362b] transition-colors"
                >
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