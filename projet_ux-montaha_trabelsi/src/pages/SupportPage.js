import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MessageCircle, Clock, CheckCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Home.css";
import "../styles/SupportPage.css";

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Support form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  if (submitted) {
    return (
      <div className="support-page">
        <Header />
        <div className="success-container">
          <div className="success-card">
            <div className="success-icon-wrapper">
              <CheckCircle className="success-icon" />
            </div>
            <h2 className="success-title">Message Envoyé!</h2>
            <p className="success-message">
              Merci de nous avoir contactés. Notre équipe vous répondra dans les 24 heures.
            </p>
            <div className="success-buttons">
              <Link to="/">
                <button className="success-home-button">
                  Retour à l'accueil
                </button>
              </Link>
              <Link to="/faq">
                <button className="success-faq-button">
                  Consulter la FAQ
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="support-page">
      <Header />
      
      <main className="support-main">
        <div className="support-container">
          {/* Bouton retour */}
          <div className="back-container">
            <Link to="/" className="back-button">
              <ArrowLeft className="back-icon" />
              Retour à l'accueil
            </Link>
          </div>

          {/* Titre */}
          <div className="support-header">
            <h1 className="support-title">Centre de Support</h1>
            <p className="support-subtitle">Notre équipe est là pour vous aider</p>
          </div>

          {/* Cartes de contact */}
          <div className="contact-cards-grid">
            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <Mail className="contact-icon" />
              </div>
              <h3 className="contact-card-title">Email</h3>
              <p className="contact-detail">support@covact.com</p>
              <p className="contact-note">Réponse sous 24h</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <Phone className="contact-icon" />
              </div>
              <h3 className="contact-card-title">Téléphone</h3>
              <p className="contact-detail">+216 20 111 333</p>
              <p className="contact-note">Lun-Ven 9h-18h</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <MessageCircle className="contact-icon" />
              </div>
              <h3 className="contact-card-title">Chat en Direct</h3>
              <p className="contact-detail">Assistance instantanée</p>
              <p className="contact-note">Disponible 24/7</p>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="main-content-grid">
            {/* Formulaire */}
            <div className="form-section">
              <div className="form-card">
                <h2 className="form-title">Envoyez-nous un Message</h2>
                <form onSubmit={handleSubmit} className="support-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Nom Complet</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Jean Dupont"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jean.dupont@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="category" className="form-label">Catégorie</label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="form-select"
                    >
                      <option value="">Sélectionnez une catégorie</option>
                      <option value="booking">Problème de réservation</option>
                      <option value="payment">Question de paiement</option>
                      <option value="account">Compte utilisateur</option>
                      <option value="safety">Sécurité et confiance</option>
                      <option value="technical">Problème technique</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Sujet</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Décrivez brièvement votre problème"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Décrivez votre problème en détail..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-textarea"
                    />
                  </div>

                  <button type="submit" className="submit-button">
                    Envoyer le Message
                  </button>
                </form>
              </div>
            </div>

            {/* Informations supplémentaires */}
            <div className="info-section">
              {/* Heures d'ouverture */}
              <div className="info-card">
                <h3 className="info-card-title">
                  <Clock className="info-icon" />
                  Heures d'Ouverture
                </h3>
                <div className="info-content">
                  <div className="info-item">
                    <p className="info-item-title">Support Email & Chat</p>
                    <p className="info-item-detail">Disponible 24h/24, 7j/7</p>
                  </div>
                  <div className="info-item">
                    <p className="info-item-title">Support Téléphonique</p>
                    <p className="info-item-detail">
                      Lun-Ven: 9h00 - 18h00<br />
                      Sam: 10h00 - 16h00<br />
                      Dim: Fermé
                    </p>
                  </div>
                </div>
              </div>

              {/* Ressources utiles */}
              <div className="info-card">
                <h3 className="info-card-title">Ressources Utiles</h3>
                <div className="resources-links">
                  <Link to="/faq" className="resource-link">
                    Questions Fréquentes
                  </Link>
                  <Link to="/terms" className="resource-link">
                    Conditions d'Utilisation
                  </Link>
                  <Link to="/privacy" className="resource-link">
                    Politique de Confidentialité
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}