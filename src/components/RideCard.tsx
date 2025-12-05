import React from 'react'

interface RideCardProps {
  driverName: string
  rating: number
  reviewCount: number
  carModel: string
  price: string
  departure: string
  arrival: string
  time: string
  seats: string
  avatar: string
  onViewDetails?: () => void
}

const RideCard: React.FC<RideCardProps> = ({
  driverName,
  rating,
  reviewCount,
  carModel,
  price,
  departure,
  arrival,
  time,
  seats,
  avatar,
  onViewDetails
}) => {
  return (
    <div className="bg-light-gray border border-border-gray rounded-[23px] p-8">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <img 
            src={avatar} 
            alt={driverName}
            className="w-[100px] h-[100px] rounded-full border-[3.125px] border-orange-200"
          />
          <div>
            <h3 className="text-2xl font-bold text-black mb-1">{driverName}</h3>
            <div className="flex items-center gap-2 mb-2">
              <img 
                src="https://static.codia.ai/image/2025-12-04/LJ97yBTN7j.png" 
                alt="Star" 
                className="w-6 h-6"
              />
              <span className="text-2xl text-black">{rating}</span>
              <span className="text-xl text-black">({reviewCount})</span>
            </div>
            <p className="text-xl text-text-gray">{carModel}</p>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-4xl font-black text-primary-red mb-1">{price}</div>
          <p className="text-xl text-text-gray">par personne</p>
        </div>
      </div>
      
      <div className="w-full h-px bg-line-gray mb-6"></div>
      
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img 
              src="https://static.codia.ai/image/2025-12-04/iE0hjtorUH.png" 
              alt="Location" 
              className="w-7 h-7"
            />
            <span className="text-2xl text-black">{departure}</span>
          </div>
          <div className="flex items-center gap-3">
            <img 
              src="https://static.codia.ai/image/2025-12-04/iE0hjtorUH.png" 
              alt="Location" 
              className="w-7 h-7"
            />
            <span className="text-2xl text-black">{arrival}</span>
          </div>
        </div>
        
        <div className="text-right space-y-4">
          <div className="flex items-center gap-3 justify-end">
            <img 
              src="https://static.codia.ai/image/2025-12-04/Bbm7BGQ5P8.png" 
              alt="Time" 
              className="w-7 h-7"
            />
            <span className="text-xl font-semibold text-text-gray">{time}</span>
          </div>
          <div className="flex items-center gap-3 justify-end">
            <img 
              src="https://static.codia.ai/image/2025-12-04/rVA6Z0tnXt.png" 
              alt="Seats" 
              className="w-7 h-7"
            />
            <span className="text-xl font-semibold text-text-gray">{seats}</span>
          </div>
        </div>
      </div>
      
      <div className="w-full h-px bg-line-gray mb-6"></div>
      
      <button
        className="w-full bg-primary-red text-white py-4 rounded-xl text-2xl font-normal shadow-light"
        onClick={onViewDetails}
      >
        Voir Détails et Réserver
      </button>
    </div>
  )
}

export default RideCard
