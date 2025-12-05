import React from 'react'
import RideCard from './RideCard'

interface AvailableRidesProps {
  onSelectRide?: () => void
}

const AvailableRides: React.FC<AvailableRidesProps> = ({ onSelectRide }) => {
  const rides = [
    {
      driverName: "Salma Jouini",
      rating: 4.9,
      reviewCount: 124,
      carModel: "Audi RS e-tron GT",
      price: "5DT",
      departure: "Esprit, Tunis",
      arrival: "Mourouj, Tunis",
      time: "17:15",
      seats: "2 sièges",
      avatar: "https://static.codia.ai/image/2025-12-04/TrEQbpBBmp.png"
    },
    {
      driverName: "Cyrine Ayari",
      rating: 4.5,
      reviewCount: 100,
      carModel: "Audi RS Q3 Sportback",
      price: "6DT",
      departure: "Esprit, Tunis",
      arrival: "Ariana, Tunis",
      time: "14:50",
      seats: "4 sièges",
      avatar: "https://static.codia.ai/image/2025-12-04/XQ7dengPYg.png"
    }
  ]

  return (
    <section className="px-4 py-12">
      <h2 className="text-3xl font-bold text-black text-center mb-8 leading-[36px]">
        Trajets Disponibles Aujourd'hui
      </h2>
      
      <div className="max-w-4xl mx-auto space-y-6">
        {rides.map((ride, index) => (
          <RideCard key={index} {...ride} onViewDetails={onSelectRide} />
        ))}
      </div>
    </section>
  )
}

export default AvailableRides
