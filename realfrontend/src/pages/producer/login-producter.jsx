import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';


export default function ProducerLoginPage() {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        // Redirection uniquement si la connexion est réussie
        navigate('/profile_producer'); 
      } else {
        alert("Email ou mot de passe incorrect.");
      }
    } catch (error) {
      console.error("Erreur de connexion au serveur:", error);
      alert("Une erreur est survenue, veuillez réessayer plus tard.");
    }
  };

  return (
    <div className="min-h-screen bg-saone-cream flex flex-col items-center p-4">
      <Header title="Espace Pro" />

      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-sm mt-10">
        <h2 className="text-saone-terracotta font-caveat text-2xl mb-2 text-center">Espace Producteur</h2>
        <p className="text-gray-500 text-sm mb-6 text-center font-montserrat">
          Gère tes infos et tes fiches produits
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="text-left">
            <label className="block text-gray-700 font-medium mb-1 font-montserrat text-sm">
              Adresse Email Professionnelle
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="boulanger@test.fr"
              className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-saone-terracotta outline-none"
            />
          </div>
          
          <div className="text-left">
            <label className="block text-gray-700 font-medium mb-1 font-montserrat text-sm">
              Mot de passe
            </label>
            <input
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-saone-terracotta outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-saone-terracotta text-white py-3 rounded-xl font-bold font-montserrat hover:bg-[#8e362b] transition-colors mt-4"
          >
            Se connecter à ma vitrine
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6 font-montserrat">
          Nouveau producteur ?{' '}
          <a href="/signup-producer" className="text-saone-green font-bold hover:underline">
            Crée ton profil
          </a>
        </p>
      </div>

      <Navbar />
    </div>
  );
}