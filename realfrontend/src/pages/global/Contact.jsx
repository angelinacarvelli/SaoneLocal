import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Contact() {
  return (
    <main class="w-[375px] mx-auto min-h-screen bg-saone-cream flex flex-col items-center gap-3">
        <img src="../realfrontend/assets/Logo-principal.png" alt="Logo" class="w-[130px] h-[130px] object-cover mb-[40px] mt-[30px]"/>
        <div class="text-[16px] text-saone-cream font-montserrat bg-saone-green flex flex-col items-center gap-3 rounded-2xl px-[40px] py-[20px]">
            <img src="../realfrontend/assets/contact-appel.png" alt="Logo" class="w-[80px] h-[80px] object-cover"/>
            <h2>03 85 66 32 11</h2>
            <img src="../realfrontend/assets/contact-mail.png" alt="Logo" class="w-[80px] h-[80px] object-cover"/>
            <h2>contact@saonelocal.fr</h2>
        </div>
        <p class="font-caveat text-saone-green text-center text-[22px] mt-[20px]">Une question ? Un souci ? <br/>Contactez-nous !</p>
    </main>
  );
}