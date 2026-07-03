export default function Navbar() {
  return (
      <nav className="w-[375px] mx-auto fixed bottom-4 left-3 right-3 flex items-center justify-around bg-saone-terracotta rounded-2xl shadow-lg">
        <a href="/more-on-us" className="transition hover:scale-110 w-[50px]">
          <img src="/assets/icon/picto-a-propos.png" alt="home"/>
        </a>
        <a href="/home-catalog" className="transition hover:scale-110 w-[50px]">
          <img src="/assets/icon/picto-catalogue.png" alt="home"/>
        </a>
        <a href="/search1" className="transition hover:scale-110 w-[50px]">
          <img src="/assets/icon/picto-recherche.png" alt="home"/>
        </a>
        <a href="/event" className="transition hover:scale-110 w-[50px]">
          <img src="/assets/icon/picto-calendrier.png" alt="home"/>
        </a>
        <a href="/cart" className="transition hover:scale-110 w-[50px]">
          <img src="/assets/icon/picto-panier.png" alt="home"/>
        </a>
        <a href="/account-home" className="transition hover:scale-110 w-[50px]">
          <img src="/assets/icon/picto-compte.png" alt="home"/>
        </a>
      </nav>
  );
}