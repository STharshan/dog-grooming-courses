import React from 'react'
import Header from '../../components/About/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import MeetBernie from '../../components/About/MeetBernie/MeetBernie'
import WhyChoose from '../../components/About/WhyChoose/WhyChoose'
import Certifications from '../../components/Certifications/Certifications'
import Qualifications from '../../components/About/Qualifications/Qualifications'
import CallToAction from '../../components/About/CallToAction/CallToAction'

const About = () => {
  return (
    <div>
      <Navbar/>  
      <Header/>
      <MeetBernie/>
      <WhyChoose/>
      <Certifications/>
      <Qualifications/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}

export default About
