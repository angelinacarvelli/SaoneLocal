import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import Card from '../../component/Card';

export default function Home() {
  return (
    <div className="bg-[#F5F3E7] min-h-screen flex flex-col items-center">
      {/* Conteneur type téléphone */}
      <div className="w-full max-w-md bg-[#F5F3E7] min-h-screen relative shadow-2xl">
        <Header />
        
        <main className="p-4">
          <Card 
            title="PLUS SUR NOUS" 
            description="Notre association est une association de proximité, nous créons du lien avec nos clients. Ce sont pas de simples produits mais la Bourgogne entière que vous mettez en bouche. SaôneLocal c'est une expérience pour vos papilles." 
            btnText="Nous connaître"
            link="/more-on-us"
          />
          <Card 
            title="NOS PRODUCTEURS LOCAUX" 
            description="Nos produits sont si savoureux parce qu'ils sont faits avec l'amour de nos producteurs. Nos producteurs s'impliquent dans leur travail et ont un véritable savoir-faire dans leur domaine." 
            btnText="Voir l'équipe" 
            link="/producer-list"
          />
          <Card 
            title="SE LAISSER TENTER" 
            description="Il faut mettre en bouche ces délices pour ressentir la Bourgogne et tout ce savoir-faire." 
            btnText="Goûter" 
            link="/home-catalog"
          />
        </main>
        
        <Footer />
        <Navbar />
      </div>
    </div>
  );
}