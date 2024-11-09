import React from 'react';
import HomeHero from '@/layouts/Home/HomeHero';
import StatsSection from '@/layouts/Home/StatsSection';
import CallToAction from '@/layouts/Home/CallToAction';
import BlogSection from '@/layouts/Home/BlogSection';
import AboutSection from '@/layouts/Home/AboutSection';
import ContactSection from '@/layouts/Home/ContactSection';
import Testimonials from '@/layouts/Home/Testimonials';
import Navbar from '@/Templates/Navbar';
import Preschool from '@/layouts/Home/Preschool';
import Footer from '@/Templates/Footer';


const HomePage = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <StatsSection />
      
      <CallToAction />
      <BlogSection />
      <AboutSection />
      <Preschool />
      <ContactSection />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
