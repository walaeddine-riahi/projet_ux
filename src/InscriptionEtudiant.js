import { Link } from "react-router-dom";
import { useState } from "react";
import "./InscriptionEtudiant.css";

function InscriptionEtudiant() {
  const [currentStep] = useState(1);

  return (
    <div className="inscription-etudiant-page">
      {/* Header */}
      <header className="ie-header">
        <div className="ie-header-content">
          <div className="ie-header-left">
            <Link to="/">
              <img
                src="/assets/logo-covact.png"
                alt="CovAct Logo"
                className="ie-logo"
              />
            </Link>
          </div>
          <div className="ie-header-center">
            <nav className="ie-nav-menu">
              <Link to="/" className="ie-nav-link">
                Accueil
              </Link>
              <a href="#suivi" className="ie-nav-link">
                Suivi
              </a>
              <a href="#avis" className="ie-nav-link">
                Avis
              </a>
              <a href="#profile" className="ie-nav-link active">
                Profile
              </a>
            </nav>
          </div>
          <div className="ie-header-right">
            <Link
              to="/publish-ride"
              className="btn-publish"
              style={{ textDecoration: "none", marginRight: "20px" }}
            >
              Publier un Trajet
            </Link>
            <Link to="/notifications" className="ie-notification-icon">
              <img src="/assets/notification.png" alt="Notifications" />
            </Link>
            <div className="ie-user-profile">
              <img
                src="/assets/profile.png"
                alt="Asma Chaouch"
                className="ie-profile-img"
              />
              <span className="ie-user-name">Asma Chaouch</span>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="ie-progress-container">
        <div className="ie-steps">
          <div className={`ie-step ${currentStep >= 1 ? "active" : ""}`}>
            <div className="ie-step-number">1</div>
            <div className="ie-step-label">
              Inscription Étudiant - Covoiturage
            </div>
          </div>
          <div className="ie-step-line"></div>
          <div className={`ie-step ${currentStep >= 2 ? "active" : ""}`}>
            <div className="ie-step-number">2</div>
          </div>
          <div className="ie-step-line"></div>
          <div className={`ie-step ${currentStep >= 3 ? "active" : ""}`}>
            <div className="ie-step-number">3</div>
          </div>
          <div className="ie-step-line"></div>
          <div className={`ie-step ${currentStep >= 4 ? "active" : ""}`}>
            <div className="ie-step-number">4</div>
            <div className="ie-step-label-right">Espace conducteur</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="ie-main-content">
        <div className="ie-form-container">
          <h1 className="ie-title">Inscription Étudiant - Covoiturage</h1>
          <p className="ie-subtitle">
            Complétez vos informations personnelles et celles de votre véhicule
            pour finaliser votre profil conducteur
          </p>

          <form className="ie-form">
            {/* Informations personnelles */}
            <section className="ie-section">
              <div className="ie-section-header">
                <span className="ie-section-icon">👤</span>
                <h2 className="ie-section-title">Informations personnelles</h2>
              </div>

              <div className="ie-form-group">
                <label className="ie-label">Nom complet</label>
                <input
                  type="text"
                  className="ie-input"
                  placeholder="Entrez votre nom complet"
                />
              </div>

              <div className="ie-form-row">
                <div className="ie-form-group">
                  <label className="ie-label">Numéro de téléphone</label>
                  <input
                    type="tel"
                    className="ie-input"
                    placeholder="+216 5181720"
                  />
                </div>
                <div className="ie-form-group">
                  <label className="ie-label">Email</label>
                  <input
                    type="email"
                    className="ie-input"
                    placeholder="Exemple@gmail.com"
                  />
                </div>
              </div>

              <div className="ie-form-group">
                <label className="ie-label">
                  Téléverser votre photo de profil
                </label>
                <div className="ie-upload-box">
                  <span className="ie-upload-icon">📤</span>
                  <span className="ie-upload-text">Importer la photo</span>
                  <span className="ie-upload-eye">👁</span>
                </div>
              </div>
            </section>

            {/* Informations académique */}
            <section className="ie-section">
              <div className="ie-section-header">
                <span className="ie-section-icon">🎓</span>
                <h2 className="ie-section-title">Informations académique</h2>
              </div>

              <div className="ie-form-row">
                <div className="ie-form-group">
                  <label className="ie-label">Numéro d'étudiant</label>
                  <input
                    type="text"
                    className="ie-input"
                    placeholder="Ex: 221JR6257"
                  />
                </div>
                <div className="ie-form-group">
                  <label className="ie-label">Niveau d'études</label>
                  <input
                    type="text"
                    className="ie-input"
                    placeholder="Ex: 4Twin4"
                  />
                </div>
              </div>

              <div className="ie-form-group">
                <label className="ie-label">
                  Téléverser votre carte d'étudiant
                </label>
                <div className="ie-upload-box">
                  <span className="ie-upload-icon">📤</span>
                  <span className="ie-upload-text">
                    Importer la carte d'étudiant
                  </span>
                  <span className="ie-upload-eye">👁</span>
                </div>
              </div>
            </section>

            {/* Informations sur la véhicule */}
            <section className="ie-section">
              <div className="ie-section-header">
                <span className="ie-section-icon">🚗</span>
                <h2 className="ie-section-title">
                  Informations sur la véhicule
                </h2>
              </div>

              <div className="ie-form-group">
                <label className="ie-label">Marque</label>
                <input
                  type="text"
                  className="ie-input"
                  placeholder="Ex: Renault, Peugeot..."
                />
              </div>

              <div className="ie-form-row">
                <div className="ie-form-group">
                  <label className="ie-label">Modèle</label>
                  <input
                    type="text"
                    className="ie-input"
                    placeholder="Ex: Clio, 308..."
                  />
                </div>
                <div className="ie-form-group">
                  <label className="ie-label">Plaque d'immatriculation</label>
                  <input
                    type="text"
                    className="ie-input"
                    placeholder="213 Tounes 2578"
                  />
                </div>
              </div>

              <div className="ie-form-group">
                <label className="ie-label">
                  Téléverser une photo du véhicule
                </label>
                <div className="ie-upload-box">
                  <span className="ie-upload-icon">📤</span>
                  <span className="ie-upload-text">
                    Importer la photo de véhicule
                  </span>
                  <span className="ie-upload-eye">👁</span>
                </div>
              </div>
            </section>

            {/* Documents requis */}
            <section className="ie-section">
              <div className="ie-section-header">
                <span className="ie-section-icon">📄</span>
                <h2 className="ie-section-title">Documents requis</h2>
              </div>
              <p className="ie-section-description">
                Veuillez téléverser des images claires des documents suivants
                <br />
                pour vérification par l'administrateur
              </p>

              <div className="ie-documents-grid">
                <div className="ie-form-group">
                  <label className="ie-label">
                    Carte Grise (Immatriculation)
                  </label>
                  <div className="ie-upload-box">
                    <span className="ie-upload-icon">📤</span>
                    <span className="ie-upload-text">
                      Importer la carte grise
                    </span>
                    <span className="ie-upload-eye">👁</span>
                  </div>
                </div>

                <div className="ie-form-group">
                  <label className="ie-label">Assuarance du véhicule</label>
                  <div className="ie-upload-box">
                    <span className="ie-upload-icon">📤</span>
                    <span className="ie-upload-text">
                      Importer l'assuarance
                    </span>
                    <span className="ie-upload-eye">👁</span>
                  </div>
                </div>
              </div>
            </section>

            <Link
              to="/trajets-quotidiens"
              className="ie-submit-btn"
              style={{
                textDecoration: "none",
                display: "block",
                textAlign: "center",
              }}
            >
              Suivant
            </Link>
          </form>

          {/* Security Notice */}
          <div className="ie-security-notice">
            <span className="ie-security-icon">🔒</span>
            <div>
              <h3 className="ie-security-title">
                Vos données sont entièrement sécurisées
              </h3>
              <p className="ie-security-text">
                Les informations et documents que vous téléversez sont protégés,
                chiffrés et ne seront jamais partagés sans votre accord.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="ie-footer">
        <div className="ie-footer-container">
          <div className="ie-footer-column">
            <h3 className="ie-footer-brand">Cov'Act</h3>
            <p className="ie-footer-description">
              Votre plateforme de covoiturage de
              <br />
              confiance. Partagez vos trajets, économisez
              <br />
              et contribuez à un avenir durable.
            </p>
            <div className="ie-footer-social">
              <a href="#facebook" className="ie-social-link">
                <img src="/assets/icon/image 13.png" alt="Facebook" />
              </a>
              <a href="#instagram" className="ie-social-link">
                <img src="/assets/icon/image 14.png" alt="Instagram" />
              </a>
              <a href="#linkedin" className="ie-social-link">
                <img src="/assets/icon/image 15.png" alt="LinkedIn" />
              </a>
              <a href="#youtube" className="ie-social-link">
                <img src="/assets/icon/image 16.png" alt="YouTube" />
              </a>
            </div>
          </div>

          <div className="ie-footer-column">
            <h4 className="ie-footer-title">Lien Rapides</h4>
            <ul className="ie-footer-links">
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

          <div className="ie-footer-column">
            <h4 className="ie-footer-title">Support</h4>
            <ul className="ie-footer-links">
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

          <div className="ie-footer-column">
            <h4 className="ie-footer-title">Contact</h4>
            <ul className="ie-footer-links">
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

export default InscriptionEtudiant;
