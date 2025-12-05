import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Header() {
  return (
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
          <Link to="/home" className="nav-link">
            Accueil
          </Link>
          <Link to="/trajets-quotidiens" className="nav-link">
            Trajets
          </Link>
          <Link to="/notifications" className="nav-link">
            Notifications
          </Link>
          <Link to="/wallet" className="nav-link">
            Portefeuille
          </Link>
        </nav>

        <div className="header-right">
          <Link
            to="/publish-ride"
            className="btn-publish"
            style={{ textDecoration: "none" }}
          >
            Publier un Trajet
          </Link>
          <Link to="/notifications" className="notification-icon">
            <img src="/assets/notification.png" alt="Notifications" />
            <span className="notification-badge">1</span>
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
  );
}
