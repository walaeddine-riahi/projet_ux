import React from 'react'
import type { PageKey } from './TopBar'
import userAvatar from '../assets/user-avatar.png'

interface RideTrackingPageProps {
  onNavigate: (page: PageKey) => void
}

const RideTrackingPage: React.FC<RideTrackingPageProps> = ({ onNavigate }) => {
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

        <div className="space-y-5">
          <section className="bg-white border border-border-gray rounded-xl overflow-hidden">
            <div className="h-[210px] bg-cover bg-center" style={{ backgroundImage: "url('https://static.codia.ai/image/2025-12-04/sb2O8tq8jV.png')" }} />
          </section>

          <section className="bg-white border border-border-gray rounded-xl p-4">
            <p className="text-[12px] font-semibold text-gray-800 mb-3">Progression du Trajet</p>
            <div className="w-full h-3 rounded-full bg-light-gray overflow-hidden">
              <div className="h-full bg-primary-red" style={{ width: '70%' }} />
            </div>
            <p className="text-[11px] text-gray-600 mt-2">Arrivée estimée: 18:15</p>
          </section>

          <section className="bg-white border border-border-gray rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={userAvatar}
                alt="Asma Chaouach"
                className="w-12 h-12 rounded-full border border-primary-red/30"
              />
              <div>
                <p className="text-[13px] font-semibold text-black">Asma Chaouach</p>
                <p className="text-[11px] text-gray-500">Aujourd'hui 15:30</p>
                <p className="text-[11px] text-gray-500">★ 4.9 (126)</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-primary-red">
              <button className="w-9 h-9 rounded-full border border-primary-red flex items-center justify-center text-lg">
                ☎
              </button>
              <button className="w-9 h-9 rounded-full border border-primary-red flex items-center justify-center text-lg">
                ✉
              </button>
            </div>
          </section>

          <section className="bg-white border border-border-gray rounded-xl p-4">
            <h3 className="text-[13px] font-semibold mb-4 text-black">Détails de l’itinéraire</h3>
            <div className="flex items-start gap-4 text-[12px] text-gray-800">
              <div className="flex flex-col items-center pt-1">
                <span className="w-2 h-2 rounded-full bg-black" />
                <span className="h-6 border-l border-gray-400" />
                <span className="w-2 h-2 rounded-full bg-primary-red" />
                <span className="h-6 border-l border-gray-400" />
                <span className="w-2 h-2 rounded-full bg-gray-400" />
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">ESPRIT, Bloc G</p>
                    <p className="text-gray-600">Passé</p>
                  </div>
                  <span className="text-[12px] text-gray-800">17:15</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Autoroute Tunis</p>
                    <p className="text-gray-600">À Approché</p>
                  </div>
                  <span className="text-[12px] text-gray-800">17:30</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Mourouj, Tunis</p>
                    <p className="text-gray-600">À venir</p>
                  </div>
                  <span className="text-[12px] text-gray-800">18:05</span>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#FFECEC] border border-[#F2C2C2] rounded-xl p-4 text-[12px] text-gray-800">
            <div className="flex items-center gap-2 mb-2 text-primary-red">
              <span className="text-lg">⚠️</span>
              <p className="font-semibold text-black">Conseil de Sécurité</p>
            </div>
            <p className="text-gray-700">
              Partagez votre trajet en direct avec un membre de la famille pour plus de sécurité.
            </p>
          </section>

          <div className="flex flex-col md:flex-row gap-3">
            <button
              className="flex-1 bg-white border border-border-gray text-gray-800 rounded-md py-3 font-semibold"
              onClick={() => onNavigate('home')}
            >
              Retour
            </button>
            <button
              className="flex-1 bg-gray-900 text-white rounded-md py-3 font-semibold"
              onClick={() => onNavigate('dashboard')}
            >
              Terminer le Trajet
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RideTrackingPage

