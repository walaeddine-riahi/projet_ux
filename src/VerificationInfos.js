import { Link } from "react-router-dom";
import "./VerificationInfos.css";

function VerificationInfos() {
  return (
    <div className="verification-infos-page">
      {/* Header */}
      <header className="vi-header">
        <div className="vi-header-content">
          <div className="vi-header-left">
            <Link to="/">
              <img
                src="/assets/logo-covact.png"
                alt="CovAct Logo"
                className="vi-logo"
              />
            </Link>
          </div>
          <div className="vi-header-center">
            <nav className="vi-nav-menu">
              <Link to="/" className="vi-nav-link">
                Accueil
              </Link>
              <a href="#suivi" className="vi-nav-link">
                Suivi
              </a>
              <a href="#avis" className="vi-nav-link">
                Avis
              </a>
              <a href="#profile" className="vi-nav-link active">
                Profile
              </a>
            </nav>
          </div>
          <div className="vi-header-right">
            <Link
              to="/publish-ride"
              className="btn-publish"
              style={{ textDecoration: "none", marginRight: "20px" }}
            >
              Publier un Trajet
            </Link>
            <Link to="/notifications" className="vi-notification-icon">
              <img src="/assets/notification.png" alt="Notifications" />
            </Link>
            <div className="vi-user-profile">
              <img
                src="/assets/profile.png"
                alt="Asma Chaouch"
                className="vi-profile-img"
              />
              <span className="vi-user-name">Asma Chaouch</span>
            </div>
            <div className="vi-espace-conducteur">Espace conducteur</div>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="vi-progress-container">
        <div className="vi-steps">
          <div className="vi-step completed">
            <div className="vi-step-number">1</div>
          </div>
          <div className="vi-step-line completed"></div>
          <div className="vi-step completed">
            <div className="vi-step-number">2</div>
          </div>
          <div className="vi-step-line completed"></div>
          <div className="vi-step active">
            <div className="vi-step-number">3</div>
            <div className="vi-step-label">Vérification d'informations</div>
          </div>
          <div className="vi-step-line"></div>
          <div className="vi-step">
            <div className="vi-step-number">4</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="vi-main-content">
        <div className="vi-content-wrapper">
          {/* Informations Personnels */}
          <div className="vi-card">
            <div className="vi-card-header">
              <img
                src="/assets/profile.png"
                alt="Profile"
                className="vi-card-avatar"
              />
              <div className="vi-card-title-section">
                <h2 className="vi-card-title">Informations Personnels</h2>
                <p className="vi-card-subtitle">Aujourd'hui 15:30</p>
              </div>
            </div>

            <div className="vi-card-content">
              <div className="vi-info-row">
                <div className="vi-info-item">
                  <span className="vi-info-icon">📍</span>
                  <span className="vi-info-text">Esprit, Tunis</span>
                </div>
                <div className="vi-info-item">
                  <span className="vi-info-icon">💳</span>
                  <span className="vi-info-text">51244*******</span>
                </div>
              </div>
              <div className="vi-info-row">
                <div className="vi-info-item">
                  <span className="vi-info-icon">📍</span>
                  <span className="vi-info-text">Mourouj, Tunis</span>
                </div>
                <div className="vi-info-item">
                  <span className="vi-info-icon">✉️</span>
                  <span className="vi-info-text">mariem@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="vi-card-footer">
              <button className="vi-details-btn">Voir les Détails</button>
            </div>
          </div>

          {/* Information vehicule */}
          <div className="vi-card">
            <div className="vi-card-header">
              <div className="vi-card-icon-wrapper">
                <span className="vi-card-icon">🚗</span>
              </div>
              <div className="vi-card-title-section">
                <h2 className="vi-card-title">Information vehicule</h2>
                <p className="vi-card-subtitle">Aujourd'hui 15:30</p>
              </div>
            </div>

            <div className="vi-card-content">
              <div className="vi-info-row">
                <div className="vi-info-item">
                  <span className="vi-download-icon">📥</span>
                  <span className="vi-info-text">Carte grise</span>
                </div>
                <div className="vi-info-item">
                  <span className="vi-download-icon">📥</span>
                  <span className="vi-info-text">Plaque d'immatriculation</span>
                </div>
              </div>
              <div className="vi-info-row">
                <div className="vi-info-item">
                  <span className="vi-download-icon">📥</span>
                  <span className="vi-info-text">Assuarance</span>
                </div>
              </div>
            </div>

            <div className="vi-card-footer">
              <button className="vi-details-btn">Voir les Détails</button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="vi-action-buttons">
            <Link to="/trajets-quotidiens" className="vi-btn-retour">
              Retour
            </Link>
            <Link to="/profile-conducteur" className="vi-btn-confirmer">
              Confirmer
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="vi-footer">
        <div className="vi-footer-container">
          <div className="vi-footer-column">
            <h3 className="vi-footer-brand">Cov'Act</h3>
            <p className="vi-footer-description">
              Votre plateforme de covoiturage de
              <br />
              confiance. Partagez vos trajets, économisez
              <br />
              et contribuez à un avenir durable.
            </p>
            <div className="vi-footer-social">
              <a href="#facebook" className="vi-social-link">
                <img src="/assets/icon/image 13.png" alt="Facebook" />
              </a>
              <a href="#instagram" className="vi-social-link">
                <img src="/assets/icon/image 14.png" alt="Instagram" />
              </a>
              <a href="#linkedin" className="vi-social-link">
                <img src="/assets/icon/image 15.png" alt="LinkedIn" />
              </a>
              <a href="#youtube" className="vi-social-link">
                <img src="/assets/icon/image 16.png" alt="YouTube" />
              </a>
            </div>
          </div>

          <div className="vi-footer-column">
            <h4 className="vi-footer-title">Lien Rapides</h4>
            <ul className="vi-footer-links">
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/publish-ride">Publier un Trajet</Link>
              </li>
              <li>
                <Link to="/profile-conducteur">Espace Conducteur</Link>
              </li>
              <li>
                <Link to="/wallet">Mon Portefeuille</Link>
              </li>
            </ul>
          </div>

          <div className="vi-footer-column">
            <h4 className="vi-footer-title">Support</h4>
            <ul className="vi-footer-links">
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

          <div className="vi-footer-column">
            <h4 className="vi-footer-title">Contact</h4>
            <ul className="vi-footer-links">
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
    </div>
  );
}

export default VerificationInfos;
