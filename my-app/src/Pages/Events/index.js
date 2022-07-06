import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { FilterMain, ResultMain } from '../../Components/EventsPage/export'
import CSS from './index.module.css'

function index() {
  return (
    <div className={CSS.events_container}>
        <Navbar />
        <div className={CSS.events_components}>
            <div className={CSS.events_filter}>
                <FilterMain />
            </div>
            <div className={CSS.events_result}>
                <ResultMain />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default index