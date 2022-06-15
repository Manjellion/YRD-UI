import React from 'react'

import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

import { Hero, About, How, Advert, Review } from '../../Components/Homepage/index'

function Home() {
  return (
    <div>
        <Hero /> {/* Hero section */}
        <About /> {/* About section */}      
        <How /> {/* How it works section */}
        <Advert /> {/* Three components for the different types of display */}
        <Review />{/* Reviews and testimonies */}
        <Footer /> {/* Footer */}
    </div>
  )
}

export default Home