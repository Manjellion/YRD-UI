import React from 'react'
import { Image } from 'react-bootstrap'

import Banner from '../../../Images/Homepage/Banners/wide-box.jpeg'

function bannerAdvert() {
  return (
    <div>
        <Image src={Banner} fluid={true} thumbnail={true} />
    </div>
  )
}

export default bannerAdvert