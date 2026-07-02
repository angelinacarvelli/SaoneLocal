import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function ProductDetail() {
  return (
    <div className="bg-saone-cream min-h-screen flex flex-col items-center">
      <main className="w-full max-w-md min-h-screen relative shadow-2xl flex flex-col gap-4">
        
        {/* En-tête avec bouton retour et maison */}
        <div className="flex justify-between items-center py-2">
          <button className="text-2xl">←</button>
          <a href="/" className="w-[40px]">
            <img src="../../assets/icon/picto-acceuil.png" alt="home"/>
          </a>
        </div>

        {/* Image et Actions */}
        <div className="flex gap-4">
        <img src="../../../assets/products/Boulangerie/boulangerie-pain-cereales.jpg" alt="Pain aux céréales" className="w-1/3 rounded-xl object-cover" />
          <div className="flex flex-col justify-between">
            <div className="text-2xl text-yellow-600">★★★★☆</div>
            <h2 className="font-bold text-xl">Pain aux céréales</h2>
            <div className="flex items-center gap-2">
              <span>Qté :</span>
              <button className="bg-gray-200 px-2 rounded">-</button>
              <span>1</span>
              <button className="bg-gray-200 px-2 rounded">+</button>
            </div>
            <div className="flex gap-2">
              <button className="bg-[#a04a37] text-white px-3 py-1 rounded-full text-xs">Mettre en favoris</button>
              <button className="bg-[#a04a37] text-white px-3 py-1 rounded-full text-xs">Ajouter au panier</button>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700 leading-relaxed">
          Une miche généreuse aux céréales multiples (seigle, épeautre, tournesol, lin), pétrie à la main sur levain naturel.
        </p>

        {/* Prix et Stock */}
        <div className="font-bold text-lg">3,20€ (500g)</div>
        <p className="text-sm text-green-800">En stock - disponible en click and collect</p>

        {/* Caractéristiques */}
        <div className="text-sm">
          <h3 className="font-bold mb-1">Caractéristiques</h3>
          <p><strong>Céréales :</strong> seigle, épeautre, avoine</p>
          <p><strong>Graines :</strong> tournesol, lin, sésame</p>
          <p><strong>Fermentation :</strong> levain naturel, 12-16 h</p>
          <p><strong>Cuisson :</strong> four à sole 240°</p>
          <p><strong>Conservation :</strong> 3 à 5 jours en torchon</p>
        </div>

        {/* Valeurs nutritionnelles */}
        <div className="grid grid-cols-4 gap-2 text-center">
          {[
            { label: 'Énergie', val: '1050 kcal' },
            { label: 'Glucides', val: '185g' },
            { label: 'Protéines', val: '42g' },
            { label: 'Lipides', val: '14g' }
          ].map((item, i) => (
            <div key={i} className="bg-[#2d5a45] text-white p-2 rounded-lg text-[10px]">
              <div className="font-bold">{item.label}</div>
              <div>{item.val}</div>
            </div>
          ))}
        </div>

        {/* Avis Clients */}
        <div className="border-t pt-4">
          <h3 className="font-bold">Avis clients</h3>
          {/* Note globale et barres de progression */}
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">4,7</div>
              <div className="text-yellow-600">★★★★☆</div>
              <div className="text-xs text-gray-500">24 avis</div>
            </div>
            <div className="flex-1 text-xs space-y-1">
              {[70, 20, 8, 2, 0].map((percent, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span>{5 - i}</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded">
                    <div className="h-full bg-[#2d5a45] rounded" style={{ width: `${percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}