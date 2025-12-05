import { Link } from "react-router-dom";
import { ArrowLeft, Users, Shield, Leaf, Heart, Target, Award } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Home.css";
import "../styles/AboutPage.css";

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: "Communauté",
      description: "Nous croyons en la force de la communauté et en la connexion entre les personnes.",
    },
    {
      icon: Shield,
      title: "Sécurité",
      description: "La sécurité de nos utilisateurs est notre priorité absolue avec des vérifications rigoureuses.",
    },
    {
      icon: Leaf,
      title: "Écologie",
      description: "Réduire l'empreinte carbone en partageant les trajets pour un avenir plus vert.",
    },
    {
      icon: Heart,
      title: "Confiance",
      description: "Construire des relations de confiance entre conducteurs et passagers.",
    },
  ];

  const stats = [
    { value: "50K+", label: "Utilisateurs actifs" },
    { value: "200K+", label: "Trajets partagés" },
    { value: "4.4/5", label: "Note moyenne" },
    { value: "95%", label: "Taux de satisfaction" },
  ];

  return (
    <div className="about-page">
      <Header />
      
      <main className="about-main">
        <div className="about-container">
          {/* Bouton retour */}
          <div className="back-button-container">
            <Link to="/">
              <button className="back-button">
                <ArrowLeft className="back-icon" />
                Retour à l'accueil
              </button>
            </Link>
          </div>

          {/* Hero Section - Titre et description centrés */}
          <section className="hero-section">
            <h1 className="hero-title">À Propos de Cov'Act</h1>
            <p className="hero-description">
              Nous connectons les conducteurs et les passagers pour créer une communauté 
              de covoiturage basée sur la confiance, l'économie et le respect de l'environnement.
            </p>
          </section>

          {/* Stats Section */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-content">
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mission */}
          <div className="mission-card">
            <div className="mission-header">
              <div className="mission-icon-container">
                <Target className="mission-icon" />
              </div>
              <h2 className="mission-title">Notre Mission</h2>
            </div>
            <div className="mission-content">
              <p className="mission-text">
                Chez Cov'Act, nous croyons que le covoiturage est bien plus qu'un simple moyen de transport. 
                C'est une opportunité de créer des liens, de réduire notre impact environnemental et de 
                rendre les déplacements plus accessibles et économiques pour tous.
              </p>
              <p className="mission-text">
                Depuis notre création en 2020, nous avons aidé des dizaines de milliers de personnes à se déplacer 
                de manière plus intelligente, plus écologique et plus conviviale. Notre plateforme met l'accent sur 
                la sécurité, la simplicité et la confiance mutuelle.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="values-section">
            <h2 className="section-title">Nos Valeurs</h2>
            <div className="values-grid">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="value-card">
                    <div className="value-content">
                      <div className="value-icon-container">
                        <Icon className="value-icon" />
                      </div>
                      <div className="value-text">
                        <h3 className="value-title">{value.title}</h3>
                        <p className="value-description">{value.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Team */}
          <div className="team-card">
            <div className="team-header">
              <div className="team-icon-container">
                <Award className="team-icon" />
              </div>
              <h2 className="team-title">Notre Équipe</h2>
            </div>
            <div className="team-content">
              <p className="team-text">
                Cov'Act est porté par une équipe passionnée de développeurs, designers et experts en mobilité 
                qui partagent une vision commune : transformer la façon dont nous nous déplaçons.
              </p>
              <p className="team-text">
                Nous travaillons chaque jour pour améliorer notre plateforme, écouter nos utilisateurs et innover 
                pour offrir la meilleure expérience de covoiturage possible.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-section">
            <h2 className="cta-title">Rejoignez la Communauté</h2>
            <p className="cta-description">
              Des milliers de personnes utilisent déjà Cov'Act. Pourquoi pas vous?
            </p>
            <div className="cta-buttons">
              <Link to="/signup" className="cta-button primary">
                Créer un compte
              </Link>
              <Link to="/" className="cta-button secondary">
                Rechercher un trajet
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}