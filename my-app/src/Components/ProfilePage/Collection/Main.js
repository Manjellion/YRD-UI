import React from 'react'
import CSS from '../index.module.css'
import Filter from './Filter'
import Collection from './Collection'

function Main() {
  return (
    <div className={CSS.profile_MainContainer}>
        <div className={CSS.profile_MainFilter}>
            <Filter />
        </div>
        <div className={CSS.profile_MainCollection}>
            <Collection />
        </div>
        <button className={CSS.profile_MainButton}>Show More</button>
    </div>
  )
}

export default Main