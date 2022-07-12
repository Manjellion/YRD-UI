import React from 'react'
import { 
    Hero, 
    About, 
    How,
    Advert,
    Review 
} from '../../../Components/Homepage/export'
import Carousel from '../../../Components/Homepage/TouristPage/Main'
import Footer from '../../../Components/Footer'

function index() {
  return (
    <div style={{ overflow: 'hidden'}}>
        <Hero />
            <About />
            <How />
            <Advert />
            <Carousel />
            <Review />
        <Footer />
    </div>
  )
}

export default index