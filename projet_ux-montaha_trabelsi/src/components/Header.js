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
          <a href="#accueil" className="nav-link active">Accueil</a>
          <a href="#suivi" className="nav-link">Suivi</a>
          <a href="#avis" className="nav-link">Avis</a>
          <a href="#profile" className="nav-link">Profile</a>
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
  );
}
