import React from 'react'
import type { PageKey } from './TopBar'
import userAvatar from '../assets/user-avatar.png'

interface RideDetailsPageProps {
  onNavigate: (page: PageKey) => void
}

const RideDetailsPage: React.FC<RideDetailsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-light-pink">
      <div className="max-w-5xl mx-auto px-6 pt-6 pb-16">
        <button
          className="flex items-center gap-2 text-[13px] text-primary-red mb-6"
          onClick={() => onNavigate('home')}
        >
          <span className="text-lg">←</span>
          <span>Retour aux Trajets</span>
        </button>

        <div className="flex flex-col md:flex-row gap-5 md:gap-8">
          {/* Left column: driver + details */}
          <section className="flex-1 space-y-4">
            <div className="bg-white border border-border-gray rounded-xl p-5">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={userAvatar}
                  alt="Salma Jouini"
                  className="w-12 h-12 rounded-full border border-primary-red/30"
                />
                <div>
                  <p className="text-[13px] font-semibold">Salma Jouini</p>
                  <div className="flex items-center gap-2 text-[12px] text-gray-700">
                    <span className="text-primary-red">★ 4.9</span>
                    <span className="text-gray-500">(126)</span>
                  </div>
                  <p className="text-[12px] text-gray-700 mt-1 leading-5">
                    Conductrice sympathique et propre. J’aime rencontrer de nouvelles personnes lors de mes trajets quotidiens.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[12px] text-gray-800">
                <div>
                  <p className="text-gray-500 mb-1">Modèle</p>
                  <p className="font-semibold">Audi RS e-tron GT · Blanc</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Temps de Réponse</p>
                  <p className="font-semibold">Répond dans 12 minutes</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Langue</p>
                  <p className="font-semibold">Français, Anglais, Arabe</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Paiement</p>
                  <p className="font-semibold">Carte, Espèces</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-border-gray rounded-xl p-5">
              <h3 className="text-[15px] font-semibold mb-4">Détails de l’itinéraire</h3>

              <div className="flex items-start gap-4 text-[12px] text-gray-800">
                <div className="flex flex-col items-center pt-1">
                  <span className="w-2 h-2 rounded-full bg-black" />
                  <span className="h-6 border-l border-gray-400" />
                  <span className="w-2 h-2 rounded-full bg-primary-red" />
                  <span className="h-6 border-l border-gray-400" />
                  <span className="w-2 h-2 rounded-full bg-gray-400" />
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">ESPRIT, Bloc G</p>
                    <p className="text-gray-600">17:15</p>
                  </div>
                  <div>
                    <p className="font-semibold">Autoroute Tunis</p>
                    <p className="text-gray-600">17:30</p>
                  </div>
                  <div>
                    <p className="font-semibold">Mourouj, Tunis</p>
                    <p className="text-gray-600">18:05</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Right column: fare card */}
          <aside className="w-full md:w-64">
            <div className="bg-white border border-border-gray rounded-xl p-5 text-[12px] text-gray-800">
              <div className="flex justify-between mb-2">
                <span>Aujourd'hui, 18 Novembre</span>
                <span className="text-primary-red font-semibold">5DT</span>
              </div>
              <p className="text-gray-500 mb-4">par personne</p>

              <div className="mb-3">
                <p className="text-[11px] text-gray-600 mb-1">Nombre de Passagers</p>
                <div className="flex items-center gap-4">
                  <button className="w-7 h-7 rounded-full border border-gray-300 text-sm">-</button>
                  <span className="text-lg font-semibold">1</span>
                  <button className="w-7 h-7 rounded-full border border-gray-300 text-sm">+</button>
                </div>
                <p className="text-[11px] text-gray-500 mt-2">2 sièges restants</p>
              </div>

              <div className="space-y-2 py-3 border-t border-b border-border-gray">
                <div className="flex justify-between">
                  <span>Tarif du trajet</span>
                  <span className="font-semibold text-primary-red">5DT</span>
                </div>
                <div className="flex justify-between">
                  <span>Frais de service</span>
                  <span className="font-semibold text-primary-red">0DT</span>
                </div>
                <div className="flex justify-between text-[13px] pt-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold text-primary-red">5DT</span>
                </div>
              </div>

              <button
                className="w-full bg-primary-red text-white rounded-[10px] py-3 text-[12px] font-semibold mt-3"
              >
                Réserver un Trajet
              </button>
              <p className="text-[10px] text-gray-500 text-center mt-2">
                Nous ne serons facturé qu'après la réservation
              </p>
            </div>
          </aside>
        </div>

        <section className="bg-[#F8EAD6] border border-[#E3D2B5] rounded-xl p-5 mt-6 text-[12px] text-gray-800">
          <div className="flex items-start gap-2 mb-2">
            <span className="text-lg">⚠️</span>
            <p className="font-semibold">Conseils de Sécurité</p>
          </div>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Rencontrez le conducteur à l'endroit indiqué</li>
            <li>Vérifiez la plaque d'immatriculation avant de monter</li>
            <li>Partagez les détails de votre trajet avec un ami de confiance</li>
            <li>Écoutez votre intuition et annulez si vous ne vous sentez pas à l'aise</li>
          </ul>
        </section>

        <div className="flex flex-col md:flex-row gap-3 mt-5">
          <button
            className="flex-1 bg-white border border-border-gray text-gray-800 rounded-md py-3 font-semibold"
            onClick={() => onNavigate('home')}
          >
            Retour
          </button>
          <button
            className="flex-1 bg-primary-red text-white rounded-md py-3 font-semibold shadow-light"
            onClick={() => onNavigate('rideTracking')}
          >
            Suivre le Trajet
          </button>
        </div>
      </div>
    </div>
  )
}

export default RideDetailsPage

