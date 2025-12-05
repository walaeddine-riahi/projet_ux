import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Footer() {
  return (
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
  );
}