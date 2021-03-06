import React from 'react'
import Footer from '../../Components/Footer'
import { 
  Hero, 
  About, 
  How, 
  Advert, 
  Review 
} 
from '../../Components/Homepage/export'

function Home() {
  return (
    <div style={{ overflow: 'hidden' }}>
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