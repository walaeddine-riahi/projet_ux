import React from 'react'
import type { PageKey } from './TopBar'
import userAvatar from '../assets/user-avatar.png'

interface DriverProfilePageProps {
  onNavigate: (page: PageKey) => void
}

const DriverProfilePage: React.FC<DriverProfilePageProps> = ({ onNavigate }) => {
  const rides = [
    {
      name: 'Asma Chaouach',
      time: "Aujourd'hui 15:30",
      from: 'Esprit, Tunis',
      to: 'Mourouj, Tunis',
      price: '5DT',
      seats: '2 sièges',
    },
    {
      name: 'Roue Khemiri',
      time: "Aujourd'hui 15:30",
      from: 'Esprit, Tunis',
      to: 'Ariana, Tunis',
      price: '4DT',
      seats: '2 sièges',
    },
  ]

  return (
    <div className="bg-light-pink">
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-16">
        <button
          className="flex items-center gap-2 text-sm text-primary-red mb-6"
          onClick={() => onNavigate('home')}
        >
          <span className="text-lg">←</span>
          <span>Retour aux Trajets</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-[250px_minmax(0,1fr)] gap-6">
          {/* Sidebar */}
          <aside className="bg-white border border-border-gray rounded-xl p-5 flex flex-col gap-5">
            <div className="flex flex-col items-center text-center gap-2">
              <img
                src={userAvatar}
                alt="Salma Jouini"
                className="w-16 h-16 rounded-full border border-primary-red/30"
              />
              <p className="text-sm font-semibold text-black">Salma Jouini</p>
              <p className="text-[12px] text-gray-600">Membre depuis Mars 2023</p>
            </div>

            <div className="space-y-3 text-[12px] text-gray-800">
              <div className="flex items-center gap-2">
                <span>🚗</span>
                <div>
                  <p className="font-semibold text-black">156 trajets complétés</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span>✅</span>
                <p className="font-semibold text-black">Membre Vérifié</p>
              </div>
            </div>

            <div className="h-px bg-border-gray" />

            <nav className="flex flex-col text-sm">
              {[
                { label: 'Modifier le profil', active: true },
                { label: 'Paramètres', active: false },
                { label: 'Notifications', active: false },
              ].map((item) => (
                <button
                  key={item.label}
                  className={
                    item.active
                      ? 'w-full text-left px-3 py-2 rounded-md bg-primary-red text-white mb-2'
                      : 'w-full text-left px-3 py-2 rounded-md text-black hover:bg-light-gray mb-2'
                  }
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <section className="space-y-4">
            <h1 className="text-lg font-bold text-black">Trajets à Venir</h1>

            {rides.map((ride, idx) => (
              <div
                key={ride.name + idx}
                className="bg-white rounded-xl border border-border-gray shadow-[0_2px_6px_rgba(0,0,0,0.03)] p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={userAvatar}
                      alt={ride.name}
                      className="w-10 h-10 rounded-full border border-primary-red/30"
                    />
                    <div>
                      <p className="text-sm font-semibold text-black">{ride.name}</p>
                      <p className="text-[12px] text-gray-500">{ride.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-primary-red">{ride.price}</p>
                    <p className="text-[11px] text-gray-500">{ride.seats}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-[13px] text-gray-800 mb-3">
                  <span className="text-primary-red">•</span>
                  <span>{ride.from}</span>
                </div>
                <div className="flex items-center gap-3 text-[13px] text-gray-800 mb-4">
                  <span className="text-primary-red">•</span>
                  <span>{ride.to}</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    className="flex-1 text-[12px] border border-border-gray rounded-md py-2 font-semibold text-gray-800"
                    onClick={() => onNavigate('rideDetails')}
                  >
                    Voir les Détails
                  </button>
                  <button className="flex-1 text-[12px] bg-primary-red text-white rounded-md py-2 font-semibold">
                    Message au Conducteur
                  </button>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  )
}

export default DriverProfilePage

