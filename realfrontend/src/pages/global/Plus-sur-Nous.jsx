import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Plus_sur_Nous() {
  return (
    <body class="w-[375px] mx-auto min-h-screen flex flex-col text-[14px] bg-saone-cream font-montserrat">
        <div class="flex flex-col items-center">
            <img src="../realfrontend/assets/Logo-principal.png" alt="Logo" class="w-[130px] h-[130px] object-cover mb-[40px] mt-[30px]"/>
        </div>
        <h2 class="font-caveat text-[18px] text-saone-green">NOTRE HISTOIRE</h2>
        <p>SaôneLocal est une association regroupant une <b>cinquantaine de producteurs locaux</b> du bassin chalonnais(vignerons, maraîchers, apiculteurs, fromagers)." </p>
        <p> <br/>Nous l'avons crée pour mettre davantage en lumière la Bourgogne et surtout <b>faire briller Chalon-sur-Saône.</b></p>
        <p><br/> Nous sommes une association chaleureuse et familiale. Lorsque vous acheter chez SaôneLocal, vous n'acheter pas que des produits. Nois vous livrons le <b>terroir</b> et un <b>véritable savoir-faire;</b></p>
        <div class="flex flex-row items-center gap-3 mt-[40px]">
            <img src="../image/saonelocal-françoise-client.jpg" alt="Françoise" class="w-[150px] h-[150px] rounded-[20px] object-cover"/>
            <div  class="flex flex-col">
                <h2 class="font-caveat text-[18px] text-saone-green">Françoise, la présidente</h2>
                <p>L'idée est simple : relier les habitants de la Saône à ceux qui produisent, fabriquent et transforment à deux pas de chez eux. Derrière chaque producteur, il y a une rencontre, une confiance, un engagement.</p> 
            </div>
        </div>
        <p class="font-caveat text-[18px] text-saone-green flex gap-3 items-center text-center mt-[20px]">Manger local, c'est bien mais savoir pourquoi et avec qui, c'est mieux</p>
        

    </body>
  );
}