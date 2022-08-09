import React from 'react'
import Card from './Card'
import tempArr from './tempArr'

function index() {
  return (
    <div>
        <Card 
            img={tempArr[0].img}
            name={tempArr[0].name}
            username={tempArr[0].username}
            description={tempArr[0].description}
            link={tempArr[0].link}
            instagram={tempArr[0].instagram}
            twitter={tempArr[0].twitter}
            facebook={tempArr[0].facebook}
            joinDate={tempArr[0].joined}
        />
    </div>
  )
}

export default index