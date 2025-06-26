import React from 'react'
import HeroSection from '../../components/Home/HeroSection/HeroSection'
import Hero from '../../components/Home/Hero/Hero'
import Services from '../../components/Home/Service/Service'
import DogGroomingPage from '../../components/Home/Details/Doggromming'
import TestimonialsCarousel from '../../components/Home/TestimonialsCarousel/TestimonialsCarousel'
import DogGroomingCTA from '../../components/Home/DogGroomingCTA/DogGroomingCTA'
import Certifications from '../../components/Certifications/Certifications'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Hero/>
      <Services/>
      <DogGroomingPage/>
      <TestimonialsCarousel />
      <DogGroomingCTA/>
      <Certifications/>
      <Footer/>
    </div>
  )
}

export default Home
