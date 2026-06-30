import { Link } from 'react-router-dom';

export default function Header({title}) {
  return (
    <header class="flex items-center justify-around mt-[30px] mb-[15px]">
      <a href="/" class="text-saone-green text-[30px]">
        <h2>←</h2>
      </a>
      <h1 class="text-saone-terracotta font-caveat text-[25px] uppercase">{title}</h1>
      <a href="/" class="w-[40px]">
        <img src="../../assets/icon/picto-acceuil.png" alt="home"/>
      </a>
    </header>
  );
}