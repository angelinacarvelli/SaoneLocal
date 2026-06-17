export default function Navbar() {
  return (
    <nav className="bg-[#A53F32] rounded-[20px] shadow-xl px-6 py-4 mt-auto">
      <div className="flex justify-between items-center text-[#F9F6EF] text-xl">
        <a href="#"><i className="fa-solid fa-seedling"></i></a>
        <a href="#"><i className="fa-solid fa-book-open"></i></a>
        <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
        <a href="#"><i className="fa-solid fa-calendar-days"></i></a>
        <a href="#"><i className="fa-solid fa-bag-shopping"></i></a>
        <a href="#"><i className="fa-solid fa-user"></i></a>
      </div>
    </nav>
  );
}