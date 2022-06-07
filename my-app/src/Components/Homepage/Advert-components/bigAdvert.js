import React from 'react'
import BigAdvert from '../../../Images/Banners/big-box.jpeg'

function bigAdvert() {
  return (
    <div>
        <img src={BigAdvert} style={{
            height: 720,
            width: 720,
        }}/>
    </div>
  )
}

export default bigAdvert