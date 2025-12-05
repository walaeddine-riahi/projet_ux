import React from 'react'
import UserAvatar from './UserAvatar'
import userAvatarImg from '../assets/user-avatar.png'
import notificationLogo from '../assets/notification-logo.svg'

type PageKey =
  | 'home'
  | 'wallet'
  | 'dashboard'
  | 'notifications'
  | 'rideDetails'
  | 'driverProfile'
  | 'rideTracking'

interface TopBarProps {
  currentPage: PageKey
  onNavigate: (page: PageKey) => void
}

const TopBar: React.FC<TopBarProps> = ({ currentPage, onNavigate }) => {
  return (
    <header className="w-full bg-white border-b border-[#F1E0E0]">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-8">
        {/* Left: logo */}
        <div className="flex items-center">
          <img
            src="https://static.codia.ai/image/2025-12-04/RHTuzHRcFA.png"
            alt="Cov'Act logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Center: navigation */}
        <nav className="hidden md:flex items-center gap-10 text-[11px] font-medium text-black">
          <button
            className={
              currentPage === 'home'
                ? 'relative pb-1 text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black'
                : 'pb-1 text-black/70'
            }
            onClick={() => onNavigate('home')}
          >
            Accueil
          </button>
          <button
            className={
              currentPage === 'dashboard'
                ? 'relative pb-1 text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black'
                : 'pb-1 text-black/70'
            }
            onClick={() => onNavigate('dashboard')}
          >
            Suivi
          </button>
          <button className="pb-1 text-black/70">Avis</button>
          <button
            className={
              currentPage === 'driverProfile'
                ? 'relative pb-1 text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black'
                : 'pb-1 text-black/70'
            }
            onClick={() => onNavigate('driverProfile')}
          >
            Profile
          </button>
        </nav>

        {/* Right: notification + user */}
        <div className="flex items-center gap-5">
          {/* Notification icon placeholder (clickable) */}
          <button
            type="button"
            className="relative w-7 h-7 rounded-full border border-black flex items-center justify-center bg-white"
            onClick={() => onNavigate('notifications')}
          >
            <img src={notificationLogo} alt="Notifications" className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary-red" />
          </button>

          {/* User */}
          <div className="flex items-center gap-2">
            <UserAvatar name="Asma Chaouch" size="sm" src={userAvatarImg} />
            <span className="text-[11px] font-medium text-black">Asma Chaouch</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export type { PageKey }
export default TopBar
