import Card from './components/Card';
import pain from './assets/image/boulangerie-pain-levain.jpg';
import pdt from './assets/image/legumes-patates.jpg';
import vin from './assets/image/vins-mercurey-blanc.jpg';

export default function Home() {
  return (
    <>
      <Card title="Plus sur nous" description="Notre association est une association de proximité..." btnText="Nous connaître" />
      <Card title="Nos producteurs locaux" description="Nos produits sont si savoureux..." btnText="Voir l'équipe" />
      <Card title="Se laisser tenter" description="Il faut mettre en bouche ces délices..." btnText="Goûter" images={[pain, pdt, vin]} />
    </>
  );
}