export default function Footer() {
  return (
    <footer className="p-6 text-center text-saone-green text-xs pb-20 font-montserrat mt-[200px]">
      <p className="font-bold">Fabriqué en Bourgogne.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="/contact">Nous contacter</a>
        <a href="/legal-notice">Mentions légales</a>
      </div>
      <p className="mt-4 opacity-70">© {new Date().getFullYear()} SaôneLocal</p>
    </footer>
  );
}