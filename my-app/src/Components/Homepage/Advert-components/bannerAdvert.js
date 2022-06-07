import React from 'react'
import Banner from '../../../Images/Homepage/Banners/wide-box.jpeg'

function bannerAdvert() {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
    }}>
        <img src={Banner} style={{
            marginTop: 50,
            height: 170,
            width: 1500,
        }}/>
    </div>
  )
}

export default bannerAdvert