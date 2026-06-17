import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function App({ children }) {
  return (
    <div className="h-screen w-screen flex justify-center bg-gray-200"> 
      
      {/* telephone */}
      <div className="w-full max-w-md h-full flex flex-col bg-[#F9F6EF] shadow-2xl overflow-y-auto">
        <Header />
        
        <main className="flex-grow py-4 px-4">
          {children}
        </main>

        <Navbar />
        <Footer />
      </div>
      
    </div>
  );
}