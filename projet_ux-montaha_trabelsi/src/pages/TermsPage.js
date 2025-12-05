import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Home.css";
import "../styles/TermsPage.css";

export default function TermsPage() {
  return (
    <div className="terms-page">
      <Header />
      
      <div className="terms-container">
        {/* Bouton retour */}
        <div className="terms-back-button">
          <Link to="/">
            <button className="terms-btn-ghost">
              <ArrowLeft className="terms-btn-icon" />
              Retour à l'accueil
            </button>
          </Link>
        </div>

        {/* En-tête */}
        <div className="terms-header">
          <h1 className="terms-title">Conditions Générales d'Utilisation</h1>
          <p className="terms-date">Dernière mise à jour : Janvier 2025</p>
        </div>

        {/* Contenu des conditions */}
        <div className="terms-content">
          {/* Section 1 */}
          <div className="terms-card">
            <div className="terms-card-header">
              <h2 className="terms-card-title">1. Acceptation des Conditions</h2>
            </div>
            <div className="terms-card-content">
              <div className="terms-prose">
                <p>
                  En accédant et en utilisant Cov'Act, vous acceptez d'être lié par ces Conditions Générales
                  d'Utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="terms-card">
            <div className="terms-card-header">
              <h2 className="terms-card-title">2. Description du Service</h2>
            </div>
            <div className="terms-card-content">
              <div className="terms-prose">
                <p>
                  Cov'Act est une plateforme de covoiturage qui met en relation des conducteurs proposant des places
                  disponibles dans leur véhicule avec des passagers recherchant un trajet. Nous agissons uniquement en
                  tant qu'intermédiaire et ne sommes pas responsables des trajets effectués.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="terms-card">
            <div className="terms-card-header">
              <h2 className="terms-card-title">3. Inscription et Compte Utilisateur</h2>
            </div>
            <div className="terms-card-content">
              <div className="terms-prose">
                <p className="mb-4">Pour utiliser Cov'Act, vous devez:</p>
                <ul className="terms-list">
                  <li className="terms-list-item">Être âgé d'au moins 18 ans</li>
                  <li className="terms-list-item">Fournir des informations exactes et à jour</li>
                  <li className="terms-list-item">Maintenir la confidentialité de votre mot de passe</li>
                  <li className="terms-list-item">Être responsable de toutes les activités sur votre compte</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="terms-card">
            <div className="terms-card-header">
              <h2 className="terms-card-title">4. Obligations des Conducteurs</h2>
            </div>
            <div className="terms-card-content">
              <div className="terms-prose">
                <p className="mb-4">Les conducteurs s'engagent à:</p>
                <ul className="terms-list">
                  <li className="terms-list-item">Posséder un permis de conduire valide</li>
                  <li className="terms-list-item">Avoir une assurance automobile en cours de validité</li>
                  <li className="terms-list-item">Maintenir leur véhicule en bon état</li>
                  <li className="terms-list-item">Respecter le Code de la route</li>
                  <li className="terms-list-item">Ne pas annuler un trajet sans raison valable</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="terms-card">
            <div className="terms-card-header">
              <h2 className="terms-card-title">5. Obligations des Passagers</h2>
            </div>
            <div className="terms-card-content">
              <div className="terms-prose">
                <p className="mb-4">Les passagers s'engagent à:</p>
                <ul className="terms-list">
                  <li className="terms-list-item">Être ponctuel au point de rendez-vous</li>
                  <li className="terms-list-item">Respecter les règles du conducteur</li>
                  <li className="terms-list-item">Payer la contribution financière convenue</li>
                  <li className="terms-list-item">Respecter le véhicule et les autres passagers</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="terms-card">
            <div className="terms-card-header">
              <h2 className="terms-card-title">6. Paiements et Remboursements</h2>
            </div>
            <div className="terms-card-content">
              <div className="terms-prose">
                <p>
                  Les paiements s'effectuent via notre plateforme sécurisée. Cov'Act prélève une commission de service
                  sur chaque transaction. Les remboursements sont possibles selon notre politique d'annulation, sous
                  réserve de conditions spécifiques.
                </p>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="terms-card">
            <div className="terms-card-header">
              <h2 className="terms-card-title">7. Sécurité et Comportement</h2>
            </div>
            <div className="terms-card-content">
              <div className="terms-prose">
                <p>
                  Tout comportement inapproprié, discriminatoire ou dangereux est strictement interdit. Nous nous
                  réservons le droit de suspendre ou supprimer tout compte enfreignant ces règles.
                </p>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div className="terms-card">
            <div className="terms-card-header">
              <h2 className="terms-card-title">8. Limitation de Responsabilité</h2>
            </div>
            <div className="terms-card-content">
              <div className="terms-prose">
                <p>
                  Cov'Act n'est pas responsable des dommages, pertes ou blessures survenant lors d'un trajet. La
                  responsabilité incombe aux utilisateurs participants au covoiturage.
                </p>
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <div className="terms-card">
            <div className="terms-card-header">
              <h2 className="terms-card-title">9. Modification des Conditions</h2>
            </div>
            <div className="terms-card-content">
              <div className="terms-prose">
                <p>
                  Nous nous réservons le droit de modifier ces conditions à tout moment. Les utilisateurs seront informés
                  des changements importants par email ou notification sur la plateforme.
                </p>
              </div>
            </div>
          </div>

          {/* Section 10 */}
          <div className="terms-card">
            <div className="terms-card-header">
              <h2 className="terms-card-title">10. Contact</h2>
            </div>
            <div className="terms-card-content">
              <div className="terms-prose">
                <p>
                  Pour toute question concernant ces conditions, veuillez nous contacter à legal@covact.com ou via
                  notre page de contact.
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