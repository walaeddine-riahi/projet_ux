import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, ArrowLeft, Search, HelpCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/FAQPage.css";

const faqs = [
  {
    category: "Général",
    questions: [
      {
        q: "Comment fonctionne Cov'Act?",
        a: "Cov'Act met en relation des conducteurs ayant des places libres dans leur véhicule avec des passagers recherchant un trajet sur le même itinéraire. Les conducteurs publient leurs trajets avec les détails (destination, horaire, prix), et les passagers peuvent réserver une place.",
      },
      {
        q: "Cov'Act est-il sûr?",
        a: "Oui, la sécurité est notre priorité. Nous vérifions l'identité de tous les utilisateurs, affichons les notes et avis, et offrons un système de messagerie sécurisé. Nous recommandons toujours de rencontrer dans des lieux publics et de partager vos détails de trajet avec un proche.",
      },
      {
        q: "Puis-je annuler un trajet?",
        a: "Oui, vous pouvez annuler un trajet jusqu'à 24 heures avant le départ pour un remboursement complet. Les annulations tardives peuvent entraîner des frais selon notre politique d'annulation.",
      },
    ],
  },
  {
    category: "Conducteurs",
    questions: [
      {
        q: "Comment publier un trajet?",
        a: "Connectez-vous à votre compte, cliquez sur 'Publier un Trajet', renseignez les détails (départ, arrivée, date, nombre de places, prix), et publiez. Votre trajet sera visible pour tous les passagers recherchant cet itinéraire.",
      },
      {
        q: "Combien puis-je gagner en tant que conducteur?",
        a: "Vos gains dépendent du prix que vous fixez par passager. En moyenne, les conducteurs gagnent entre 500€ et 1500€ par mois en partageant leurs trajets réguliers. Gardez à l'esprit que le covoiturage vise à partager les frais, pas à générer un profit.",
      },
      {
        q: "Quels documents dois-je avoir?",
        a: "Vous devez posséder un permis de conduire valide, une assurance automobile en cours de validité, et un véhicule en bon état. Nous vous recommandons d'informer votre assureur que vous pratiquez le covoiturage.",
      },
    ],
  },
  {
    category: "Passagers",
    questions: [
      {
        q: "Comment réserver un trajet?",
        a: "Recherchez votre trajet en entrant votre point de départ et destination. Parcourez les offres disponibles, sélectionnez celle qui vous convient, choisissez le nombre de places et confirmez la réservation avec le paiement.",
      },
      {
        q: "Comment payer mon trajet?",
        a: "Les paiements s'effectuent en ligne via notre plateforme sécurisée. Nous acceptons les cartes bancaires et autres moyens de paiement. Le montant est prélevé lors de la réservation et versé au conducteur après le trajet.",
      },
      {
        q: "Que faire si le conducteur ne se présente pas?",
        a: "Contactez immédiatement le conducteur via notre messagerie. Si vous ne recevez pas de réponse dans les 15 minutes après l'heure prévue, contactez notre support. Vous serez entièrement remboursé.",
      },
    ],
  },
  {
    category: "Paiements",
    questions: [
      {
        q: "Quand suis-je payé en tant que conducteur?",
        a: "Les paiements sont traités 24 heures après la fin du trajet. L'argent est d'abord ajouté à votre portefeuille Cov'Act, puis vous pouvez le retirer vers votre compte bancaire à tout moment.",
      },
      {
        q: "Y a-t-il des frais de service?",
        a: "Oui, Cov'Act prélève une commission de 12% sur chaque réservation pour couvrir les frais de plateforme, paiement sécurisé, et support client. Cette commission est déduite automatiquement du prix du trajet.",
      },
      {
        q: "Comment obtenir un remboursement?",
        a: "Si vous annulez plus de 24 heures avant le départ, vous serez remboursé intégralement. Pour les annulations tardives ou en cas de problème avec le conducteur, contactez notre support qui étudiera votre cas individuellement.",
      },
    ],
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredFaqs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.a.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <div className="faq-page">
      <Header />
      
      <main className="faq-main">
        <div className="faq-container">
          {/* Bouton retour */}
          <div className="back-button-container">
            <Link to="/">
              <button className="back-button">
                <ArrowLeft className="back-icon" />
                Retour à l'accueil
              </button>
            </Link>
          </div>

          {/* Titre et description */}
          <div className="faq-header">
            <div className="faq-title-container">
              <HelpCircle className="faq-title-icon" />
              <h1 className="faq-title">Questions Fréquentes</h1>
            </div>
            <p className="faq-subtitle">
              Trouvez rapidement des réponses à vos questions
            </p>
          </div>

          {/* Barre de recherche */}
          <div className="search-container">
            <div className="search-wrapper">
              <Search className="search-icon" />
              <input
                placeholder="Rechercher une question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          {/* FAQ Sections */}
          <div className="faq-sections">
            {filteredFaqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="faq-category">
                <h2 className="category-title">
                  {category.category}
                </h2>
                <div className="questions-list">
                  {category.questions.map((item, questionIndex) => {
                    const key = `${categoryIndex}-${questionIndex}`;
                    const isOpen = openItems[key];

                    return (
                      <div
                        key={questionIndex}
                        className={`faq-item ${isOpen ? 'open' : ''}`}
                      >
                        <button
                          onClick={() => toggleItem(categoryIndex, questionIndex)}
                          className="faq-question-button"
                        >
                          <p className="faq-question">
                            {item.q}
                          </p>
                          <div className="faq-toggle-icon">
                            {isOpen ? (
                              <ChevronUp />
                            ) : (
                              <ChevronDown />
                            )}
                          </div>
                        </button>
                        
                        {isOpen && (
                          <div className="faq-answer">
                            <p>{item.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Aucun résultat */}
            {filteredFaqs.length === 0 && (
              <div className="no-results">
                <HelpCircle className="no-results-icon" />
                <p className="no-results-text">
                  Aucune question trouvée pour "{searchQuery}"
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="reset-search-button"
                >
                  Réinitialiser la recherche
                </button>
              </div>
            )}
          </div>

          {/* Section contact support */}
          <div className="contact-support">
            <div className="contact-content">
              <h3 className="contact-title">
                Vous ne trouvez pas votre réponse?
              </h3>
              <p className="contact-subtitle">
                Notre équipe de support est là pour vous aider
              </p>
              <Link to="/support">
                <button className="contact-button">
                  Contacter le Support
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}