import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Home.css";
import "../styles/PrivacyPage.css";

export default function PrivacyPage() {
  return (
    <div className="privacy-page">
      <Header />
      
      <div className="privacy-container">
        {/* Bouton retour */}
        <div className="privacy-back-button">
          <Link to="/">
            <button className="privacy-btn-ghost">
              <ArrowLeft className="privacy-btn-icon" />
              Retour à l'accueil
            </button>
          </Link>
        </div>

        {/* En-tête */}
        <div className="privacy-header">
          <h1 className="privacy-title">Politique de Confidentialité</h1>
          <p className="privacy-date">Dernière mise à jour : Janvier 2025</p>
        </div>

        {/* Contenu de la politique */}
        <div className="privacy-content">
          {/* Section 1 */}
          <div className="privacy-card">
            <div className="privacy-card-header">
              <h2 className="privacy-card-title">1. Collecte des Données</h2>
            </div>
            <div className="privacy-card-content">
              <div className="privacy-prose">
                <p className="mb-4">Nous collectons les informations suivantes:</p>
                <ul className="privacy-list">
                  <li className="privacy-list-item">Informations d'inscription (nom, email, téléphone)</li>
                  <li className="privacy-list-item">Informations de profil (photo, biographie, préférences)</li>
                  <li className="privacy-list-item">Données de trajet (itinéraires, horaires, participants)</li>
                  <li className="privacy-list-item">Données de paiement (traitées de manière sécurisée)</li>
                  <li className="privacy-list-item">Données d'utilisation et de navigation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="privacy-card">
            <div className="privacy-card-header">
              <h2 className="privacy-card-title">2. Utilisation des Données</h2>
            </div>
            <div className="privacy-card-content">
              <div className="privacy-prose">
                <p className="mb-4">Vos données sont utilisées pour:</p>
                <ul className="privacy-list">
                  <li className="privacy-list-item">Faciliter la mise en relation entre conducteurs et passagers</li>
                  <li className="privacy-list-item">Traiter les paiements et transactions</li>
                  <li className="privacy-list-item">Améliorer nos services et votre expérience</li>
                  <li className="privacy-list-item">Vous envoyer des notifications importantes</li>
                  <li className="privacy-list-item">Assurer la sécurité de la plateforme</li>
                  <li className="privacy-list-item">Respecter nos obligations légales</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="privacy-card">
            <div className="privacy-card-header">
              <h2 className="privacy-card-title">3. Partage des Données</h2>
            </div>
            <div className="privacy-card-content">
              <div className="privacy-prose">
                <p className="mb-4">
                  Nous ne vendons jamais vos données personnelles. Vos informations peuvent être partagées avec:
                </p>
                <ul className="privacy-list">
                  <li className="privacy-list-item">Autres utilisateurs (informations de profil public uniquement)</li>
                  <li className="privacy-list-item">Prestataires de services (paiement, hébergement, analytics)</li>
                  <li className="privacy-list-item">Autorités légales (en cas de demande légale)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="privacy-card">
            <div className="privacy-card-header">
              <h2 className="privacy-card-title">4. Sécurité des Données</h2>
            </div>
            <div className="privacy-card-content">
              <div className="privacy-prose">
                <p>
                  Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données
                  contre l'accès non autorisé, la perte ou la destruction. Cela inclut le chiffrement des données
                  sensibles, l'accès restreint et des audits réguliers de sécurité.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="privacy-card">
            <div className="privacy-card-header">
              <h2 className="privacy-card-title">5. Vos Droits</h2>
            </div>
            <div className="privacy-card-content">
              <div className="privacy-prose">
                <p className="mb-4">Conformément au RGPD, vous avez le droit de:</p>
                <ul className="privacy-list">
                  <li className="privacy-list-item">Accéder à vos données personnelles</li>
                  <li className="privacy-list-item">Rectifier vos données inexactes</li>
                  <li className="privacy-list-item">Supprimer vos données (droit à l'oubli)</li>
                  <li className="privacy-list-item">Vous opposer au traitement de vos données</li>
                  <li className="privacy-list-item">Demander la portabilité de vos données</li>
                  <li className="privacy-list-item">Retirer votre consentement à tout moment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="privacy-card">
            <div className="privacy-card-header">
              <h2 className="privacy-card-title">6. Cookies</h2>
            </div>
            <div className="privacy-card-content">
              <div className="privacy-prose">
                <p>
                  Nous utilisons des cookies pour améliorer votre expérience, analyser l'utilisation du site et
                  personnaliser le contenu. Vous pouvez gérer vos préférences de cookies dans les paramètres de votre
                  navigateur.
                </p>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="privacy-card">
            <div className="privacy-card-header">
              <h2 className="privacy-card-title">7. Conservation des Données</h2>
            </div>
            <div className="privacy-card-content">
              <div className="privacy-prose">
                <p>
                  Nous conservons vos données personnelles aussi longtemps que nécessaire pour fournir nos services et
                  respecter nos obligations légales. Les comptes inactifs depuis plus de 3 ans peuvent être supprimés.
                </p>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div className="privacy-card">
            <div className="privacy-card-header">
              <h2 className="privacy-card-title">8. Transferts Internationaux</h2>
            </div>
            <div className="privacy-card-content">
              <div className="privacy-prose">
                <p>
                  Vos données peuvent être transférées et stockées sur des serveurs situés en dehors de votre pays. Nous
                  nous assurons que ces transferts respectent les réglementations en vigueur sur la protection des
                  données.
                </p>
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <div className="privacy-card">
            <div className="privacy-card-header">
              <h2 className="privacy-card-title">9. Modifications de la Politique</h2>
            </div>
            <div className="privacy-card-content">
              <div className="privacy-prose">
                <p>
                  Nous pouvons modifier cette politique de confidentialité. Les changements importants vous seront
                  notifiés par email ou via une notification sur la plateforme. Nous vous encourageons à consulter
                  régulièrement cette page.
                </p>
              </div>
            </div>
          </div>

          {/* Section 10 */}
          <div className="privacy-card">
            <div className="privacy-card-header">
              <h2 className="privacy-card-title">10. Contact</h2>
            </div>
            <div className="privacy-card-content">
              <div className="privacy-prose">
                <p>
                  Pour toute question concernant cette politique ou pour exercer vos droits, contactez notre Délégué à la
                  Protection des Données à privacy@covact.com ou via notre formulaire de contact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}