import { Link } from 'react-router-dom';

export default function Header({title}) {
  return (
<<<<<<< HEAD
    <header className="flex items-center justify-between mt-[30px] mb-[15px]">
      <a href="/" className="text-saone-green text-[30px]">
=======
    <header class="flex items-center justify-between mt-[30px] mb-[15px] p-[10px]">
      <a href="/" class="text-saone-green text-[30px]">
>>>>>>> b45ae2221b2fd4a8ef1770a57070ebed44400b05
        <h2>←</h2>
      </a>
      <h1 className="text-saone-terracotta font-caveat text-[22px] uppercase">{title}</h1>
      <a href="/" className="w-[40px]">
        <img src="../../assets/icon/picto-acceuil.png" alt="home"/>
      </a>
    </header>
  );
}