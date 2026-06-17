import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App({ children }) {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center">
      <div className="w-full max-w-[400px] bg-[#F9F6EF] flex flex-col min-h-screen shadow-2xl">
        <Header />
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
        <Navbar />
        <Footer />
      </div>
    </div>
  );
}