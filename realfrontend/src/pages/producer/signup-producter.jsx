import React from 'react';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';

export default function SignupProducerPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Récupération des données
    const formData = {
      firstname: e.target.firstname.value,
      siret: e.target.siret.value,
      phone: e.target.phonenumber.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const response = await fetch('/signup-producer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Profil producteur créé avec succès !");
      } else {
        alert("Erreur lors de la création du profil.");
      }
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  return (
    <div className="min-h-screen bg-saone-cream flex flex-col items-center p-4">
      <Header title="Inscription Pro" />

      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-sm mt-10">
        <h1 className="text-2xl font-bold text-saone-terracotta mb-6 text-center">Inscription Producteur</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="firstname" placeholder="Prénom" className="w-full p-3 border rounded-xl" required />
          <input type="text" name="siret" placeholder="Numéro de SIRET" className="w-full p-3 border rounded-xl" required />
          <input type="text" name="phonenumber" placeholder="Numéro de téléphone" className="w-full p-3 border rounded-xl" />
          <input type="email" name="email" placeholder="Email professionnel" className="w-full p-3 border rounded-xl" required />
          <input type="password" name="password" placeholder="Mot de passe" className="w-full p-3 border rounded-xl" required />
          
          <button type="submit" className="w-full bg-saone-terracotta text-white py-3 rounded-xl font-bold hover:bg-[#8e362b]">
            Créer mon profil pro
          </button>
        </form>

        <p className="mt-4 mb-4 text-center text-sm">
          Déjà un compte ? <a href="/login-producter" className="text-saone-green font-bold">Connecte-toi ici</a>
        </p>
      </div>

      <Navbar />
    </div>
  );
}