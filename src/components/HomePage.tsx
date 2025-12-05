import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Features from './Features'
import SearchForm from './SearchForm'
import AvailableRides from './AvailableRides'
import type { PageKey } from './TopBar'

interface HomePageProps {
  onNavigate?: (page: PageKey) => void
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-light-pink">
      <Header />
      <main>
        <Hero />
        <Features />
        <SearchForm />
        <AvailableRides onSelectRide={() => onNavigate?.('rideDetails')} />
      </main>
    </div>
  )
}

export default HomePage


