import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "../styles/Home.css";
import "../styles/PublishRidePage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PublishRidePage() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    departure: "",
    seats: "1",
    price: "",
    car: "",
    notes: "",
  });

  const [published, setPublished] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/rides", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          driverId: "driver-001",
          driver: "Your Name",
          rating: 5.0,
          reviews: 0,
          image: "/placeholder.svg?key=your-profile",
        }),
      });
      if (response.ok) {
        setPublished(true);
        setTimeout(() => {
          setPublished(false);
          setFormData({
            from: "",
            to: "",
            date: "",
            departure: "",
            seats: "1",
            price: "",
            car: "",
            notes: "",
          });
        }, 2000);
      }
    } catch (error) {
      console.error("Failed to publish ride:", error);
    }
  };

  return (
    <div className="publish-page">
      <Header />
      
      <main className="publish-main">
        <div className="publish-container">
          {/* Bouton retour à l'accueil - AJOUTÉ */}
          <div className="back-container">
            <Link to="/" className="back-button">
              <ArrowLeft className="back-icon" />
              Retour à l'accueil
            </Link>
          </div>

          <div className="publish-card">
            <h1 className="publish-title">Publier un Trajet</h1>

            <form onSubmit={handlePublish} className="publish-form">
              <div className="form-group">
                <label className="form-label">Ville de départ :</label>
                <input
                  type="text"
                  name="from"
                  value={formData.from}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Ex: Paris"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Ville de destination :</label>
                <input
                  type="text"
                  name="to"
                  value={formData.to}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Ex: Lyon"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Date :</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Heure de départ :</label>
                <input
                  type="time"
                  name="departure"
                  value={formData.departure}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Places disponibles :</label>
                <select
                  name="seats"
                  value={formData.seats}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5+</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Prix par siège :</label>
                <div className="price-input-container">
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    min="1"
                    className="form-input price-input"
                    placeholder="0"
                  />
                  <span className="currency">DT</span>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Voiture :</label>
                <input
                  type="text"
                  name="car"
                  value={formData.car}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Ex: Renault Clio, Audi A3..."
                />
              </div>

              <div className="form-group">
                <label className="form-label">Notes supplémentaires :</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Informations supplémentaires pour les passagers..."
                  rows="4"
                />
              </div>

              {published && (
                <p className="success-message">Trajet publié avec succès !</p>
              )}

              {/* Boutons Annuler / Publier */}
              <div className="form-buttons">
                <Link to="/" className="cancel-link">
                  <button type="button" className="cancel-button">
                    Annuler
                  </button>
                </Link>

                <button type="submit" className="publish-button">
                  Publier le trajet
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}