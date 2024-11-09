import React from 'react'
import Navbar from '@/Templates/Navbar';
import Footer from '@/Templates/Footer';
import ContactHero from '@/layouts/Contact/ContactHero';
import Contact from '@/layouts/Contact/Contact';
import WorkHours from '@/layouts/Contact/WorkHours';


const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <Contact />
      
      <WorkHours />
      <Footer />
    </div>
  )
}

export default ContactPage
