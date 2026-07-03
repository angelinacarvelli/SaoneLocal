import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Pain de campagne', info: '500g (unité)', price: '5,60€', qty: 2, img: '../../../assets/products/Boulangerie/boulangerie-pain-campagne.jpg' },
    { id: 2, name: 'Pommes de terre', info: '5kg', price: '6,50€', qty: 1, img: '../../../assets/products/Fruits-légumes/legumes-patates.jpg' },
    { id: 3, name: 'Radis', info: 'botte', price: '2,40€', qty: 2, img: '../../../assets/products/Fruits-légumes/legumes-radis.jpg' },
    { id: 4, name: 'Mercurey blanc 2022', info: '75cl (unité)', price: '39€', qty: 3, img: '../../../assets/products/Vins/vins-mercurey-blanc.jpg' },
  ]);

  return (
    <div className="bg-saone-cream min-h-screen flex flex-col items-center">
      <main className="w-full max-w-md min-h-screen relative shadow-2xl flex flex-col pb-24 px-4">
        <Header title="Mon panier" />
        
        <div className="w-full mt-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-caveat text-saone-green text-[18px]">Bonne dégustation !</h2>
            <a href="/favoris">
            <p className="text-xl">♡</p>
            </a>
          </div>

          {/* Liste des produits */}
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <img src={item.img} alt={item.name} className="w-[100px] h-[100px] rounded-[18px] object-cover" />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between">
                      <p className="font-medium text-[14px]">{item.name}</p>
                      <p className="text-[14px]">{item.price}</p>
                    </div>
                    <p className="text-[12px] text-gray-600">{item.info}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 self-end">
                    <span className="text-[12px]">Qté :</span>
                    <div className="bg-saone-terracotta text-white rounded-full px-3 py-1 flex items-center gap-3 text-[14px]">
                      <button>-</button>
                      <span>{item.qty}</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-saone-terracotta text-white p-4 rounded-2xl flex justify-between items-center shadow-lg">
            <span className="font-bold text-[16px]">Total : 53,50€</span>
            <Link to="/Success-Order" className="font-bold cursor-pointer hover:underline">
              Payer
            </Link>

          </div>
        </div>

        <Navbar />
        <Footer />
      </main>
    </div>
  );
}