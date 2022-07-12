import React from 'react'
import CSS from  '../CSS/index.module.css'
import Button from 'react-bootstrap/esm/Button'

function Searchbar() {
  return (
    <div className={CSS.toursit_searchbar_container}>
        <div className={CSS.tourist_searchbar_options}> 
            <Button>Hotels</Button>
            <Button>Restaurants</Button>
            <Button>Supermarkets</Button>
            <Button>Gyms</Button>
        </div>
        <Button className={CSS.tourist_searchbar_viewAll}>View All</Button>
    </div>
  )
}

export default Searchbar