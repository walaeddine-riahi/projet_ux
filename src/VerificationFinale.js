import { Link } from "react-router-dom";
import { useState } from "react";
import "./VerificationFinale.css";

function VerificationFinale() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="verification-finale-page">
      {/* Header */}
      <header className="vf-header">
        <div className="vf-header-content">
          <div className="vf-header-left">
            <Link to="/">
              <img
                src="/assets/logo-covact.png"
                alt="CovAct Logo"
                className="vf-logo"
              />
            </Link>
          </div>
          <div className="vf-header-center">
            <nav className="vf-nav-menu">
              <Link to="/home" className="vf-nav-link">
                Accueil
              </Link>
              <Link to="/trajets-quotidiens" className="vf-nav-link">
                Trajets
              </Link>
              <Link to="/notifications" className="vf-nav-link">
                Notifications
              </Link>
              <Link to="/wallet" className="vf-nav-link">
                Portefeuille
              </Link>
            </nav>
          </div>
          <div className="vf-header-right">
            <Link
              to="/publish-ride"
              className="btn-publish"
              style={{ textDecoration: "none", marginRight: "20px" }}
            >
              Publier un Trajet
            </Link>
            <Link to="/notifications" className="vf-notification-icon">
              <img src="/assets/notification.png" alt="Notifications" />
            </Link>
            <div className="vf-user-profile">
              <img
                src="/assets/profile.png"
                alt="Asma Chaouch"
                className="vf-profile-img"
              />
              <span className="vf-user-name">Asma Chaouch</span>
            </div>
            <div className="vf-espace-conducteur">Espace conducteur</div>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="vf-progress-container">
        <div className="vf-steps">
          <div className="vf-step completed">
            <div className="vf-step-number">1</div>
          </div>
          <div className="vf-step-line completed"></div>
          <div className="vf-step completed">
            <div className="vf-step-number">2</div>
          </div>
          <div className="vf-step-line completed"></div>
          <div className="vf-step completed">
            <div className="vf-step-number">3</div>
          </div>
          <div className="vf-step-line inactive"></div>
          <div className="vf-step active">
            <div className="vf-step-number">4</div>
            <div className="vf-step-label-below-single">
              vérification finale
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="vf-main-content">
        <div className="vf-content-wrapper">
          {/* Informations Personnels Card */}
          <div className="vf-info-card">
            <div className="vf-card-header">
              <img
                src="/assets/profile.png"
                alt="Profile"
                className="vf-card-avatar"
              />
              <div className="vf-card-title-section">
                <h2 className="vf-card-title">Informations Personnels</h2>
                <p className="vf-card-subtitle">Aujourd'hui 15:30</p>
              </div>
            </div>

            <div className="vf-card-content">
              <div className="vf-info-item">
                <span className="vf-info-icon location">📍</span>
                <span className="vf-info-text">Esprit, Tunis</span>
              </div>
              <div className="vf-info-item">
                <span className="vf-info-icon card">💳</span>
                <span className="vf-info-text">51244*******</span>
              </div>
              <div className="vf-info-item">
                <span className="vf-info-icon location">📍</span>
                <span className="vf-info-text">Mourouj, Tunis</span>
              </div>
              <div className="vf-info-item">
                <span className="vf-info-icon email">✉️</span>
                <span className="vf-info-text">mariem@gmail.com</span>
              </div>
            </div>

            <div className="vf-card-footer">
              <button className="vf-details-link">Voir les Détails</button>
            </div>
          </div>

          {/* Information véhicule Card */}
          <div className="vf-vehicle-card">
            <div className="vf-card-header">
              <div className="vf-vehicle-icon-wrapper">
                <img
                  src="/assets/icon/car-icon.png"
                  alt="Véhicule"
                  className="vf-vehicle-icon"
                />
              </div>
              <div className="vf-card-title-section">
                <h2 className="vf-card-title">Information véhicule</h2>
                <p className="vf-card-subtitle">Aujourd'hui 15:30</p>
              </div>
            </div>

            <div className="vf-documents-grid">
              <div className="vf-document-item">
                <span className="vf-download-icon">⬇</span>
                <span className="vf-document-text">Carte grise</span>
              </div>
              <div className="vf-document-item">
                <span className="vf-download-icon">⬇</span>
                <span className="vf-document-text">
                  Plaque d'immatriculation
                </span>
              </div>
              <div className="vf-document-item">
                <span className="vf-download-icon">⬇</span>
                <span className="vf-document-text">Assuarance</span>
              </div>
            </div>

            <div className="vf-card-footer">
              <button className="vf-details-link">Voir les Détails</button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="vf-action-buttons">
            <Link to="/profile-conducteur" className="vf-btn-retour">
              Retour
            </Link>
            <Link to="/" className="vf-btn-confirmer">
              Confirmer
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="vf-footer">
        <div className="vf-footer-container">
          <div className="vf-footer-column">
            <h3 className="vf-footer-brand">Cov'Act</h3>
            <p className="vf-footer-description">
              Votre plateforme de covoiturage de
              <br />
              confiance. Partagez vos trajets, économisez
              <br />
              et contribuez à un avenir durable.
            </p>
            <div className="vf-footer-social">
              <a href="#facebook" className="vf-social-link">
                <img src="/assets/icon/image 13.png" alt="Facebook" />
              </a>
              <a href="#instagram" className="vf-social-link">
                <img src="/assets/icon/image 14.png" alt="Instagram" />
              </a>
              <a href="#linkedin" className="vf-social-link">
                <img src="/assets/icon/image 15.png" alt="LinkedIn" />
              </a>
              <a href="#youtube" className="vf-social-link">
                <img src="/assets/icon/image 16.png" alt="YouTube" />
              </a>
            </div>
          </div>

          <div className="vf-footer-column">
            <h4 className="vf-footer-title">Lien Rapides</h4>
            <ul className="vf-footer-links">
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/publish-ride">Publier un Trajet</Link>
              </li>
              <li>
                <Link to="/inscription-etudiant">Espace Conducteur</Link>
              </li>
              <li>
                <Link to="/wallet">Mon Portefeuille</Link>
              </li>
            </ul>
          </div>

          <div className="vf-footer-column">
            <h4 className="vf-footer-title">Support</h4>
            <ul className="vf-footer-links">
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/support">Centre d'Aide</Link>
              </li>
              <li>
                <Link to="/about">À Propos</Link>
              </li>
              <li>
                <Link to="/terms">Conditions d'Utilisation</Link>
              </li>
              <li>
                <Link to="/privacy">Politique de Confidentialité</Link>
              </li>
            </ul>
          </div>

          <div className="vf-footer-column">
            <h4 className="vf-footer-title">Contact</h4>
            <ul className="vf-footer-links">
              <li>
                <a href="mailto:contact@covact.com">contact@covact.com</a>
              </li>
              <li>
                <a href="tel:+21620111333">+216 20 111 333</a>
              </li>
              <li>
                <a href="#address">20 el ghazela esprit</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Popup Modal */}
      {showPopup && (
        <div className="vf-popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="vf-popup-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="vf-popup-close"
              onClick={() => setShowPopup(false)}
            >
              ×
            </button>
            <div className="vf-popup-content">
              <div className="vf-popup-header">
                <img
                  src="/assets/icon/Message circle.png"
                  alt="Message"
                  className="vf-popup-icon"
                />
                <h2 className="vf-popup-title">Demande Envoyée</h2>
              </div>
              <div className="vf-popup-message">
                <p>Merci, votre demande a été envoyée.</p>
                <p>
                  Votre profil et votre véhicule seront vérifiés par l'admin.
                </p>
                <p>
                  Vous recevrez un e-mail et en notif lorsque votre compte sera
                  validé.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VerificationFinale;
