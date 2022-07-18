import React from 'react'
import Cards from './Cards'
import CSS from './index.module.css'

import ResidentImg from '../../Images/Homepage/How-cards/resident.jpeg'
import TouristImg from '../../Images/Homepage/How-cards/tourist.jpeg'
import BusinessImg from '../../Images/Homepage/How-cards/business.jpeg'

function index() {
  return (
    <div className={CSS.container}>
        <div className={CSS.header_Container}>
            <h1>Who's viewing the page?</h1>
            <p>Choose your option below...</p>
        </div>
        <div className={CSS.card_Container}>
            <Cards 
                img={ResidentImg}
                title="Resident"
                description="Are you living in breath-taking view of Royal Dock? A riverside industrial district that’s home to ExCeL London, Emirates Cable Car with many things to discover. Click here below to take your Royal Dock to the next level!"
                button="/residentPage"
            />
            <Cards
                img={BusinessImg}
                title="Business Owner"
                description="                    If you are a passionate business owner or an entrepreneur living or have a business in Royal Dock, you can augment your concern in highly potential area of Royal Dock. Click here below to take your concern to the peak!"
                button="/businessPage"
            />
            <Cards
                img={TouristImg}
                title="Tourist"
                description="                    Are you planning to visit Royal Dock soon? An astonishing tourist destination in the heart of London. Reveal the unseen beauty of O2 arena, Emirates Cable car, Excel exhibition centre and many other eye-catching places."
                button="/touristPage"
            />
        </div>
    </div>
  )
}

export default index