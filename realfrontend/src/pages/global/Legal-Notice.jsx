import { Link } from 'react-router-dom';
import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

export default function Legal_Notice() {
    return (
        <div class="bg-saone-cream min-h-screen flex flex-col items-center">
            <main className="w-full max-w-md min-h-screen relative shadow-2xl bg-saone-cream">
                <Header title="mentions légales"/>
                <div className="flex flex-col items-center">
                    <img src="../../../assets/Logo-principal.png" alt="Logo" className="w-[200px] h-[200px] object-cover"/>
                </div>
                <div class="mr-[20px] ml-[20px]">
                    <div className="text-[13px] text-saone-green font-montserrat mb-[20px]">
                        <h2 className="font-caveat text-[18px] text-saone-green uppercase">1. éditeur de l'application</h2>
                        <p>L'application SaôneLocal est éditée par l'association SaôneLocal, association loi 1901.<br/>
                        Présidente : Françoise<br/>
                        Siège social : 54 rue d'Autun - 71100 Chalon-sur-Saône<br/>
                        Email : contact@saonelocal.fr<br/>
                        SIRET : 894 237 651 00014</p>
                    </div>

                    <div className="text-[13px] text-saone-green font-montserrat mb-[20px]">
                        <h2 className="font-caveat text-[18px] text-saone-green uppercase">2. hébergement</h2>
                        <p>L'application est hébergée par : <br/>
                            Amazon Web Services (AWS),<br/>
                            Amazon Web Services, Inc. P.O. Box 81226, Seattle, WA 98108-1226, USA <br/>
                            https://aws.amazon.com</p>
                    </div>

                    <div className="text-[13px] text-saone-green font-montserrat mb-[20px]">
                        <h2 className="font-caveat text-[18px] text-saone-green uppercase">3. propriété intellectuelle</h2>
                        <p>L'ensemble des contenus présent sur l'application SaôneLocal (texte,images, logos, visuels) est la propriété exclusive de l'association
                            SaôneLocal ou de ses contributeurs, et est protégé par les lois françaises et internationals relatives à la propriété intellectuelle.
                            Toute reproduction, même partielle, est interdite sans autorisation préalable</p>
                    </div>

                    <div className="text-[13px] text-saone-green font-montserrat mb-[20px]">
                        <h2 className="font-caveat text-[18px] text-saone-green uppercase">4. données personnelles</h2>
                        <p>Les données personnelles collectées via l'application (nom, adresse email, adresse de livraison) sont 
                            utilisées exclusivement dans le cadre du fonctionnement de SaôneLocal. Elles ne sont ni vendues, ni transmisent à des tiers.
                            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposer d'un droit d'accès, de rectification et de suppression 
                            de vos données en contactant : [contact@saonelocal.fr]</p>
                    </div>

                    <div className="text-[13px] text-saone-green font-montserrat mb-[20px]">
                        <h2 className="font-caveat text-[18px] text-saone-green uppercase">5. responsabilité</h2>
                        <p>SaôneLocal s'efforce de maintenir les informations de l'application à jour et exactes. L'association ne saurait être tenue responsable
                            des erreurs ou omissions dans les contenus publiés par les producteurs, ni des éventuelles intéruptions de service liées à des causes extérieures.</p>
                    </div>

                    <div className="text-[13px] text-saone-green font-montserrat mb-[20px]">
                        <h2 className="font-caveat text-[18px] text-saone-green uppercase">6. droit applicable</h2>
                        <p>Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux compétant sont ceux du ressort du siège
                            social de l'association SaôneLocal.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}