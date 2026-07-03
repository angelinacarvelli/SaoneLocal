import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import { ClientAPI } from '../../api/client.api';

export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadBasket = async () => {
    try {
      const data = await ClientAPI.getBasket();
      setCartItems(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadBasket(); }, []);

  const changeQty = async (productId, newQty) => {
    if (newQty <= 0) return removeItem(productId);
    // maj optimiste
    setCartItems((items) => items.map((it) => it.id === productId ? { ...it, quantity: newQty } : it));
    try {
      await ClientAPI.updateBasketItem(productId, newQty);
    } catch (err) {
      alert(err.message);
      loadBasket();
    }
  };

  const removeItem = async (productId) => {
    setCartItems((items) => items.filter((it) => it.id !== productId));
    try {
      await ClientAPI.removeBasketItem(productId);
    } catch (err) {
      alert(err.message);
      loadBasket();
    }
  };

  const handlePay = async () => {
    try {
      await ClientAPI.checkout();
      navigate('/success-order');
    } catch (err) {
      alert(err.message || "Impossible de valider la commande");
    }
  };

  const total = cartItems.reduce((sum, it) => sum + Number(it.price) * it.quantity, 0);
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
            <span className="text-xl">♡</span>
          </div>

          {loading && <p className="text-center text-sm text-gray-500">Chargement du panier…</p>}
          {error && <p className="text-center text-sm text-red-600">{error}</p>}
          {!loading && !error && cartItems.length === 0 && (
            <p className="text-center text-sm text-gray-500">Ton panier est vide.</p>
          )}

          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <img src={item.image} alt={item.name} className="w-[100px] h-[100px] rounded-[18px] object-cover" />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between">
                      <p className="font-medium text-[14px]">{item.name}</p>
                      <p className="text-[14px]">{Number(item.price).toFixed(2)}€</p>
                    </div>
                    <p className="text-[12px] text-gray-600">{item.description}</p>
                  </div>

                  <div className="flex items-center gap-2 self-end">
                    <span className="text-[12px]">Qté :</span>
                    <div className="bg-saone-terracotta text-white rounded-full px-3 py-1 flex items-center gap-3 text-[14px]">
                      <button onClick={() => changeQty(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => changeQty(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-[12px] text-gray-500 ml-2">✕</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {cartItems.length > 0 && (
            <div className="mt-8 bg-saone-terracotta text-white p-4 rounded-2xl flex justify-between items-center shadow-lg">
              <span className="font-bold text-[16px]">Total : {total.toFixed(2)}€</span>
              <button onClick={handlePay} className="font-bold cursor-pointer hover:underline">
                Payer
              </button>
            </div>
          )}
        </div>

        <Navbar />
        <Footer />
      </main>
    </div>
  );
}
