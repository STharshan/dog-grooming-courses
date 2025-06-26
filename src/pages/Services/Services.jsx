import React from 'react'
import CoursesPage from '../../components/Services/CoursesPage/CoursesPage'
import AdditionalServices from '../../components/Services/AdditionalServices/AdditionalServices'
import CallToAct from '../../components/Services/CallToAct/CallToAct'
import Certifications from '../../components/Certifications/Certifications'
import Footer from '../../components/Footer/Footer'


const Services = () => {
  return (
    <div>
        <CoursesPage/>
        <AdditionalServices/>
        <CallToAct/>
        <Certifications/>
        <Footer/>
    </div>
  )
}

export default Services 