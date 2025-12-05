import React, { useState } from 'react'
import TopBar, { PageKey } from './components/TopBar'
import SiteFooter from './components/SiteFooter'
import HomePage from './components/HomePage'
import WalletPage from './components/WalletPage'
import DashboardPage from './components/DashboardPage'
import NotificationsPage from './components/NotificationsPage'
import RideDetailsPage from './components/RideDetailsPage'
import DriverProfilePage from './components/DriverProfilePage'
import RideTrackingPage from './components/RideTrackingPage'

function App() {
  const [page, setPage] = useState<PageKey>('home')

  const renderPage = () => {
    if (page === 'wallet') return <WalletPage />
    if (page === 'dashboard') return <DashboardPage />
    if (page === 'notifications') return <NotificationsPage onNavigate={setPage} />
    if (page === 'rideDetails') return <RideDetailsPage onNavigate={setPage} />
    if (page === 'rideTracking') return <RideTrackingPage onNavigate={setPage} />
    if (page === 'driverProfile') return <DriverProfilePage onNavigate={setPage} />
    return <HomePage onNavigate={setPage} />
  }

  return (
    <div className="min-h-screen bg-light-pink font-roboto flex flex-col">
      {page !== 'home' && <TopBar currentPage={page} onNavigate={setPage} />}
      <main className="flex-1">{renderPage()}</main>
      <SiteFooter onNavigate={setPage} />
    </div>
  )
}

export default App
