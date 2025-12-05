import React from 'react'

const Features: React.FC = () => {
  const features = [
    {
      icon: "https://static.codia.ai/image/2025-12-04/eZnQ5qFuq4.png",
      title: "Réservation Facile"
    },
    {
      icon: "https://static.codia.ai/image/2025-12-04/rVA6Z0tnXt.png",
      title: "Passagers Vérifiés"
    },
    {
      icon: "https://static.codia.ai/image/2025-12-04/bUctJcNBcz.png",
      title: "Suivi en Temps Réel"
    }
  ]

  return (
    <section className="py-12">
      <div className="flex justify-center items-center gap-24">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <img 
              src={feature.icon} 
              alt={feature.title}
              className="w-[72px] h-[72px] mb-6"
            />
            <h3 className="text-xl font-bold text-black text-center leading-7">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
      
      <div className="w-full h-px bg-line-gray mt-12"></div>
    </section>
  )
}

export default Features
