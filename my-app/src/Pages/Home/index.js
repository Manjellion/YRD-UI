import React from 'react'
import Hero from '../../Components/Homepage/Hero'
import About from '../../Components/Homepage/About'
import How from '../../Components/Homepage/How'
import Advert from '../../Components/Homepage/Advert'
import Footer from '../../Components/Footer'

function Home() {
  return (
    <div>
        <Hero /> {/* Hero section */}
        <About /> {/* About section */}      
        <How /> {/* How it works section */}
        <Advert /> {/* Three components for the different types of display */}
        {/* Reviews and testimonies */}
        <Footer /> {/* Footer */}
    </div>
  )
}

export default Home