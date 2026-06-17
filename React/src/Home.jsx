import Card from './components/Card';
import pain from './assets/image/boulangerie-pain-levain.jpg';
import pdt from './assets/image/legumes-patates.jpg';
import vin from './assets/image/vins-mercurey-blanc.jpg';

export default function Home() {
  return (
    <div className="pb-4">
      <Card title="Plus sur nous" description="Notre association de proximité crée du lien." btnText="Nous connaître" />
      <Card title="Nos producteurs" description="Des produits savoureux et locaux." btnText="Voir l'équipe" />
      <Card title="Se laisser tenter" description="Ressentir la Bourgogne." btnText="Goûter" />
    </div>
  );
}