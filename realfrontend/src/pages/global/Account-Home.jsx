import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Account_Home() {
  return (
    <main class="w-[375px] mx-auto min-h-screen bg-saone-cream flex flex-col items-center text-center text-[#383C40]">
        <h1 class="font-caveat text-[24px] mt-[250px]">BIENVENUE</h1>
        <p class="font-montserrat text-[18px]">sur</p>
        <img src="../realfrontend/assets/Logo-principal.png" alt="Logo" class="w-[130px] h-[130px] object-cover mb-[130px] mt-[10px]"/>
        <p class="font-montserrat text-[18px] mb-[20px]">Je suis</p>
        <div class="flex flex-row gap-3 text-saone-cream font-montserrat text-[14px]">
            <button type="button" class="flex-1 bg-saone-terracotta rounded-full w-[90px] py-3 px-1">Client</button>
            <button type="button" class="flex-1 bg-saone-terracotta rounded-full w-[90px] py-3 px-2">Producteur</button>
        </div>
    </main>
  );
}