import React from 'react'
import { Image } from 'react-bootstrap'
import SmallAdvert from '../../../Images/Homepage/Banners/small-box.jpeg'

function smallAdvert() {
  return (
    <div>
        <div style={{
          display: 'flex'
        }}>
          <Image src={SmallAdvert} fluid={true} thumbnail={true} style={{
          height: 350,
          width: 350
        }}/>
          <Image src={SmallAdvert} fluid={true} thumbnail={true} style={{
          height: 350,
          width: 350
        }}/>
        </div>
        <div>
        <Image src={SmallAdvert} fluid={true} thumbnail={true} style={{
          height: 350,
          width: 350
        }}/>
        <Image src={SmallAdvert} fluid={true} thumbnail={true} style={{
          height: 350,
          width: 350
        }}/>
        </div>
    </div>
  )
}

export default smallAdvert