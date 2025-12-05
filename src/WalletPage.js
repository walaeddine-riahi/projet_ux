import { Link } from "react-router-dom";
import "./WalletPage.css";

function WalletPage() {
  return (
    <div className="wallet-page">
      {/* Header */}
      <header className="wallet-header">
        <div className="wallet-header-content">
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
            <Link to="/home" className="nav-link">
              Accueil
            </Link>
            <Link to="/trajets-quotidiens" className="nav-link">
              Trajets
            </Link>
            <Link to="/notifications" className="nav-link">
              Notifications
            </Link>
            <Link to="/wallet" className="nav-link active">
              Portefeuille
            </Link>
          </nav>
          <div className="header-right">
            <Link
              to="/publish-ride"
              className="btn-publish"
              style={{ textDecoration: "none", marginRight: "20px" }}
            >
              Publier un Trajet
            </Link>
            <Link to="/notifications" className="notification-icon">
              <img src="/assets/notification.png" alt="Notifications" />
            </Link>
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

      {/* Main Content */}
      <main className="wallet-main">
        <div className="wallet-container">
          {/* Back button */}
          <Link to="/dashboard" className="back-button">
            <span className="back-icon">←</span>
            <span>Retour au tableau de bord</span>
          </Link>

          {/* Page title */}
          <h1 className="wallet-title">
            <span className="wallet-icon">💳</span>
            <span>Mon Portefeuille</span>
          </h1>

          {/* Balance cards */}
          <div className="balance-cards">
            {/* Available balance */}
            <div className="balance-card primary">
              <div className="balance-header">
                <div>
                  <p className="balance-label">Solde Disponible</p>
                  <p className="balance-amount">25008 DT</p>
                </div>
                <div className="balance-icon">💰</div>
              </div>
              <div className="balance-actions">
                <button className="btn-withdraw">Retirer</button>
                <button className="btn-add">Ajouter</button>
              </div>
            </div>

            {/* Pending gain */}
            <div className="balance-card secondary">
              <div>
                <p className="balance-label">Gain en Attente</p>
                <p className="balance-amount">100 DT</p>
                <p className="balance-note">
                  Disponible après confirmation du trajet
                </p>
              </div>
              <button className="btn-details">Voir les détails</button>
            </div>
          </div>

          {/* Payment methods */}
          <section className="payment-methods">
            <h2 className="section-title">Moyens de Paiement</h2>

            <div className="payment-cards">
              {/* Visa card */}
              <div className="payment-card">
                <div className="card-info">
                  <div className="card-logo">VISA</div>
                  <div>
                    <p className="card-number">Visa •••• 4242</p>
                    <p className="card-expiry">Expire le 12/25</p>
                  </div>
                </div>
                <button className="btn-remove">Supprimer</button>
              </div>

              {/* Mastercard */}
              <div className="payment-card">
                <div className="card-info">
                  <div className="card-logo">MC</div>
                  <div>
                    <p className="card-number">Mastercard •••• 5555</p>
                    <p className="card-expiry">Expire le 08/26</p>
                  </div>
                </div>
                <button className="btn-remove">Supprimer</button>
              </div>
            </div>

            <button className="btn-add-card">
              <span className="add-icon">+</span>
              <span>Ajouter un nouveau moyen de paiement</span>
            </button>
          </section>

          {/* Transaction history */}
          <section className="transaction-history">
            <h2 className="section-title">Historique des Transactions</h2>

            <div className="transactions-list">
              <div className="transaction-item">
                <div className="transaction-icon success">↓</div>
                <div className="transaction-details">
                  <p className="transaction-title">Paiement reçu</p>
                  <p className="transaction-date">03 Déc 2025 • 14:30</p>
                </div>
                <div className="transaction-amount positive">+120 DT</div>
              </div>

              <div className="transaction-item">
                <div className="transaction-icon pending">⏱</div>
                <div className="transaction-details">
                  <p className="transaction-title">En attente</p>
                  <p className="transaction-date">02 Déc 2025 • 09:15</p>
                </div>
                <div className="transaction-amount pending">+100 DT</div>
              </div>

              <div className="transaction-item">
                <div className="transaction-icon withdraw">↑</div>
                <div className="transaction-details">
                  <p className="transaction-title">Retrait</p>
                  <p className="transaction-date">01 Déc 2025 • 16:45</p>
                </div>
                <div className="transaction-amount negative">-500 DT</div>
              </div>

              <div className="transaction-item">
                <div className="transaction-icon success">↓</div>
                <div className="transaction-details">
                  <p className="transaction-title">Paiement reçu</p>
                  <p className="transaction-date">30 Nov 2025 • 11:20</p>
                </div>
                <div className="transaction-amount positive">+85 DT</div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="wallet-footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3 className="footer-brand">Cov'Act</h3>
            <p className="footer-description">
              Votre plateforme de covoiturage de confiance.
              <br />
              Partagez vos trajets, économisez
              <br />
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

          <div className="footer-column">
            <h4 className="footer-title">Lien Rapides</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/publish-ride">Publier un Trajet</Link>
              </li>
              <li>
                <Link to="/dashboard">Tableau de Bord</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/support">Centre d'Aide</Link>
              </li>
              <li>
                <Link to="/about">À Propos</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-links">
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

export default WalletPage;
