import React from 'react'
import walletLogo from '../assets/wallet-logo.svg'

const WalletPage: React.FC = () => {
  return (
    <div className="bg-[#FFF4F4]">
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-16">
        {/* Back link */}
        <button className="flex items-center gap-3 text-sm text-primary-red mb-6">
          <span className="text-lg">←</span>
          <span>Retour au tableau de board</span>
        </button>

        {/* Page title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
          <span className="inline-flex w-10 h-10 rounded-md border border-gray-400 items-center justify-center bg-white">
            <img src={walletLogo} alt="Portefeuille" className="w-7 h-7" />
          </span>
          <span>Mon Portefeuille</span>
        </h1>

        {/* Balance cards */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] gap-6 mb-10">
          {/* Available balance */}
          <section className="bg-primary-red text-white rounded-xl p-6 md:p-8 shadow-custom flex flex-col justify-between min-h-[200px]">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-xs uppercase tracking-wide mb-2">
                  Solde Disponible
                </p>
                <p className="text-3xl md:text-4xl font-extrabold">25008DT</p>
              </div>
              <div className="w-10 h-10 rounded-md border border-white/60 flex items-center justify-center bg-white">
                <img src={walletLogo} alt="Portefeuille" className="w-6 h-6" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              <button className="flex-1 bg-[#F2C2C2] text-black font-medium py-2 rounded-md text-sm">
                Retirer
              </button>
              <button className="flex-1 bg-white text-primary-red font-medium py-2 rounded-md text-sm">
                Ajouter
              </button>
            </div>
          </section>

          {/* Pending gain */}
          <section className="bg-white rounded-xl p-6 md:p-8 shadow-light border border-border-gray flex flex-col justify-between min-h-[200px]">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                Gain en Attente
              </p>
              <p className="text-3xl md:text-4xl font-extrabold text-black mb-2">
                100DT
              </p>
              <p className="text-xs text-gray-600">
                Disponible après confirmation du trajet
              </p>
            </div>
            <button className="mt-6 w-full border border-primary-red text-primary-red font-medium py-2 rounded-md text-sm">
              Voir les détails
            </button>
          </section>
        </div>

        {/* Payment methods */}
        <section className="bg-[#FFECEC] rounded-2xl border border-[#F0CACA] p-6 md:p-8">
          <h2 className="text-sm font-semibold mb-6">Moyens de Paiement</h2>

          <div className="space-y-4 mb-6">
            {/* Visa card */}
            <div className="bg-white rounded-xl border border-border-gray px-5 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-xs font-semibold">
                  VISA
                </div>
                <div>
                  <p className="text-sm font-medium">Visa •••• 4242</p>
                  <p className="text-xs text-gray-500">Expire le 12/25</p>
                </div>
              </div>
              <button className="self-start md:self-auto text-xs font-semibold text-primary-red">
                Supprimer
              </button>
            </div>

            {/* Mastercard */}
            <div className="bg-white rounded-xl border border-border-gray px-5 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center text-[10px] font-semibold">
                  MC
                </div>
                <div>
                  <p className="text-sm font-medium">Mastercard •••• 5555</p>
                  <p className="text-xs text-gray-500">Expire le 08/26</p>
                </div>
              </div>
              <button className="self-start md:self-auto text-xs font-semibold text-primary-red">
                Supprimer
              </button>
            </div>
          </div>

          {/* Secure payments info */}
          <div className="bg-[#FFE1D1] rounded-xl px-5 py-4 flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-sm">
              🔒
            </div>
            <div>
              <p className="text-xs font-semibold mb-1">Paiements Sécurisés</p>
              <p className="text-xs text-gray-700">
                Toutes les transactions sont cryptées et sécurisées. Nous ne
                stockons jamais vos informations bancaires complètes.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default WalletPage
