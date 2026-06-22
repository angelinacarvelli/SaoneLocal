export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-4 bg-[#F5F3E7]">
      <img src="/logo-principal.png" alt="SaôneLocal" className="h-10" />
      <a href="/" className="text-[#2B5148] text-2xl">
        <i className="fa-solid fa-house"></i>
      </a>
    </header>
  );
}