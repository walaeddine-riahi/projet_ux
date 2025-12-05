import { Link } from "react-router-dom";
import { useState } from "react";
import "./Notifications.css";

function Notifications() {
  const [activeTab, setActiveTab] = useState("non-lues");

  return (
    <div className="notifications-page">
      {/* Header */}
      <header className="notif-header">
        <div className="notif-header-content">
          <div className="notif-header-left">
            <Link to="/">
              <img
                src="/assets/logo-covact.png"
                alt="CovAct Logo"
                className="notif-logo"
              />
            </Link>
          </div>
          <div className="notif-header-center">
            <nav className="notif-nav-menu">
              <Link to="/home" className="notif-nav-link">
                Accueil
              </Link>
              <Link to="/trajets-quotidiens" className="notif-nav-link">
                Trajets
              </Link>
              <Link to="/notifications" className="notif-nav-link active">
                Notifications
              </Link>
              <Link to="/wallet" className="notif-nav-link">
                Portefeuille
              </Link>
            </nav>
          </div>
          <div className="notif-header-right">
            <Link
              to="/publish-ride"
              className="btn-publish"
              style={{ textDecoration: "none", marginRight: "20px" }}
            >
              Publier un Trajet
            </Link>
            <Link to="/notifications" className="notif-notification-icon">
              <img src="/assets/notification.png" alt="Notifications" />
              <span className="notif-badge">1</span>
            </Link>
            <div className="notif-user-profile">
              <img
                src="/assets/profile.png"
                alt="Asma Chaouch"
                className="notif-profile-img"
              />
              <span className="notif-user-name">Asma Chaouch</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="notif-main-content">
        <div className="notif-content-wrapper">
          {/* Page Title */}
          <div className="notif-title-section">
            <img
              src="/assets/notification.png"
              alt="Notifications"
              className="notif-title-icon"
            />
            <h1 className="notif-page-title">Notifications</h1>
          </div>

          {/* Tabs */}
          <div className="notif-tabs">
            <button
              className={`notif-tab ${
                activeTab === "non-lues" ? "active" : ""
              }`}
              onClick={() => setActiveTab("non-lues")}
            >
              Non lues
            </button>
          </div>

          {/* Notifications List */}
          <div className="notif-list">
            <div className="notif-item">
              <div className="notif-icon-wrapper">
                <img
                  src="/assets/icon/approved.png"
                  alt="Approved"
                  className="notif-icon"
                />
              </div>
              <div className="notif-content">
                <h3 className="notif-item-title">Félicitations !</h3>
                <p className="notif-item-text">
                  Votre profil a été vérifié et approuvé par l'administrateur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="notif-footer">
        <div className="notif-footer-container">
          <div className="notif-footer-column">
            <h3 className="notif-footer-brand">Cov'Act</h3>
            <p className="notif-footer-description">
              Votre plateforme de covoiturage de
              <br />
              confiance. Partagez vos trajets, économisez
              <br />
              et contribuez à un avenir durable.
            </p>
            <div className="notif-footer-social">
              <a href="#facebook" className="notif-social-link">
                <img src="/assets/icon/image 13.png" alt="Facebook" />
              </a>
              <a href="#instagram" className="notif-social-link">
                <img src="/assets/icon/image 14.png" alt="Instagram" />
              </a>
              <a href="#linkedin" className="notif-social-link">
                <img src="/assets/icon/image 15.png" alt="LinkedIn" />
              </a>
              <a href="#youtube" className="notif-social-link">
                <img src="/assets/icon/image 16.png" alt="YouTube" />
              </a>
            </div>
          </div>

          <div className="notif-footer-column">
            <h4 className="notif-footer-title">Lien Rapides</h4>
            <ul className="notif-footer-links">
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

          <div className="notif-footer-column">
            <h4 className="notif-footer-title">Support</h4>
            <ul className="notif-footer-links">
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

          <div className="notif-footer-column">
            <h4 className="notif-footer-title">Contact</h4>
            <ul className="notif-footer-links">
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

export default Notifications;
