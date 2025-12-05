import React, { useState } from 'react'
import type { PageKey } from './TopBar'
import notificationLogo from '../assets/notification-logo.svg'

type NotificationTab = 'all' | 'unread' | 'settings'

interface NotificationsPageProps {
  onNavigate: (page: PageKey) => void
}

const NotificationsPage: React.FC<NotificationsPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<NotificationTab>('all')

  const renderAllNotifications = () => (
    <div className="space-y-3 text-[11px]">
      {/* New message */}
      <div className="bg-white rounded-md border border-border-gray px-4 py-3 flex gap-3">
        <div className="w-9 h-9 rounded-md bg-light-pink flex items-center justify-center text-xs">
          ✉️
        </div>
        <div className="flex-1">
          <p className="font-semibold mb-1">Nouveau message</p>
          <p className="text-gray-700">
            Amani Amouri vous a envoyé un message
          </p>
          <p className="text-[10px] text-gray-500 mt-1">Il y a 5 min</p>
        </div>
      </div>

      {/* New reservation */}
      <div className="bg-[#FFD9CC] rounded-md border border-border-gray px-4 py-3 flex gap-3 relative">
        <div className="w-9 h-9 rounded-md bg-white flex items-center justify-center text-xs">
          📅
        </div>
        <div className="flex-1">
          <p className="font-semibold mb-1">Nouvelle Réservation</p>
          <p className="text-gray-700">
            Malek Younes a reservé votre trajet Tunis - ESPRIT
          </p>
          <p className="text-[10px] text-gray-500 mt-1">Il y a 1 min</p>
        </div>
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-700">
          •
        </span>
      </div>

      {/* New review */}
      <div className="bg-white rounded-md border border-border-gray px-4 py-3 flex gap-3">
        <div className="w-9 h-9 rounded-md bg-light-pink flex items-center justify-center text-xs">
          ★
        </div>
        <div className="flex-1">
          <p className="font-semibold mb-1">Nouvel Avis reçu</p>
          <p className="text-gray-700">Souhail Helei a laissé 5 étoiles</p>
          <p className="text-[10px] text-gray-500 mt-1">Il y a 2 heures</p>
        </div>
      </div>

      {/* Payment received */}
      <div className="bg-white rounded-md border border-border-gray px-4 py-3 flex gap-3">
        <div className="w-9 h-9 rounded-md bg-light-pink flex items-center justify-center text-xs">
          DT
        </div>
        <div className="flex-1">
          <p className="font-semibold mb-1">Paiement reçu</p>
          <p className="text-gray-700">100DT ajouté à votre portefeuille</p>
          <p className="text-[10px] text-gray-500 mt-1">Il y a 5 heures</p>
        </div>
      </div>

      {/* Trip reminder */}
      <div className="bg-white rounded-md border border-border-gray px-4 py-3 flex gap-3">
        <div className="w-9 h-9 rounded-md bg-light-pink flex items-center justify-center text-xs">
          ⏰
        </div>
        <div className="flex-1">
          <p className="font-semibold mb-1">Rappel de trajet</p>
          <p className="text-gray-700">
            Votre prochain trajet commence dans 2 heures
          </p>
          <p className="text-[10px] text-gray-500 mt-1">Il y a 7 heures</p>
        </div>
      </div>
    </div>
  )

  const renderUnread = () => (
    <div className="space-y-3 text-[11px]">
      <div className="bg-[#FFD9CC] rounded-md border border-border-gray px-4 py-3 flex gap-3 relative">
        <div className="w-9 h-9 rounded-md bg-white flex items-center justify-center text-xs">
          📅
        </div>
        <div className="flex-1">
          <p className="font-semibold mb-1">Nouvelle Réservation</p>
          <p className="text-gray-700">
            Malek Younes a reservé votre trajet Tunis - ESPRIT
          </p>
          <p className="text-[10px] text-gray-500 mt-1">Il y a 1 min</p>
        </div>
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-700">
          •
        </span>
      </div>
    </div>
  )

  const renderSettings = () => (
    <div className="mt-2 flex justify-center text-[11px]">
      <div className="w-full max-w-md bg-white rounded-md border border-border-gray px-5 py-4 space-y-4">
        <h2 className="font-semibold mb-2">Préférences de notifications</h2>

        {[
          {
            title: 'Notifications par mail',
            text: 'Recevoir des notifications pour les nouvelles réservations et messages.',
            enabled: true,
          },
          {
            title: 'Notifications push',
            text: 'Recevoir des alertes en temps réel sur votre appareil.',
            enabled: true,
          },
          {
            title: 'Notifications SMS',
            text: 'Être notifié(e) par SMS pour les trajets importants.',
            enabled: false,
          },
        ].map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between gap-4 border-b border-border-gray/60 last:border-b-0 pb-3 last:pb-0"
          >
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-[10px] text-gray-600">{item.text}</p>
            </div>
            <div
              className={`w-9 h-5 rounded-full flex items-center px-1 ${
                item.enabled ? 'bg-primary-red justify-end' : 'bg-gray-300 justify-start'
              }`}
            >
              <div className="w-3.5 h-3.5 rounded-full bg-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderContent = () => {
    if (activeTab === 'unread') return renderUnread()
    if (activeTab === 'settings') return renderSettings()
    return renderAllNotifications()
  }

  return (
    <div className="bg-light-pink">
      <div className="max-w-5xl mx-auto px-6 pt-6 pb-16">
        {/* Back link -> driver dashboard */}
        <button
          className="flex items-center gap-3 text-sm text-primary-red mb-6"
          onClick={() => onNavigate('dashboard')}
        >
          <span className="text-lg">←</span>
          <span>Retour au tableau de board</span>
        </button>

        {/* Header row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-black flex items-center justify-center bg-white">
              <img src={notificationLogo} alt="Notifications" className="w-6 h-6" />
            </div>
            <h1 className="text-xl md:text-2xl font-bold">Notifications</h1>
            <button className="ml-3 px-3 py-1 rounded-full bg-primary-red text-white text-[11px]">
              1 nouveau
            </button>
          </div>
          <button className="text-[11px] text-gray-500">
            Tout marquer comme lu
          </button>
        </div>

        {/* Tabs under title - only 3 filters */}
        <div className="inline-flex items-center bg-[#E4D7D7] rounded-full p-1 mb-5 text-[11px]">
          {[
            { id: 'all', label: 'Toutes (5)' },
            { id: 'unread', label: 'Non lues (02)' },
            { id: 'settings', label: 'Paramètres' },
          ].map((tab) => (
            <button
              key={tab.id}
              className={
                activeTab === tab.id
                  ? 'px-4 py-1 rounded-full bg-white text-gray-900 shadow-light'
                  : 'px-4 py-1 rounded-full text-gray-700'
              }
              onClick={() => setActiveTab(tab.id as NotificationTab)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {renderContent()}
      </div>
    </div>
  )
}

export default NotificationsPage


