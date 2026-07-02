import { Link } from 'react-router-dom';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Wine_sort_product() {
  return (
    <div className="bg-saone-cream min-h-screen flex flex-col items-center">
        <main class="w-full max-w-md min-h-screen relative shadow-2xl flex flex-col items-center gap-3">
            <Header title="catalogue de nos produits"/>
            <div class="bg-[#D3D3D3] flex justify-around font-montserrat rounded-2xl w-[90%] text-[16px] p-[5px]">
                <p>Trier par :</p>
                <p class="underline font-medium">Produits</p>
                <a href="/wine-sort-producer">Producteurs</a>
            </div>

            <div class="text-[14px] mx-[10px]">
                <h2 class="font-caveat text-saone-green uppercase text-[16px] mt-[20px]">Vins rouge & blancs ⌄</h2>
                    <div class="w-full flex flex-around gap-2 m-[10px]">
                        <div class="flex flex-col gap-2">
                            <img src="../../../assets/products/Vins/vins-mercurey-rouge.jpg" class="w-[100px] h-[100px] object-cover rounded-2xl"/>
                            <p>Mercurey rouge <br/> 2021</p>
                            <p class="font-medium">14,50€(75cl)</p>
                            <button class="bg-saone-terracotta text-saone-cream rounded-full text-[13px] font-montserrat shadow-md hover:bg-[#8e362b] transition-colors p-[5px]">
                            Ajouter au panier
                            </button>
                        </div>

                        <div class="flex flex-col gap-2">
                            <img src="../../../assets/products/Vins/vins-bourgogne-rouge.jpg" class="w-[100px] h-[100px] object-cover rounded-2xl"/>
                            <p>Bourgogne rouge <br/> 2022</p>
                            <p class="font-medium">9,50€(75cl)</p>
                            <button class="bg-saone-terracotta text-saone-cream rounded-full text-[13px] font-montserrat shadow-md hover:bg-[#8e362b] transition-colors p-[5px]">
                            Ajouter au panier
                            </button>
                        </div>

                        <div class="flex flex-col gap-2">
                            <img src="../../../assets/products/Vins/vins-mercurey-blanc.jpg" class="w-[100px] h-[100px] object-cover rounded-2xl"/>
                            <p>Mercurey blanc <br/> 2022</p>
                            <p class="font-medium">13€(75cl)</p>
                            <button class="bg-saone-terracotta text-saone-cream rounded-full text-[13px] font-montserrat shadow-md hover:bg-[#8e362b] transition-colors p-[5px]">
                            Ajouter au panier
                            </button>
                        </div>
                    </div>


                <h2 class="font-caveat text-saone-green uppercase text-[16px] mt-[20px]">autres ⌄</h2>
                        <div class="flex flex-col gap-2">
                            <img src="../../../assets/products/Vins/vins-mercurey-rouge.jpg" class="w-[100px] h-[100px] object-cover rounded-2xl"/>
                            <p>Mercurey rouge <br/> 2021</p>
                            <p class="font-medium">14,50€(75cl)</p>
                            <button class="bg-saone-terracotta text-saone-cream rounded-full text-[13px] font-montserrat shadow-md hover:bg-[#8e362b] transition-colors p-[5px] w-[120px]">
                            Ajouter au panier
                            </button>
                        </div>

                    
                <h2 class="font-caveat text-saone-green uppercase text-[16px] mt-[20px]">lots ⌄</h2>
                    <div class="w-full flex flex-around gap-2 m-[10px]">
                        <div class="flex flex-col gap-2">
                            <img src="../../../assets/products/Vins/vins-mercurey-rouge.jpg" class="w-[100px] h-[100px] object-cover rounded-2xl"/>
                            <p>Mercurey rouge <br/> 2021</p>
                            <p class="font-medium">14,50€(75cl)</p>
                            <button class="bg-saone-terracotta text-saone-cream rounded-full text-[13px] font-montserrat shadow-md hover:bg-[#8e362b] transition-colors p-[5px]">
                            Ajouter au <br/> panier
                            </button>
                        </div>

                        <div class="flex flex-col gap-2">
                            <img src="../../../assets/products/Vins/vins-bourgogne-rouge.jpg" class="w-[100px] h-[100px] object-cover rounded-2xl"/>
                            <p>Bourgogne rouge <br/> 2022</p>
                            <p class="font-medium">9,50€(75cl)</p>
                            <button class="bg-saone-terracotta text-saone-cream rounded-full text-[13px] font-montserrat shadow-md hover:bg-[#8e362b] transition-colors p-[5px]">
                            Ajouter au <br/> panier
                            </button>
                        </div>
                    </div>
            </div>
            <Navbar />
            <Footer />
        </main>
    </div>
  );
}