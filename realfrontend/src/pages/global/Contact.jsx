import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Contact() {
  return (
    <div className="bg-saone-cream min-h-screen flex flex-col items-center">
      <main class="w-full max-w-md min-h-screen relative shadow-2xl bg-saone-cream ">
        <Header title="nous contacter"/>
        <div class="flex flex-col items-center gap-3 ">
          <img src="../../../public/assets/Logo-principal.png" alt="Logo" class="w-[200px] h-[200px] object-cover"/>
          <div class="text-[16px] text-saone-cream font-montserrat bg-saone-green flex flex-col items-center gap-3 rounded-2xl px-[40px] py-[20px]">
              <img src="../../../public/assets/icon/contact-appel.png" alt="Logo" class="w-[80px] h-[80px] object-cover"/>
              <h2>03 85 66 32 11</h2>
              <img src="../../../public/assets/icon/contact-mail.png" alt="Logo" class="w-[80px] h-[80px] object-cover"/>
              <h2>contact@saonelocal.fr</h2>
          </div>
          <p class="font-caveat text-saone-green text-center text-[22px] mt-[20px]">Une question ? Un souci ? <br/>Contactez-nous !</p>
        </div>
        <Navbar />
        <Footer />
      </main>
    </div>
  );
}