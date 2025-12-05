import { Link } from "react-router-dom";
import { useState } from "react";
import "./TrajetsQuotidiens.css";

function TrajetsQuotidiens() {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <div className="trajets-quotidiens-page">
      {/* Header */}
      <header className="tq-header">
        <div className="tq-header-content">
          <div className="tq-header-left">
            <Link to="/">
              <img
                src="/assets/logo-covact.png"
                alt="CovAct Logo"
                className="tq-logo"
              />
            </Link>
          </div>
          <div className="tq-header-center">
            <nav className="tq-nav-menu">
              <Link to="/" className="tq-nav-link">
                Accueil
              </Link>
              <a href="#suivi" className="tq-nav-link">
                Suivi
              </a>
              <a href="#avis" className="tq-nav-link">
                Avis
              </a>
              <a href="#profile" className="tq-nav-link active">
                Profile
              </a>
            </nav>
          </div>
          <div className="tq-header-right">
            <Link to="/notifications" className="tq-notification-icon">
              <img src="/assets/notification.png" alt="Notifications" />
            </Link>
            <div className="tq-user-profile">
              <img
                src="/assets/profile.png"
                alt="Asma Chaouch"
                className="tq-profile-img"
              />
              <span className="tq-user-name">Asma Chaouch</span>
            </div>
            <div className="tq-espace-conducteur">Espace conducteur</div>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="tq-progress-container">
        <div className="tq-steps">
          <div className={`tq-step ${currentStep >= 1 ? "completed" : ""}`}>
            <div className="tq-step-number">1</div>
          </div>
          <div
            className={`tq-step-line ${currentStep >= 2 ? "completed" : ""}`}
          ></div>
          <div className={`tq-step ${currentStep >= 2 ? "active" : ""}`}>
            <div className="tq-step-number">2</div>
            <div className="tq-step-label">Vos trajets quotidient</div>
          </div>
          <div className="tq-step-line"></div>
          <div className={`tq-step ${currentStep >= 3 ? "active" : ""}`}>
            <div className="tq-step-number">3</div>
          </div>
          <div className="tq-step-line"></div>
          <div className={`tq-step ${currentStep >= 4 ? "active" : ""}`}>
            <div className="tq-step-number">4</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="tq-main-content">
        <div className="tq-content-wrapper">
          <div className="tq-left-section">
            <h1 className="tq-title">Vos trajets quotidient</h1>
            <p className="tq-subtitle">
              Proposez vos trajets en tant qu'étudiant vérifié et facilitez le
              covoiturage quotidien de vos camarades en toute sécurité.
            </p>

            <form className="tq-form">
              <div className="tq-form-group">
                <label className="tq-label">Position de départ</label>
                <div className="tq-select-box">
                  <span className="tq-select-text">Votre position</span>
                  <span className="tq-select-arrow">▼</span>
                </div>
              </div>

              <div className="tq-form-group">
                <label className="tq-label">Position de destination</label>
                <div className="tq-select-box">
                  <span className="tq-select-text">Votre destination</span>
                  <span className="tq-select-arrow">▼</span>
                </div>
              </div>

              <div className="tq-checkbox-group">
                <input type="checkbox" id="memoriser" />
                <label htmlFor="memoriser" className="tq-checkbox-label">
                  Mémoriser ce trajet pour mes prochaines propositions
                </label>
              </div>

              <Link
                to="/profile-conducteur"
                className="tq-btn-suivant"
                style={{
                  textDecoration: "none",
                  display: "block",
                  textAlign: "center",
                }}
              >
                Suivant
              </Link>
              <Link
                to="/inscription-etudiant"
                className="tq-btn-retour"
                style={{
                  textDecoration: "none",
                  display: "block",
                  textAlign: "center",
                }}
              >
                Retour
              </Link>
            </form>
          </div>

          <div className="tq-right-section">
            <div className="tq-map-container">
              <iframe
                className="tq-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.4951682394715!2d10.189845!3d36.8987995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb7d8a7f6519%3A0x8d3d3e8c5c5f3c3a!2sESPRIT!5e0!3m2!1sfr!2stn!4v1234567890"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
              <div className="tq-map-link">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ouvrir sur Google map
                </a>
              </div>
              <button className="tq-btn-itineraire">Itinéraire</button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="tq-footer">
        <div className="tq-footer-container">
          <div className="tq-footer-column">
            <h3 className="tq-footer-brand">Cov'Act</h3>
            <p className="tq-footer-description">
              Votre plateforme de covoiturage de
              <br />
              confiance. Partagez vos trajets, économisez
              <br />
              et contribuez à un avenir durable.
            </p>
            <div className="tq-footer-social">
              <a href="#facebook" className="tq-social-link">
                <img src="/assets/icon/image 13.png" alt="Facebook" />
              </a>
              <a href="#instagram" className="tq-social-link">
                <img src="/assets/icon/image 14.png" alt="Instagram" />
              </a>
              <a href="#linkedin" className="tq-social-link">
                <img src="/assets/icon/image 15.png" alt="LinkedIn" />
              </a>
              <a href="#youtube" className="tq-social-link">
                <img src="/assets/icon/image 16.png" alt="YouTube" />
              </a>
            </div>
          </div>

          <div className="tq-footer-column">
            <h4 className="tq-footer-title">Lien Rapides</h4>
            <ul className="tq-footer-links">
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

          <div className="tq-footer-column">
            <h4 className="tq-footer-title">Support</h4>
            <ul className="tq-footer-links">
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

          <div className="tq-footer-column">
            <h4 className="tq-footer-title">Contact</h4>
            <ul className="tq-footer-links">
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

export default TrajetsQuotidiens;
