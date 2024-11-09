import React from 'react'
import Navbar from '@/Templates/Navbar';
import Footer from '@/Templates/Footer';
import AdmissionHero from '@/layouts/Admission/AdmissionHero';
import AdmissionNote from '@/layouts/Admission/AdmissionNote';
import AdmissionTools from '@/layouts/Admission/AdmissionTools';

const AdmissionPage = () => {
  return (
    <>
      <Navbar />
      <AdmissionHero />
      <AdmissionNote />
      <AdmissionTools />
      <Footer />
    </>
  )
}

export default AdmissionPage
