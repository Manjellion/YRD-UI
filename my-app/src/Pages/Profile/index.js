import React from 'react'
import Navbar from '../../Components/Navbar'
import ProfileCard from '../../Components/ProfilePage/ProfileCard/ProfileCard'
import Collection from '../../Components/ProfilePage/Collection/Main'
import CSS from './index.module.css'

function index() {
  return (
    <div className={CSS.profile_container}>
        <Navbar />
        <div className={CSS.profile_components}>
          <div>
            <ProfileCard />
          </div>
          <div>
            <Collection />
          </div>
        </div>
    </div>
  )
}

export default index