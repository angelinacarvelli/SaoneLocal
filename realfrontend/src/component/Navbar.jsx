export default function Navbar() {
  return (
    <nav className="fixed bottom-4 left-4 right-4 z-50 flex items-center justify-around p-4 bg-[#A53F32] rounded-full shadow-lg">
      <a href="#" className="text-[#2B5148] transition hover:scale-110">
        <i className="text-xl fa-solid fa-seedling"></i>
      </a>
      <a href="#" className="text-[#2B5148] transition hover:scale-110">
        <i className="text-xl fa-solid fa-book"></i>
      </a>
      <a href="#" className="text-[#2B5148] transition hover:scale-110">
        <i className="text-xl fa-solid fa-magnifying-glass"></i>
      </a>
      <a href="#" className="text-[#2B5148] transition hover:scale-110">
        <i className="text-xl fa-solid fa-calendar-days"></i>
      </a>
      <a href="#" className="text-[#2B5148] transition hover:scale-110">
        <i className="text-xl fa-solid fa-bag-shopping"></i>
      </a>
      <a href="#" className="text-[#2B5148] transition hover:scale-110">
        <i className="text-xl fa-solid fa-user"></i>
      </a>
    </nav>
  );
}