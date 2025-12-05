import React from 'react'
import type { PageKey } from './TopBar'

interface SiteFooterProps {
  onNavigate: (page: PageKey) => void
}

const SiteFooter: React.FC<SiteFooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-[#E4D7D7] py-10 text-xs">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-3">Cov&apos;Act</h3>
          <p className="text-[11px] text-gray-600 leading-relaxed">
            Votre plateforme de covoiturage de confiance. Partagez vos trajets,
            économisez et contribuez à un avenir durable.
          </p>
          <div className="flex gap-3 mt-3 text-lg">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Liens Rapides</h3>
          <ul className="space-y-1 text-[11px] text-gray-700">
            <li>
              <button onClick={() => onNavigate('home')}>Accueil</button>
            </li>
            <li>Publier un Trajet</li>
            <li>Espace Conducteur</li>
            <li>
              <button onClick={() => onNavigate('wallet')}>Mon Portefeuille</button>
            </li>
            <li>
              <button onClick={() => onNavigate('dashboard')}>Tableau de Board</button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-1 text-[11px] text-gray-700">
            <li>FAQ</li>
            <li>Centre d&apos;Aide</li>
            <li>À Propos</li>
            <li>Conditions d&apos;Utilisation</li>
            <li>Politiques de Confidentialité</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-1 text-[11px] text-gray-700">
            <li>contact@covact.com</li>
            <li>+216 20 111 333</li>
            <li>20 el ghazela esprit</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter


