import { Link } from 'react-router-dom';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Vegetables_Sort_Producer() {
  return (
    <div className="bg-saone-cream min-h-screen flex flex-col items-center">
        <main class="w-full max-w-md min-h-screen relative shadow-2xl flex flex-col gap-3">
            <Header title="catalogue de nos produits"/>
            <div class="flex flex-col gap-3 items-center">
                <div class="bg-[#D3D3D3] flex justify-around font-montserrat rounded-2xl w-[90%] text-[16px] p-[5px]">
                    <p>Trier par :</p>
                    <a href="/vegetables-sort-product">Produits</a>
                    <p class="underline font-medium">Producteurs</p>
                </div>

                <div class="text-[14px] mx-[10px]">
                    <h2 class="font-caveat text-saone-green uppercase text-[16px] mt-[20px]">Michel DURAND ⌄</h2>
                        <div class="w-full flex flex-around gap-2 m-[10px]">
                            <div class="flex flex-col gap-2">
                                <img src="../../../assets/products/Fruits-légumes/legumes-carottes.jpg" class="w-[115px] h-[115px] object-cover rounded-2xl"/>
                                <p>Carrotes</p>
                                <p class="font-medium">1,80€(botte)</p>
                            </div>

                            <div class="flex flex-col gap-2">
                                <img src="../../../assets/products/Fruits-légumes/legumes-radis.jpg" class="w-[115px] h-[115px] object-cover rounded-2xl"/>
                                <p>Radis</p>
                                <p class="font-medium">1,20€(botte)<br/></p>
                            </div>

                            <div class="flex flex-col gap-2">
                                <img src="../../../assets/products/Fruits-légumes/legumes-tomates.jpg" class="w-[115px] h-[115px] object-cover rounded-2xl"/>
                                <p>Tomates</p>
                                <p class="font-medium">3,50€(1kg)<br/></p>
                            </div>
                        </div>

                        <div class="flex flex-row gap-2 items-center mb-[30px]">
                                <button class="bg-saone-terracotta text-saone-cream rounded-full text-[13px] font-montserrat shadow-md hover:bg-[#8e362b] transition-colors w-[120px]">
                                Ajouter au <br/> panier
                                </button>

                                <button class="bg-saone-terracotta text-saone-cream rounded-full text-[13px] font-montserrat shadow-md hover:bg-[#8e362b] transition-colors w-[120px]">
                                Ajouter au <br/> panier
                                </button>

                                <button class="bg-saone-terracotta text-saone-cream rounded-full text-[13px] font-montserrat shadow-md hover:bg-[#8e362b] transition-colors w-[120px]">
                                Ajouter au <br/> panier
                                </button>
                        </div>

                        <div class="w-full flex flex-around gap-2 m-[10px]">
                            <div class="flex flex-col gap-2">
                                <img src="../../../assets/products/Fruits-légumes/legumes-courgettes.jpg" class="w-[115px] h-[115px] object-cover rounded-2xl"/>
                                <p>Courgettes</p>
                                <p class="font-medium">2,80€(1g)</p>
                            </div>

                            <div class="flex flex-col gap-2">
                                <img src="../../../assets/products/Fruits-légumes/legumes-haricots-verts.jpg" class="w-[115px] h-[115px] object-cover rounded-2xl"/>
                                <p>Haricots verts</p>
                                <p class="font-medium">3€(500g)</p>
                            </div>

                            <div class="flex flex-col gap-2">
                                <img src="../../../assets/products/Fruits-légumes/legumes-salade.jpg" class="w-[115px] h-[115px] object-cover rounded-2xl"/>
                                <p>Salade (batavia)</p>
                                <p class="font-medium">1,50€(unité)<br/></p>
                            </div>
                        </div>

                        <div class="flex flex-row gap-2 items-center mb-[30px]">
                            <button class="bg-saone-terracotta text-saone-cream rounded-full text-[13px] font-montserrat shadow-md hover:bg-[#8e362b] transition-colors w-[120px]">
                            Ajouter au <br/> panier
                            </button>

                            <button class="bg-saone-terracotta text-saone-cream rounded-full text-[13px] font-montserrat shadow-md hover:bg-[#8e362b] transition-colors w-[120px]">
                            Ajouter au <br/> panier
                            </button>

                            <button class="bg-saone-terracotta text-saone-cream rounded-full text-[13px] font-montserrat shadow-md hover:bg-[#8e362b] transition-colors w-[120px]">
                            Ajouter au <br/> panier
                            </button>
                        </div>

                        <div class="w-full flex flex-around gap-2 m-[10px]">
                            <div class="flex flex-col gap-2">
                                <img src="../../../assets/products/Fruits-légumes/legumes-patates.jpg" class="w-[115px] h-[115px] object-cover rounded-2xl"/>
                                <p>Pommes de <br/>terre</p>
                                <p class="font-medium">6,50€(5kg)</p>
                            </div>

                            <div class="flex flex-col gap-2">
                                <img src="../../../assets/products/Fruits-légumes/legumes-panier-de-saisonjpg.jpg" class="w-[115px] h-[115px] object-cover rounded-2xl"/>
                                <p>Panier de saisons</p>
                                <p class="font-medium">12€(lot)<br/></p>
                            </div>

                            <div class="flex flex-col gap-2">
                                <img src="../../../assets/products/Fruits-légumes/legumes-panier-famille.jpg" class="w-[115px] h-[115px] object-cover rounded-2xl"/>
                                <p>Panier famille</p>
                                <p class="font-medium">22€(lot)<br/></p>
                            </div>
                        </div>

                        <div class="flex flex-row gap-2 items-center mb-[30px]">
                            <button class="bg-saone-terracotta text-saone-cream rounded-full text-[13px] font-montserrat shadow-md hover:bg-[#8e362b] transition-colors w-[120px]">
                            Ajouter au <br/> panier
                            </button>

                            <button class="bg-saone-terracotta text-saone-cream rounded-full text-[13px] font-montserrat shadow-md hover:bg-[#8e362b] transition-colors w-[120px]">
                            Ajouter au <br/> panier
                            </button>

                            <button class="bg-saone-terracotta text-saone-cream rounded-full text-[13px] font-montserrat shadow-md hover:bg-[#8e362b] transition-colors w-[120px]">
                            Ajouter au <br/> panier
                            </button>
                        </div>
                </div>
                <Navbar />
                <Footer />
            </div>
        </main>
    </div>
  );
}