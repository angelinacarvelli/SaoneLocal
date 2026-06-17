import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';

export default function App({ children }) {
  return (
    // max-w-md : Limite la largeur au format téléphone
    // bg-[#F9F6EF] : Fond crème
    <div className="min-h-screen flex flex-col bg-[#F9F6EF] p-4 max-w-md mx-auto shadow-2xl">
      <Header />
      
      <main className="flex-grow py-2">
        {children}
      </main>

      <Navbar />
      <Footer />
    </div>
  );
}