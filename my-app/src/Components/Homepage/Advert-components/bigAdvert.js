import React from 'react'
import { Image } from 'react-bootstrap'

import BigAdvert from '../../../Images/Homepage/Banners/big-box.jpeg'

function bigAdvert() {
  return (
    <div>
        <Image src={BigAdvert} fluid={true} thumbnail={true} style={{
          height: 700,
          width: 700
        }}/> 
    </div>
  )
}

export default bigAdvert