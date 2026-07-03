import { Link } from 'react-router-dom';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Bakery_Sort_Product() {
  return (
    <div className="bg-saone-cream min-h-screen flex flex-col items-center">
        <main class="w-full max-w-md min-h-screen relative shadow-2xl flex flex-col gap-3">
            <Header title="catalogue de nos produits"/>
            <div class="flex flex-col gap-3 items-center">
                <div class="bg-[#D3D3D3] flex justify-around font-montserrat rounded-2xl w-[90%] text-[16px] p-[5px]">
                    <p>Trier par :</p>
                    <p class="underline font-medium">Produits</p>
                    <a href="/bakery-sort-producer">Producteurs</a>
                </div>

                <div class="text-[14px] mx-[10px]">
                    <h2 class="font-caveat text-saone-green uppercase text-[16px] mt-[20px]">Pains ⌄</h2>
                        <div class="w-full flex flex-around gap-2 m-[10px]">
                            <div class="flex flex-col gap-2">
                                <img src="../../../assets/products/Boulangerie/boulangerie-baguette-tradition.jpg" class="w-[115px] h-[115px] object-cover rounded-2xl"/>
                                <p>Baguette <br/> tradition</p>
                                <p class="font-medium">1,20€(unité)</p>
                            </div>

                            <div class="flex flex-col gap-2">
                                <img src="../../../assets/products/Boulangerie/boulangerie-flute.jpg" class="w-[115px] h-[115px] object-cover rounded-2xl"/>
                                <p>Flûte</p>
                                <p class="font-medium">0,90€(unité)<br/></p>
                            </div>

                            <div class="flex flex-col gap-2">
                                <img src="../../../assets/products/Boulangerie/boulangerie-pain-epautre.jpg" class="w-[115px] h-[115px] object-cover rounded-2xl"/>
                                <p>Pain d'épautre</p>
                                <p class="font-medium">4,80€(600g)<br/></p>
                            </div>
                        </div>

                        <div class="flex flex-row gap-2 items-center mb-[20px]">
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
                                <img src="../../../assets/products/Boulangerie/boulangerie-pain-campagne.jpg" class="w-[115px] h-[115px] object-cover rounded-2xl"/>
                                <p>Pain de <br/> campagne</p>
                                <p class="font-medium">2,80€(500g)</p>
                            </div>

                            <div class="flex flex-col gap-2">
                                <img src="../../../assets/products/Boulangerie/boulangerie-pain-cereales.jpg" class="w-[115px] h-[115px] object-cover rounded-2xl"/>
                                <p>Pain aux <br/> céreales</p>
                                <p class="font-medium">3,20€(500g)</p>
                            </div>

                            <div class="flex flex-col gap-2">
                                <img src="../../../assets/products/Boulangerie/boulangerie-pain-levain.jpg" class="w-[115px] h-[115px] object-cover rounded-2xl"/>
                                <p>Pain au levin</p>
                                <p class="font-medium">4,50€(750g)<br/></p>
                            </div>
                        </div>

                        <div class="flex flex-row gap-2 items-center mb-[10px]">
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

                        
                    <h2 class="font-caveat text-saone-green uppercase text-[16px] mt-[30px]">Viennoiseries ⌄</h2>
                        <div class="w-full flex flex-around gap-2 m-[10px]">
                            <div class="flex flex-col gap-2">
                                <img src="../../../assets/products/Boulangerie/boulangerie-pains-chocolat.jpg" class="w-[115px] h-[115px] object-cover rounded-2xl"/>
                                <p>Pains au <br/> chocolat</p>
                                <p class="font-medium">5€(lot x 4)</p>
                            </div>

                            <div class="flex flex-col gap-2">
                                <img src="../../../assets/products/Boulangerie/boulangerie-croissants.jpg" class="w-[115px] h-[115px] object-cover rounded-2xl"/>
                                <p>Croissants</p>
                                <p class="font-medium">5,50€(lot x 5)<br/></p>
                            </div>

                            <div class="flex flex-col gap-2">
                                <img src="../../../assets/products/Boulangerie/boulangerie-brioche.jpg" class="w-[115px] h-[115px] object-cover rounded-2xl"/>
                                <p>Brioche</p>
                                <p class="font-medium">5€(400g)<br/></p>
                            </div>
                        </div>

                        <div class="flex flex-row gap-2 items-center mb-[10px]">
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