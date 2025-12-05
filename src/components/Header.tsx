import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-light-gray rounded-b-[20px] h-[96px] flex items-center justify-between px-10">
      <div className="flex items-center">
        <img
          src="https://static.codia.ai/image/2025-12-04/RHTuzHRcFA.png"
          alt="Logo"
          className="w-[80px] h-[80px]"
        />
      </div>
      
      <button className="bg-primary-red text-white px-7 py-2.5 rounded-full border-[3px] border-white/30 shadow-custom flex items-center gap-2.5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-60 transform -skew-x-12"></div>
        <span className="text-xl font-semibold relative z-10">S'inscrire</span>
        <img
          src="https://static.codia.ai/image/2025-12-04/2UWPBJtGir.png"
          alt="Arrow"
          className="w-5 h-5 relative z-10"
        />
      </button>
    </header>
  )
}

export default Header
