import { Link } from "react-router-dom";
import "./App.css";

function Login() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <Link to="/">
            <img
              src="/assets/logo-covact.png"
              alt="CovAct Logo"
              className="logo"
            />
          </Link>
        </div>
        <div className="header-buttons">
          <button className="btn-publish">Publier un Trajet</button>
          <Link to="/signup">
            <button className="btn-signup">S'inscrire</button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="inscription-card">
          <h1 className="inscription-title">Bienvenue</h1>

          <form>
            <div className="form-group">
              <label className="form-label">Email:</label>
              <input type="email" className="form-input" placeholder="" />
            </div>

            <div className="form-group">
              <label className="form-label">Mot de passe :</label>
              <input type="password" className="form-input" placeholder="" />
            </div>

            <div className="remember-forgot">
              <div className="checkbox-container">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember" className="checkbox-label">
                  Se souvenir de moi
                </label>
              </div>
              <a href="#forgot" className="forgot-link">
                Mot de passe oublié ?
              </a>
            </div>

            <button type="submit" className="submit-btn">
              Se connecter
            </button>

            <div className="login-link">
              Vous n'avez pas un compte ? <Link to="/signup">S'inscrire</Link>
            </div>

            <div className="divider">
              <span>Ou</span>
            </div>

            <div className="social-buttons">
              <button
                type="button"
                className="social-btn"
                aria-label="Facebook"
              >
                <img
                  src="/assets/icon/image 13.png"
                  alt="Facebook"
                  className="social-icon"
                />
              </button>
              <button
                type="button"
                className="social-btn"
                aria-label="Instagram"
              >
                <img
                  src="/assets/icon/image 14.png"
                  alt="Instagram"
                  className="social-icon"
                />
              </button>
              <button
                type="button"
                className="social-btn"
                aria-label="LinkedIn"
              >
                <img
                  src="/assets/icon/image 15.png"
                  alt="LinkedIn"
                  className="social-icon"
                />
              </button>
              <button type="button" className="social-btn" aria-label="YouTube">
                <img
                  src="/assets/icon/image 16.png"
                  alt="YouTube"
                  className="social-icon"
                />
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-title">Aide et support</div>
          <div className="footer-links">
            © 2025 CovAct Tous droits réservés. |
            <a href="#privacy">Politique de Confidentialité</a> |
            <a href="#conditions">Conditions d'Utilisation</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Login;
