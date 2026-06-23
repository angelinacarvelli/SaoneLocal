import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Modif_Client() {
  return (
    <body class="bg-saone-cream font-montserrat">
        <div class="max-w-[375px] mx-auto px-4 pb-24">

            <h1 class="pt-[60px] text-center font-caveat text-[20px] text-saone-terracotta uppercase">Modifier mon profil</h1>

            <div class="mt-[22px] text-center">

                <label for="photo" class="text-[10px] font-semibold text-saone-green cursor-pointer relative inline-block">
                    <img src="../image/saonelocal-sophie-client.jpg" class="w-[70px] h-[70px] rounded-full object-cover"/>
                    <p class="absolute top-0 right-0 mt-6 mr-6 bg-saone-terracotta text-white rounded-full w-5 h-5 pt-0.5">+</p>
                </label>

                <input type="file" accept="image/*" class="hidden" onchange="changePhoto(event)"/>

                <p class="text-[11px] text-saone-green mt-2">Changer la photo</p>
            </div>

            <form class="mt-[18px] space-y-3">
                <div>
                    <label class="font-caveat text-[15px] text-saone-green">Nom</label>
                    <input name="nom" value="MORAUD" class="w-full bg-saone-green text-saone-cream rounded-[10px] h-[35px] px-3 text-[12px]"/>
                </div>

                <div>
                    <label class="font-caveat text-[15px] text-saone-green">Prénom</label>
                    <input name="prenom" value="Sophie" class="w-full bg-saone-green text-saone-cream rounded-[10px] h-[35px] px-3 text-[12px]"/>
                </div>

                <div>
                    <label class="font-caveat text-[15px] text-saone-green">Adresse</label>
                    <input name="adresse" value="12 quai Saint-Laurent" class="w-full bg-saone-green text-saone-cream rounded-[10px] h-[35px] px-3 text-[12px]"/>
                </div>

                <div>
                    <label class="font-caveat text-[15px] text-saone-green">Ville</label>
                    <input name="ville" value="Chalon-sur-Saône" class="w-full bg-saone-green text-saone-cream rounded-[10px] h-[35px] px-3 text-[12px]"/>
                </div>

                <div>
                    <label class="font-caveat text-[15px] text-saone-green">Téléphone</label>
                    <input name="telephone" value="06 57 23 44 65" class="w-full bg-saone-green text-saone-cream rounded-[10px] h-[35px] px-3 text-[12px]"/>
                </div>

                <div>
                    <label class="font-caveat text-[15px] text-saone-green">E-mail</label>
                    <input name="email" value="sophie.moraud@gmail.com" class="w-full bg-saone-green text-saone-cream rounded-[10px] h-[35px] px-3 text-[12px]"/>
                </div>

                <div class="flex flex-col items-center gap-2 mt-[35px]">
                    <button type="submit" class="bg-saone-terracotta text-saone-cream rounded-full px-6 py-2 text-[11px] shadow-custom">Enregistrer les modifications</button>
                    <button type="button" class="bg-saone-terracotta text-saone-cream rounded-full px-8 py-2 text-[11px] shadow-custom">Supprimer le compte</button>
                </div>
            </form>
        </div>
    </body>
  );
}