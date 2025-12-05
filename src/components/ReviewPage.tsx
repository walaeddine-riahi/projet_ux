import React, { useState } from 'react'
import type { PageKey } from './TopBar'

interface ReviewPageProps {
  onNavigate: (page: PageKey) => void
}

const ReviewPage: React.FC<ReviewPageProps> = ({ onNavigate }) => {
  const [rating, setRating] = useState<number>(0)
  const [selectedAspects, setSelectedAspects] = useState<string[]>([])
  const [comments, setComments] = useState('')

  const aspects = [
    'Agréable',
    'Véhicule Propre',
    'Conduite Sûre',
    "À l'heure",
    'Bonne Musique',
    'Calme',
  ]

  const toggleAspect = (aspect: string) => {
    setSelectedAspects((prev) =>
      prev.includes(aspect) ? prev.filter((a) => a !== aspect) : [...prev, aspect]
    )
  }

  const handleSubmit = () => {
    // Handle review submission
    console.log({ rating, selectedAspects, comments })
    onNavigate('home')
  }

  return (
    <div className="bg-light-pink">
      <div className="max-w-4xl mx-auto px-6 pt-6 pb-16">
        {/* Back link */}
        <button
          className="flex items-center gap-3 text-sm text-primary-red mb-6"
          onClick={() => onNavigate('home')}
        >
          <span className="text-lg">←</span>
          <span>Retour aux Trajets</span>
        </button>

        {/* Main review form */}
        <div className="bg-white rounded-xl border border-border-gray p-6 md:p-8 shadow-light">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-6">
            Évaluez votre Trajet
          </h1>

          {/* Ride details box */}
          <div className="bg-gray-100 rounded-lg p-4 mb-6 flex items-center gap-4">
            <img
              src="https://static.codia.ai/image/2025-12-04/TrEQbpBBmp.png"
              alt="Salma Jouini"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <p className="font-semibold text-sm mb-1">Salma Jouini</p>
              <p className="text-xs text-gray-600">ESPRIT—Mourouj</p>
              <p className="text-xs text-gray-500">16 Novembre 2024 • 14:30 - 19:15 • SOT</p>
            </div>
          </div>

          {/* Overall rating */}
          <div className="mb-8">
            <p className="text-sm font-semibold text-black mb-3">
              Comment était votre expérience?
            </p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="focus:outline-none"
                >
                  <svg
                    className={`w-8 h-8 ${
                      star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Specific aspects */}
          <div className="mb-8">
            <p className="text-sm font-semibold text-black mb-3">
              Comment était votre expérience?
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {aspects.map((aspect) => (
                <button
                  key={aspect}
                  type="button"
                  onClick={() => toggleAspect(aspect)}
                  className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
                    selectedAspects.includes(aspect)
                      ? 'bg-primary-red text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {aspect}
                </button>
              ))}
            </div>
          </div>

          {/* Additional comments */}
          <div className="mb-8">
            <p className="text-sm font-semibold text-black mb-3">
              Remarques Supplémentaires (optionnel)
            </p>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Partagez vos commentaires avec le conducteur..."
              className="w-full h-32 px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-50 text-sm resize-none focus:outline-none focus:border-primary-red"
            />
          </div>

          {/* Action buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="flex-1 bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Plus Tard
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="flex-1 bg-primary-red text-white font-semibold py-3 rounded-lg shadow-light hover:bg-red-700 transition-colors"
            >
              Envoyer l&apos;Avis
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewPage

