import React from 'react'

const SearchForm: React.FC = () => {
  return (
    <section className="px-4 py-12">
      <div className="max-w-4xl mx-auto bg-light-gray border border-border-gray rounded-[23px] p-6">
        <h2 className="text-2xl font-bold text-black text-center mb-8">
          Trouver votre Trajet
        </h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-dark-gray font-semibold mb-2">
              Départ
            </label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Mourouj"
                className="w-full h-10 pl-12 pr-4 border-2 border-stroke-gray rounded-md bg-white text-lg"
              />
              <img 
                src="https://static.codia.ai/image/2025-12-04/BjGXwdFVN6.png" 
                alt="Location" 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-dark-gray font-semibold mb-2">
              Arrivée
            </label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="ESPRIT"
                className="w-full h-10 pl-12 pr-4 border-2 border-stroke-gray rounded-md bg-white text-lg"
              />
              <img 
                src="https://static.codia.ai/image/2025-12-04/BjGXwdFVN6.png" 
                alt="Location" 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-dark-gray font-semibold mb-2">
              Quand
            </label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="jj/mm/yyyy"
                className="w-full h-10 pl-12 pr-4 border-2 border-stroke-gray rounded-md bg-white text-lg font-light"
              />
              <img 
                src="https://static.codia.ai/image/2025-12-04/OkyD4grgp1.png" 
                alt="Calendar" 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-dark-gray font-semibold mb-2">
              Passager
            </label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="jj/mm/yyyy"
                className="w-full h-10 pl-12 pr-12 border-2 border-stroke-gray rounded-md bg-white text-lg font-light"
              />
              <img 
                src="https://static.codia.ai/image/2025-12-04/WEyq6muLsM.png" 
                alt="User" 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
              />
              <img 
                src="https://static.codia.ai/image/2025-12-04/5jmEgFjh2c.png" 
                alt="Dropdown" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
              />
            </div>
          </div>
        </div>
        
        <button className="w-full bg-primary-red text-white py-3.5 rounded-xl mt-6 text-xl font-medium shadow-light">
          Rechercher des Trajets
        </button>
      </div>
    </section>
  )
}

export default SearchForm
