import React from 'react'
import Reservation from '@/layouts/Reservation/Reservation'
import ContactHero from '@/layouts/Contact/ContactHero'
import Navbar from '@/Templates/Navbar'

const ReservationPage = () => {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <Reservation />
    </div>
  )
}

export default ReservationPage
