import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import { AuthAPI } from '../../api/auth.api';
import { Link } from 'react-router-dom';

export default function SignupClientPage() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      phone: e.target.phonenumber.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      await AuthAPI.register(formData);
      alert("Inscription réussie !");
      navigate('/profile_client');
    } catch (error) {
      alert(error.message || "Erreur lors de l'inscription.");
    }
  };

  return (
    <div className="min-h-screen bg-saone-cream flex flex-col items-center p-4">
      <Header title="Inscription" />

      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-sm mt-10">
        <h1 className="text-2xl font-bold text-saone-terracotta mb-6 text-center">Signup</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="firstname" placeholder="Prénom" className="w-full p-3 border rounded-xl" required />
          <input type="text" name="lastname" placeholder="Nom" className="w-full p-3 border rounded-xl" required />
          <input type="text" name="phonenumber" placeholder="Numéro de téléphone" className="w-full p-3 border rounded-xl" />
          <input type="email" name="email" placeholder="Email" className="w-full p-3 border rounded-xl" required />
          <input type="password" name="password" placeholder="Mot de passe" className="w-full p-3 border rounded-xl" required />

          <button type="submit" className="w-full bg-saone-green text-white py-3 rounded-xl font-bold hover:bg-green-700">
            S'inscrire
          </button>
        </form>

        <p className="mt-4 mb-4 text-center text-sm">
          Déjà un compte ? <a href="/login-client" className="text-saone-terracotta font-bold">Connecte-toi</a>
        </p>
      </div>

      <Navbar />
    </div>
  );
}
