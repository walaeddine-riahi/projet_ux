import React, { useState } from 'react'
import UserAvatar from './UserAvatar'
import userAvatarImg from '../assets/user-avatar.png'

type TimeFilter = 'week' | 'month' | 'year'
type ReviewsFilter = 'recent' | 'recommended'

const DashboardPage: React.FC = () => {
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('week')
  const [reviewsFilter, setReviewsFilter] = useState<ReviewsFilter>('recent')

  const statsByTime: Record<TimeFilter, { label: string; value: string; icon: string }[]> =
    {
      week: [
        { label: 'Trajets effectués', value: '8', icon: '🚗' },
        { label: 'Passagers transportés', value: '24', icon: '🧍' },
        { label: 'Gains totaux', value: '485DT', icon: '💰' },
        { label: 'Kilomètres parcourus', value: '205Km', icon: '📍' },
      ],
      month: [
        { label: 'Trajets effectués', value: '32', icon: '🚗' },
        { label: 'Passagers transportés', value: '120', icon: '🧍' },
        { label: 'Gains totaux', value: '1480DT', icon: '💰' },
        { label: 'Kilomètres parcourus', value: '1209Km', icon: '📍' },
      ],
      year: [
        { label: 'Trajets effectués', value: '412', icon: '🚗' },
        { label: 'Passagers transportés', value: '2457', icon: '🧍' },
        { label: 'Gains totaux', value: '9245DT', icon: '💰' },
        { label: 'Kilomètres parcourus', value: '6325Km', icon: '📍' },
      ],
    }

  const performancesByTime: Record<TimeFilter, { label: string; value: number }[]> = {
    week: [
      { label: 'Taux de réponse', value: 92 },
      { label: "Taux d'annulation", value: 2 },
      { label: 'Ponctualité', value: 95 },
    ],
    month: [
      { label: 'Taux de réponse', value: 90 },
      { label: "Taux d'annulation", value: 3 },
      { label: 'Ponctualité', value: 93 },
    ],
    year: [
      { label: 'Taux de réponse', value: 88 },
      { label: "Taux d'annulation", value: 5 },
      { label: 'Ponctualité', value: 91 },
    ],
  }

  const stats = statsByTime[timeFilter]
  const performance = performancesByTime[timeFilter]

  return (
    <div className="bg-light-pink">
      <div className="max-w-5xl mx-auto px-6 pt-6 pb-16">
        {/* Back link */}
        <button className="flex items-center gap-3 text-sm text-primary-red mb-6">
          <span className="text-lg">←</span>
          <span>Retour au tableau de board</span>
        </button>

        {/* Header row */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl md:text-2xl font-bold mb-1">
              Tableau de Bord Conducteur
            </h1>
            <p className="text-xs text-gray-600">
              Gérez vos trajets et suivez vos performances
            </p>
          </div>
          <button className="bg-primary-red text-white text-xs px-4 py-2 rounded-sm shadow-custom">
            Publier un Trajet
          </button>
        </div>

        {/* Time filter tabs */}
        <div className="flex gap-2 mb-6 text-[10px]">
          <button
            className={
              timeFilter === 'week'
                ? 'px-3 py-1 rounded-full bg-primary-red text-white'
                : 'px-3 py-1 rounded-full bg-white text-gray-700 border border-border-gray'
            }
            onClick={() => setTimeFilter('week')}
          >
            Cette Semaine
          </button>
          <button
            className={
              timeFilter === 'month'
                ? 'px-3 py-1 rounded-full bg-primary-red text-white'
                : 'px-3 py-1 rounded-full bg-white text-gray-700 border border-border-gray'
            }
            onClick={() => setTimeFilter('month')}
          >
            Ce Mois
          </button>
          <button
            className={
              timeFilter === 'year'
                ? 'px-3 py-1 rounded-full bg-primary-red text-white'
                : 'px-3 py-1 rounded-full bg-white text-gray-700 border border-border-gray'
            }
            onClick={() => setTimeFilter('year')}
          >
            Cette Année
          </button>
        </div>

        {/* Stats cards (change with time filter) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-md border border-border-gray px-4 py-3 flex flex-col gap-1"
            >
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-md bg-light-pink flex items-center justify-center text-xs">
                  {item.icon}
                </div>
                <span className="text-xs text-primary-red">↗</span>
              </div>
              <p className="text-sm font-semibold">{item.value}</p>
              <p className="text-[10px] text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Upcoming trips */}
        <section className="bg-white rounded-md border border-border-gray mb-6">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border-gray/70">
            <h2 className="text-xs font-semibold">Trajets à Venir</h2>
            <button className="text-[10px] text-primary-red">Voir Tous</button>
          </div>

          <div className="divide-y divide-border-gray/50 text-[11px]">
            {[
              { from: 'ESPRIT', to: 'Mourouj', price: '15DT' },
              { from: 'ESPRIT', to: 'Manouba', price: '15DT' },
            ].map((t, idx) => (
              <div key={idx} className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-light-pink flex items-center justify-center text-xs">
                    🚗
                  </div>
                  <div>
                    <p className="font-semibold">
                      {t.from} — {t.to}
                    </p>
                    <p className="text-[10px] text-gray-500">15 juin 2025 • 16:30 • 3/3 sièges</p>
                  </div>
                </div>
                <span className="text-primary-red font-semibold text-xs">{t.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Last reviews / recommendations */}
        <section className="bg-white rounded-md border border-border-gray mb-6">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border-gray/70">
            <div className="flex gap-2 text-[10px]">
              <button
                className={
                  reviewsFilter === 'recent'
                    ? 'px-3 py-1 rounded-full bg-primary-red text-white'
                    : 'px-3 py-1 rounded-full bg-white text-gray-700 border border-border-gray'
                }
                onClick={() => setReviewsFilter('recent')}
              >
                Avis récents
              </button>
              <button
                className={
                  reviewsFilter === 'recommended'
                    ? 'px-3 py-1 rounded-full bg-primary-red text-white'
                    : 'px-3 py-1 rounded-full bg-white text-gray-700 border border-border-gray'
                }
                onClick={() => setReviewsFilter('recommended')}
              >
                Recommandés
              </button>
            </div>
            <button className="text-[10px] text-primary-red">Voir Tous</button>
          </div>

          {reviewsFilter === 'recent' ? (
            <div className="divide-y divide-border-gray/50 text-[11px]">
              {[
                {
                  name: 'Rania Moalla',
                  text: 'Excellent conducteur, très ponctuel et agréable!',
                  time: 'Il y a 2 jours',
                },
                {
                  name: 'Samar Ayari',
                  text: 'Son trajet, conduite sûre.',
                  time: 'Il y a 2 jours',
                },
              ].map((r, idx) => (
                <div key={idx} className="px-4 py-3 flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <UserAvatar name={r.name} size="md" src={userAvatarImg} />
                    <div>
                      <p className="font-semibold">{r.name}</p>
                      <p className="text-[10px] text-gray-500">{r.time}</p>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-700">{r.text}</p>
                  <div className="flex gap-1 text-yellow-400 text-xs">★★★★★</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-4 py-3 text-[11px]">
              {[
                {
                  title: 'Super Conducteur',
                  text: 'Vous avez maintenu une note de 5★ sur vos 20 derniers trajets.',
                },
                {
                  title: 'Favori',
                  text: 'Plusieurs passagers vous ont ajouté à leurs conducteurs favoris.',
                },
                {
                  title: 'Propreté',
                  text: 'Vos passagers apprécient la propreté de votre véhicule.',
                },
                {
                  title: 'Ponctualité',
                  text: 'Vous arrivez à l’heure sur 98% de vos trajets.',
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-md border border-border-gray bg-light-pink px-3 py-3 flex flex-col gap-1"
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-semibold">{card.title}</p>
                    <span>🏅</span>
                  </div>
                  <p className="text-[10px] text-gray-700">{card.text}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Performance section (values change with time filter) */}
        <section className="bg-white rounded-md border border-border-gray p-4 text-[11px]">
          <h2 className="text-xs font-semibold mb-4">Performances</h2>

          {performance.map((p) => (
            <div key={p.label} className="mb-3 last:mb-0">
              <div className="flex items-center justify-between mb-1">
                <span>{p.label}</span>
                <span className="font-semibold">{p.value}%</span>
              </div>
              <div className="h-2 rounded-full bg-light-pink overflow-hidden">
                <div
                  className="h-full bg-primary-red"
                  style={{ width: `${p.value}%` }}
                />
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default DashboardPage


