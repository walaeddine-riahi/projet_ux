import { Link } from "react-router-dom";
import "./ProfileConducteur.css";

function ProfileConducteur() {

  return (
    <div className="profile-conducteur-page">
      {/* Header */}
      <header className="pc-header">
        <div className="pc-header-content">
          <div className="pc-header-left">
            <Link to="/">
              <img
                src="/assets/logo-covact.png"
                alt="CovAct Logo"
                className="pc-logo"
              />
            </Link>
          </div>
          <div className="pc-header-center">
            <nav className="pc-nav-menu">
              <Link to="/" className="pc-nav-link">
                Accueil
              </Link>
              <a href="#suivi" className="pc-nav-link">
                Suivi
              </a>
              <a href="#avis" className="pc-nav-link">
                Avis
              </a>
              <a href="#profile" className="pc-nav-link active">
                Profile
              </a>
            </nav>
          </div>
          <div className="pc-header-right">
            <Link to="/notifications" className="pc-notification-icon">
              <img src="/assets/notification.png" alt="Notifications" />
            </Link>
            <div className="pc-user-profile">
              <img
                src="/assets/profile.png"
                alt="Asma Chaouch"
                className="pc-profile-img"
              />
              <span className="pc-user-name">Asma Chaouch</span>
            </div>
            <div className="pc-espace-conducteur">Espace conducteur</div>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="pc-progress-container">
        <div className="pc-steps">
          <div className="pc-step completed">
            <div className="pc-step-number">1</div>
          </div>
          <div className="pc-step-line completed"></div>
          <div className="pc-step completed">
            <div className="pc-step-number">2</div>
          </div>
          <div className="pc-step-line completed"></div>
          <div className="pc-step completed">
            <div className="pc-step-number">3</div>
          </div>
          <div className="pc-step-line inactive"></div>
          <div className="pc-step inactive">
            <div className="pc-step-number">4</div>
          </div>
        </div>
        <div className="pc-step-label-below">Verification d'informations</div>
      </div>

      {/* Main Content */}
      <main className="pc-main-content">
        <div className="pc-content-wrapper">
          {/* Informations Personnels Card */}
          <div className="pc-info-card">
            <div className="pc-card-header">
              <img
                src="/assets/profile.png"
                alt="Profile"
                className="pc-card-avatar"
              />
              <div className="pc-card-title-section">
                <h2 className="pc-card-title">Informations Personnels</h2>
                <p className="pc-card-subtitle">Aujourd'hui 15:30</p>
              </div>
            </div>

            <div className="pc-card-content">
              <div className="pc-info-item">
                <span className="pc-info-icon location">📍</span>
                <span className="pc-info-text">Esprit, Tunis</span>
              </div>
              <div className="pc-info-item">
                <span className="pc-info-icon card">💳</span>
                <span className="pc-info-text">51244*******</span>
              </div>
              <div className="pc-info-item">
                <span className="pc-info-icon location">📍</span>
                <span className="pc-info-text">Mourouj, Tunis</span>
              </div>
              <div className="pc-info-item">
                <span className="pc-info-icon email">✉️</span>
                <span className="pc-info-text">mariem@gmail.com</span>
              </div>
            </div>

            <div className="pc-card-footer">
              <button className="pc-details-link">Voir les Détails</button>
            </div>
          </div>

          {/* Information véhicule Card */}
          <div className="pc-vehicle-card">
            <div className="pc-card-header">
              <div className="pc-vehicle-icon-wrapper">
                <img
                  src="/assets/icon/car-icon.png"
                  alt="Véhicule"
                  className="pc-vehicle-icon"
                />
              </div>
              <div className="pc-card-title-section">
                <h2 className="pc-card-title">Information véhicule</h2>
                <p className="pc-card-subtitle">Aujourd'hui 15:30</p>
              </div>
            </div>

            <div className="pc-documents-grid">
              <div className="pc-document-item">
                <span className="pc-download-icon">⬇</span>
                <span className="pc-document-text">Carte grise</span>
              </div>
              <div className="pc-document-item">
                <span className="pc-download-icon">⬇</span>
                <span className="pc-document-text">
                  Plaque d'immatriculation
                </span>
              </div>
              <div className="pc-document-item">
                <span className="pc-download-icon">⬇</span>
                <span className="pc-document-text">Assuarance</span>
              </div>
            </div>

            <div className="pc-card-footer">
              <Link to="/informations-detaillees" className="pc-details-link">
                Voir les Détails
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pc-action-buttons">
            <Link to="/verification-infos" className="pc-btn-retour">
              Retour
            </Link>
            <Link to="/verification-finale" className="pc-btn-confirmer">
              Confirmer
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="pc-footer">
        <div className="pc-footer-container">
          <div className="pc-footer-column">
            <h3 className="pc-footer-brand">Cov'Act</h3>
            <p className="pc-footer-description">
              Votre plateforme de covoiturage de
              <br />
              confiance. Partagez vos trajets, économisez
              <br />
              et contribuez à un avenir durable.
            </p>
            <div className="pc-footer-social">
              <a href="#facebook" className="pc-social-link">
                <img src="/assets/icon/image 13.png" alt="Facebook" />
              </a>
              <a href="#instagram" className="pc-social-link">
                <img src="/assets/icon/image 14.png" alt="Instagram" />
              </a>
              <a href="#linkedin" className="pc-social-link">
                <img src="/assets/icon/image 15.png" alt="LinkedIn" />
              </a>
              <a href="#youtube" className="pc-social-link">
                <img src="/assets/icon/image 16.png" alt="YouTube" />
              </a>
            </div>
          </div>

          <div className="pc-footer-column">
            <h4 className="pc-footer-title">Lien Rapides</h4>
            <ul className="pc-footer-links">
              <li>
                <a href="#accueil">Acceuil</a>
              </li>
              <li>
                <a href="#publier">Publier un Trajet</a>
              </li>
              <li>
                <a href="#profil">Mon Profil</a>
              </li>
            </ul>
          </div>

          <div className="pc-footer-column">
            <h4 className="pc-footer-title">Support</h4>
            <ul className="pc-footer-links">
              <li>
                <a href="#accueil">Acceuil</a>
              </li>
              <li>
                <a href="#publier">Publier un Trajet</a>
              </li>
              <li>
                <a href="#profil">Mon Profil</a>
              </li>
            </ul>
          </div>

          <div className="pc-footer-column">
            <h4 className="pc-footer-title">Contact</h4>
            <ul className="pc-footer-links">
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

export default ProfileConducteur;
