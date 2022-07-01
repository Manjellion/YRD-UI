import React from 'react'
import CSS from './search.module.css'
import { 
  MapsApi,
  Filter,
  Results
 } from '../../Components/SearchPage/export'
import Navigationbar from '../../Components/Navbar'

function index() {
  return (
    <div className={CSS.container}>
      <nav className={CSS.navbar}>
        <Navigationbar />
      </nav>
      <div className={CSS.map_container}>
        <MapsApi />
      </div>
      <div className={CSS.component_container}>
        <div className={CSS.filter_container}>
          <Filter />
        </div>
        <div className={CSS.search_output_container}>
          <Results />
        </div>
      </div>
    </div>
  )
}

export default index