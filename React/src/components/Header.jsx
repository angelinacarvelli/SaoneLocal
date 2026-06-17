import logo from '../assets/image/logo-principal.png';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-2 px-1">
      <a href="/"><img src={logo} className="h-16 w-auto" alt="Logo" /></a>
      <a href="/" className="text-[#2B5148]"><i className="fa-solid fa-house text-xl"></i></a>
    </header>
  );
}