import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="text-center py-12 px-4">
      <h1 className="text-5xl font-semibold leading-[60px] text-black mb-6 max-w-3xl mx-auto">
        Partagez le Trajet, <br />
        Sauvez la Planète
      </h1>
      
      <p className="text-xl font-light leading-7 text-black max-w-3xl mx-auto">
        Connectez-vous avec des conducteurs et des passagers vérifiés qui voyagent dans votre direction. Économisez de l'argent, réduisez les émissions et faites de nouvelles connaissances.
      </p>
    </section>
  )
}

export default Hero
