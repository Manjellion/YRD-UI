import React from 'react'

import { 
    Hero, 
    About, 
    How,
    Review 
} from '../../../Components/Homepage/export'

import { 
    Events, 
    HotelAds 
} from '../../../Components/Homepage/ResidentPage/export-residentPage'

import Footer from '../../../Components/Footer'

function index() {
  return (
    <div style={{ overflow: 'hidden'}}>
        <Hero />
            <About />
            <How />
            <Events />
            <HotelAds />
            <Review />
        <Footer />
    </div>
  )
}

export default index