export default function Footer() {
  return (
    <footer className="bg-[#F5F3E7] p-6 text-center text-[#2B5148] text-xs pb-24">
      <p className="font-bold">Fabriqué en Bourgogne.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="/contact">Nous contacter</a>
        <a href="/mentions">Mentions légales</a>
      </div>
      <p className="mt-4 opacity-70">© {new Date().getFullYear()} SaôneLocal</p>
    </footer>
  );
}