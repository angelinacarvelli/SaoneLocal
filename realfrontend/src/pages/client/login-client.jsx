import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';

export default function LoginPage() {
  const navigate = useNavigate();

const handleLogin = async (e) => {
    e.preventDefault();
    
    // Récupération des valeurs des inputs
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        // Succès : redirige l'utilisateur vers sa fiche client
        navigate('/Profile-client');
      } else {
        alert("Identifiants incorrects");
      }
    } catch (error) {
      console.error("Erreur de connexion:", error);
    }
  };

  return (
    <div className="min-h-screen bg-saone-cream flex flex-col items-center p-4">
      <Header title="Connexion" />

      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-sm mt-10">
        <h2 className="text-saone-green font-caveat text-2xl mb-2 text-center">Connexion Client</h2>
        <p className="text-gray-500 text-sm mb-6 text-center font-montserrat">
          Accède à ton panier et à tes favoris
        </p>

        <form id="formClient" onSubmit={handleLogin} className="space-y-4">
          <div className="text-left">
            <label className="block text-gray-700 font-medium mb-1 font-montserrat text-sm">
              Adresse Email
            </label>
            <input
              type="email"
              required
              className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-saone-green outline-none"
            />
          </div>
          
          <div className="text-left">
            <label className="block text-gray-700 font-medium mb-1 font-montserrat text-sm">
              Mot de passe
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-saone-green outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-saone-green text-white py-3 rounded-xl font-bold font-montserrat hover:bg-[#1e3a33] transition-colors mt-4"
          >
            Se connecter
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6 mb-6 font-montserrat">
          Pas encore de compte ?{' '}
          <a href="/signup-client" className="text-saone-terracotta font-bold hover:underline">
            Inscris-toi ici
          </a>
        </p>
      </div>

      <Navbar />
    </div>
  );
}