import React, { useState } from 'react';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Favorites() {
  // État local pour gérer les favoris
  const [favorites, setFavorites] = useState([
    { id: 1, name: 'Pain de campagne', price: '2,90€ (500g)', img: '../../../assets/products/Boulangerie/boulangerie-pain-campagne.jpg' },
    { id: 2, name: 'Mercurey rouge 2021', price: '14,50€ (75cl)', img: '../../../assets/products/Vins/vins-mercurey-rouge.jpg' },
    { id: 3, name: 'Salade (batavia)', price: '1,50€ (unité)', img: '../../../assets/products/Fruits-légumes/legumes-salade.jpg' },
    { id: 1, name: 'Brioche', price: '5€ (400g)', img: '../../../assets/products/Boulangerie/boulangerie-brioche.jpg' },
    { id: 2, name: 'Panier de saison', price: '12€ (lot)', img: '../../../assets/products/Fruits-légumes/legumes-panier-de-saisonjpg.jpg' },
    { id: 3, name: 'Lot Découverte', price: '35€ (3 bouteilles)', img: '../../../assets/products/Vins/vins-lot-decouverte.jpg' },
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

          <div className="grid grid-cols-3 gap-4 mt-4">
            {favorites.map((item) => (
              <div key={item.id} className="flex flex-col gap-2">
                <div className="relative">
                  <img 
                    src={item.img} 
                    alt={item.name}
                    className="w-[115px] h-[115px] object-cover rounded-2xl" 
                  />
                  <button 
                    onClick={() => removeFavorite(item.id)} 
                    className="absolute top-0 right-4 text-white text-[20px] flex items-center justify-center"
                  >
                    ♥
                  </button>
                </div>

                <p className="text-[13px]">{item.name}</p>
                <p className="text-[13px] font-medium">{item.price}</p>
                <button class="bg-saone-terracotta text-saone-cream rounded-full text-[13px] font-montserrat shadow-md hover:bg-[#8e362b] transition-colors w-[120px] mb-[30px]">
                Ajouter au <br/> panier
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


                        // <div class="w-full flex flex-around gap-2 m-[10px]">
                        //     <div class="flex flex-col gap-2">
                        //         <img src="../../../assets/products/Boulangerie/boulangerie-pain-campagne.jpg" class="w-[115px] h-[115px] object-cover rounded-2xl"/>
                        //         <p>Pain de <br/> campagne</p>
                        //         <p class="font-medium">2,80€(500g)</p>
                        //     </div>

                        //     <div class="flex flex-col gap-2">
                        //         <img src="../../../assets/products/Boulangerie/boulangerie-pain-cereales.jpg" class="w-[115px] h-[115px] object-cover rounded-2xl"/>
                        //         <p>Pain aux <br/> céreales</p>
                        //         <p class="font-medium">3,20€(500g)</p>
                        //     </div>

                        //     <div class="flex flex-col gap-2">
                        //         <img src="../../../assets/products/Boulangerie/boulangerie-pain-levain.jpg" class="w-[115px] h-[115px] object-cover rounded-2xl"/>
                        //         <p>Pain au levin</p>
                        //         <p class="font-medium">4,50€(750g)<br/></p>
                        //     </div>
                        // </div>

                        // <div class="flex flex-row gap-2 items-center mb-[30px]">
                        //     <button class="bg-saone-terracotta text-saone-cream rounded-full text-[13px] font-montserrat shadow-md hover:bg-[#8e362b] transition-colors w-[120px]">
                        //     Ajouter au <br/> panier
                        //     </button>

                        //     <button class="bg-saone-terracotta text-saone-cream rounded-full text-[13px] font-montserrat shadow-md hover:bg-[#8e362b] transition-colors w-[120px]">
                        //     Ajouter au <br/> panier
                        //     </button>

                        //     <button class="bg-saone-terracotta text-saone-cream rounded-full text-[13px] font-montserrat shadow-md hover:bg-[#8e362b] transition-colors w-[120px]">
                        //     Ajouter au <br/> panier
                        //     </button>
                        // </div>