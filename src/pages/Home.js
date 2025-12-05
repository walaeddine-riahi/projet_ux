import { Link } from "react-router-dom";
import "../styles/Home.css"; 

function Home() {
  return (
    <div className="home-page">
      {/* Header */}
      <header className="home-header">
        <div>
          <div className="header-left">
            <Link to="/">
              <img
                src="/assets/logo-covact.png"
                alt="CovAct Logo"
                className="logo"
              />
            </Link>
          </div>
          <nav className="nav-menu">
            <a href="#accueil" className="nav-link active">
              Accueil
            </a>
            <a href="#suivi" className="nav-link">
              Suivi
            </a>
            <a href="#avis" className="nav-link">
              Avis
            </a>
            <a href="#profile" className="nav-link">
              Profile
            </a>
          </nav>
          <div className="header-right">
            <div className="notification-icon">
              <img src="/assets/notification.png" alt="Notifications" />
              <span className="notification-badge">1</span>
            </div>
            <div className="user-profile">
              <img
                src="/assets/profile.png"
                alt="Asma Chaouch"
                className="profile-img"
              />
              <span className="user-name">Asma Chaouch</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Partagez le Trajet,
            <br />
            Sauvez la Planète
          </h1>
          <p className="hero-description">
            Connectez-vous avec des conducteurs et des
            <br />
            passagers vérifiés qui voyagent dans votre direction.
            <br />
            Économisez de l'argent, réduisez les émissions et
            <br />
            faites de nouvelles connaissances.
          </p>

          <div className="features-grid">
            <div className="feature-item">
              <img
                src="/assets/instantane 1.png"
                alt="Réservation Facile"
                className="feature-icon"
              />
              <p className="feature-text">Réservation Facile</p>
            </div>
            <div className="feature-item">
              <img
                src="/assets/image 53.png"
                alt="Passagers Vérifiés"
                className="feature-icon"
              />
              <p className="feature-text">Passagers Vérifiés</p>
            </div>
            <div className="feature-item">
              <img
                src="/assets/emplacement-de-la-voiture 1.png"
                alt="Suivi en Temps Réel"
                className="feature-icon"
              />
              <p className="feature-text">Suivi en Temps Réel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <div className="search-card">
          <h2 className="search-title">Trouver votre Trajet</h2>

          <form className="search-form">
            <div className="form-group">
              <label className="form-label">Départ</label>
              <div className="input-with-icon">
                <img
                  src="/assets/reticule-de-localisation 1.png"
                  alt="Location"
                  className="input-icon"
                />
                <input
                  type="text"
                  className="form-input"
                  placeholder="Mourouj"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Arrivée</label>
              <div className="input-with-icon">
                <img
                  src="/assets/reticule-de-localisation 1.png"
                  alt="Location"
                  className="input-icon"
                />
                <input
                  type="text"
                  className="form-input"
                  placeholder="ESPRIT"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Quand</label>
              <div className="input-with-icon">
                <span className="input-icon">📅</span>
                <input
                  type="text"
                  className="form-input"
                  placeholder="jj/mm/yyyy"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Passager</label>
              <div className="input-with-icon">
                <span className="input-icon">👤</span>
                <select className="form-input">
                  <option>jj/mm/yyyy</option>
                  <option>1 passager</option>
                  <option>2 passagers</option>
                  <option>3 passagers</option>
                  <option>4 passagers</option>
                </select>
              </div>
            </div>

            <button type="submit" className="search-btn">
              Rechercher des Trajets
            </button>
          </form>
        </div>
      </section>

      {/* Available Trips Section */}
      <section className="trips-section">
        <h2 className="trips-title">Trajets Disponibles Aujourd'hui</h2>

        <div className="trips-list">
          {/* Trip Card 1 */}
          <div className="trip-card">
            <div className="trip-header">
              <div className="driver-info">
                <img
                  src="/assets/image 60.png"
                  alt="Salma Jouini"
                  className="driver-avatar"
                />
                <div className="driver-details">
                  <div className="driver-name-rating">
                    <span className="driver-name">Salma Jouini</span>
                    <span className="rating">⭐ 4.9 (124)</span>
                  </div>
                  <span className="car-info">Audi RS e-tron GT</span>
                </div>
              </div>
              <div className="trip-price">
                <span className="price">5DT</span>
                <span className="per-person">par personne</span>
              </div>
            </div>

            <div className="trip-details">
              <div className="trip-route">
                <div className="route-item">
                  <img
                    src="/assets/reticule-de-localisation 1.png"
                    alt="Départ"
                    className="route-icon"
                  />
                  <span>Esprit, Tunis</span>
                </div>
                <div className="route-item">
                  <img
                    src="/assets/reticule-de-localisation 1.png"
                    alt="Arrivée"
                    className="route-icon"
                  />
                  <span>Mourouj, Tunis</span>
                </div>
              </div>
              <div className="trip-meta">
                <div className="meta-item">
                  <span className="meta-icon">🕐</span>
                  <span>17:15</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">👥</span>
                  <span>2 sièges</span>
                </div>
              </div>
            </div>

            <button className="reserve-btn">Voir Détails et Réserver</button>
          </div>

          {/* Trip Card 2 */}
          <div className="trip-card">
            <div className="trip-header">
              <div className="driver-info">
                <img
                  src="/assets/image 60.png"
                  alt="Cyrine Ayari"
                  className="driver-avatar"
                />
                <div className="driver-details">
                  <div className="driver-name-rating">
                    <span className="driver-name">Cyrine Ayari</span>
                    <span className="rating">⭐ 4.5 (100)</span>
                  </div>
                  <span className="car-info">Audi RS Q3 Sportback</span>
                </div>
              </div>
              <div className="trip-price">
                <span className="price">6DT</span>
                <span className="per-person">par personne</span>
              </div>
            </div>

            <div className="trip-details">
              <div className="trip-route">
                <div className="route-item">
                  <img
                    src="/assets/reticule-de-localisation 1.png"
                    alt="Départ"
                    className="route-icon"
                  />
                  <span>Esprit, Tunis</span>
                </div>
                <div className="route-item">
                  <img
                    src="/assets/reticule-de-localisation 1.png"
                    alt="Arrivée"
                    className="route-icon"
                  />
                  <span>Ariana, Tunis</span>
                </div>
              </div>
              <div className="trip-meta">
                <div className="meta-item">
                  <span className="meta-icon">🕐</span>
                  <span>14:50</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">👥</span>
                  <span>4 sièges</span>
                </div>
              </div>
            </div>

            <button className="reserve-btn">Voir Détails et Réserver</button>
          </div>
        </div>
      </section>

      {/* Chat Button */}
      <button className="chat-button" aria-label="Chat">
        💬
      </button>

      {/* Footer - Version complète */}
      <footer className="home-footer">
        <div className="footer-container">
          {/* Colonne 1: Marque et description */}
          <div className="footer-column">
            <h3 className="footer-brand">Cov'Act</h3>
            <p className="footer-description">
              Votre plateforme de covoiturage de confiance.<br />
              Partagez vos trajets, économisez<br />
              et contribuez à un avenir durable.
            </p>

            <div className="footer-social">
              <a href="#facebook" className="social-link">
                <img src="/assets/icon/image 13.png" alt="Facebook" />
              </a>
              <a href="#instagram" className="social-link">
                <img src="/assets/icon/image 14.png" alt="Instagram" />
              </a>
              <a href="#linkedin" className="social-link">
                <img src="/assets/icon/image 15.png" alt="LinkedIn" />
              </a>
              <a href="#youtube" className="social-link">
                <img src="/assets/icon/image 16.png" alt="YouTube" />
              </a>
            </div>
          </div>

          {/* Colonne 2: Liens Rapides */}
          <div className="footer-column">
            <h4 className="footer-title">Liens Rapides</h4>
            <ul className="footer-links">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/publish">Publier un Trajet</Link></li>
              <li><Link to="/driver">Espace Conducteur</Link></li>
              <li><Link to="/wallet">Mon Portefeuille</Link></li>
              <li><Link to="/dashboard">Tableau de Bord</Link></li>
            </ul>
          </div>

          {/* Colonne 3: Support */}
          <div className="footer-column">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/support">Centre d'Aide</Link></li>
              <li><Link to="/about">À Propos</Link></li>
              <li><Link to="/terms">Conditions d'Utilisation</Link></li>
              <li><Link to="/privacy">Politique de Confidentialité</Link></li>
            </ul>
          </div>

          {/* Colonne 4: Contact */}
          <div className="footer-column">
            <h4 className="footer-title">Contact</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <a href="mailto:contact@covact.com">contact@covact.com</a>
              </div>
              <div className="contact-item">
                <a href="tel:+21620111333">+216 20 111 333</a>
              </div>
              <div className="contact-item">
                123 Rue du Covoiturage<br />
                75001 Paris, France
              </div>
            </div>
          </div>

          {/* Section du bas */}
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Cov'Act. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;