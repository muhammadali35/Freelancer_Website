import React from 'react'
import HeroSection from './HeroSection'
import ProductList from './ProductList'
import FreelancerSection from './FreelancerSection'
import Freelancerprofile from './FreelancerCard/FreelancerCard'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
     <HeroSection/>
     <ProductList/>
     <FreelancerSection/>
     <Freelancerprofile/>
     <Footer />
    </div>
  )
}

export default Home