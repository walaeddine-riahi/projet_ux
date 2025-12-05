import { Link } from "react-router-dom";
import { useState } from "react";
import "./InformationsDetailees.css";

function InformationsDetailees() {
  const [activeTab, setActiveTab] = useState("perso");

  return (
    <div className="informations-detaillees-page">
      {/* Header */}
      <header className="id-header">
        <div className="id-header-content">
          <div className="id-header-left">
            <Link to="/">
              <img
                src="/assets/logo-covact.png"
                alt="CovAct Logo"
                className="id-logo"
              />
            </Link>
          </div>
          <div className="id-header-center">
            <nav className="id-nav-menu">
              <Link to="/" className="id-nav-link">
                Accueil
              </Link>
              <a href="#suivi" className="id-nav-link">
                Suivi
              </a>
              <a href="#avis" className="id-nav-link">
                Avis
              </a>
              <a href="#profile" className="id-nav-link active">
                Profile
              </a>
            </nav>
          </div>
          <div className="id-header-right">
            <Link
              to="/publish-ride"
              className="btn-publish"
              style={{ textDecoration: "none", marginRight: "20px" }}
            >
              Publier un Trajet
            </Link>
            <Link to="/notifications" className="id-notification-icon">
              <img src="/assets/notification.png" alt="Notifications" />
            </Link>
            <div className="id-user-profile">
              <img
                src="/assets/profile.png"
                alt="Asma Chaouch"
                className="id-profile-img"
              />
              <span className="id-user-name">Asma Chaouch</span>
            </div>
            <div className="id-espace-conducteur">Espace conducteur</div>
          </div>
        </div>
      </header>

      {/* Back Link */}
      <div className="id-back-section">
        <Link to="/profile-conducteur" className="id-back-link">
          <span className="id-back-arrow">←</span>
          <span>Retour à la page de vérification</span>
        </Link>
      </div>

      {/* Main Content */}
      <main className="id-main-content">
        <div className="id-content-wrapper">
          {/* Page Header */}
          <div className="id-page-header">
            <div className="id-page-title-section">
              <h1 className="id-page-title">Informations detaillées</h1>
              <p className="id-page-subtitle">
                consulter vos informations personnels et les papiers du véhicule
              </p>
            </div>
            <Link to="/inscription-etudiant" className="id-return-btn">
              Retour à la page d'inscription
            </Link>
          </div>

          {/* Tabs */}
          <div className="id-tabs">
            <button
              className={`id-tab ${activeTab === "perso" ? "active" : ""}`}
              onClick={() => setActiveTab("perso")}
            >
              Perso
            </button>
            <button
              className={`id-tab ${activeTab === "vehicule" ? "active" : ""}`}
              onClick={() => setActiveTab("vehicule")}
            >
              Véhicule
            </button>
          </div>

          {/* Perso Tab Content */}
          {activeTab === "perso" && (
            <div className="id-tab-content">
              {/* Profile Photo Section */}
              <div className="id-profile-section">
                <div className="id-profile-photo-wrapper">
                  <img
                    src="/assets/icon/image 79.png"
                    alt="Profile"
                    className="id-profile-photo"
                  />
                  <button className="id-edit-photo-btn">
                    <span>✏️</span>
                  </button>
                </div>
              </div>

              {/* Informations personnelles */}
              <div className="id-info-card">
                <div className="id-card-header">
                  <img
                    src="/assets/icon/image 64.png"
                    alt="Informations personnelles"
                    className="id-card-icon-img"
                  />
                  <h2 className="id-card-title">Informations personnelles</h2>
                </div>

                <div className="id-info-fields">
                  <div className="id-field">
                    <img
                      src="/assets/icon/image 64.png"
                      alt="Nom"
                      className="id-field-icon-img"
                    />
                    <span className="id-field-value">Mariem Moalla</span>
                  </div>
                  <div className="id-field">
                    <img
                      src="/assets/icon/emplacement-de-la-voiture 1 (1).png"
                      alt="Téléphone"
                      className="id-field-icon-img"
                    />
                    <span className="id-field-value">+216518172</span>
                  </div>
                  <div className="id-field">
                    <img
                      src="/assets/icon/emplacement-de-la-voiture 1 (1).png"
                      alt="Email"
                      className="id-field-icon-img"
                    />
                    <span className="id-field-value">Mariem@esprit.tn</span>
                  </div>
                  <div className="id-field">
                    <img
                      src="/assets/icon/emplacement-de-la-voiture 1 (1).png"
                      alt="Localisation"
                      className="id-field-icon-img"
                    />
                    <span className="id-field-value">ESPRIT → Radès</span>
                  </div>
                </div>
              </div>

              {/* Informations académique */}
              <div className="id-info-card">
                <div className="id-card-header">
                  <img
                    src="/assets/icon/image 65.png"
                    alt="Informations académique"
                    className="id-card-icon-img"
                  />
                  <h2 className="id-card-title">Informations académique</h2>
                </div>

                <div className="id-academic-content">
                  <div className="id-academic-left">
                    <div className="id-field">
                      <img
                        src="/assets/icon/emplacement-de-la-voiture 1 (1).png"
                        alt="ID"
                        className="id-field-icon-img"
                      />
                      <span className="id-field-value">221JFT4528</span>
                    </div>
                    <div className="id-field">
                      <img
                        src="/assets/icon/emplacement-de-la-voiture 1 (1).png"
                        alt="Classe"
                        className="id-field-icon-img"
                      />
                      <span className="id-field-value">4TWIN4</span>
                    </div>
                  </div>
                  <div className="id-academic-right">
                    <img
                      src="/assets/carte-etudiant.png"
                      alt="Carte étudiant"
                      className="id-student-card"
                    />
                    <button className="id-expand-btn">⛶</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Vehicule Tab Content */}
          {activeTab === "vehicule" && (
            <div className="id-tab-content">
              {/* Informations véhicule */}
              <div className="id-info-card">
                <div className="id-card-header">
                  <img
                    src="/assets/image 66.png"
                    alt="Informations véhicule"
                    className="id-card-icon-img"
                  />
                  <h2 className="id-card-title">Informations véhicule</h2>
                </div>

                <div className="id-vehicle-images">
                  <div className="id-vehicle-image-wrapper">
                    <img
                      src="/assets/voiture-bleue.png"
                      alt="Voiture"
                      className="id-vehicle-img"
                    />
                    <button className="id-expand-btn">⛶</button>
                  </div>
                  <div className="id-vehicle-image-wrapper">
                    <img
                      src="/assets/carte-grise.png"
                      alt="Carte grise"
                      className="id-vehicle-img"
                    />
                    <button className="id-expand-btn">⛶</button>
                  </div>
                  <div className="id-vehicle-image-wrapper">
                    <img
                      src="/assets/assurance.png"
                      alt="Assurance"
                      className="id-vehicle-img"
                    />
                    <button className="id-expand-btn">⛶</button>
                  </div>
                </div>

                <div className="id-info-fields">
                  <div className="id-field">
                    <img
                      src="/assets/icon/emplacement-de-la-voiture 1 (1).png"
                      alt="Marque"
                      className="id-field-icon-img"
                    />
                    <span className="id-field-value">Renault</span>
                  </div>
                  <div className="id-field">
                    <img
                      src="/assets/icon/emplacement-de-la-voiture 1 (1).png"
                      alt="Modèle"
                      className="id-field-icon-img"
                    />
                    <span className="id-field-value">Clio</span>
                  </div>
                  <div className="id-field">
                    <img
                      src="/assets/icon/emplacement-de-la-voiture 1 (1).png"
                      alt="Matricule"
                      className="id-field-icon-img"
                    />
                    <span className="id-field-value">213 Tounes 5542</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="id-footer">
        <div className="id-footer-container">
          <div className="id-footer-column">
            <h3 className="id-footer-brand">Cov'Act</h3>
            <p className="id-footer-description">
              Votre plateforme de covoiturage de
              <br />
              confiance. Partagez vos trajets, économisez
              <br />
              et contribuez à un avenir durable.
            </p>
            <div className="id-footer-social">
              <a href="#facebook" className="id-social-link">
                <img src="/assets/icon/image 13.png" alt="Facebook" />
              </a>
              <a href="#instagram" className="id-social-link">
                <img src="/assets/icon/image 14.png" alt="Instagram" />
              </a>
              <a href="#linkedin" className="id-social-link">
                <img src="/assets/icon/image 15.png" alt="LinkedIn" />
              </a>
              <a href="#youtube" className="id-social-link">
                <img src="/assets/icon/image 16.png" alt="YouTube" />
              </a>
            </div>
          </div>

          <div className="id-footer-column">
            <h4 className="id-footer-title">Lien Rapides</h4>
            <ul className="id-footer-links">
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

          <div className="id-footer-column">
            <h4 className="id-footer-title">Support</h4>
            <ul className="id-footer-links">
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

          <div className="id-footer-column">
            <h4 className="id-footer-title">Contact</h4>
            <ul className="id-footer-links">
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

export default InformationsDetailees;
