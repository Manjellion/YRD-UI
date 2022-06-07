import React from 'react'
import SmallAdvert from '../../../Images/Banners/small-box.jpeg'

function smallAdvert() {
  return (
    <div>
        <div style={{
          display: 'flex'
        }}>
          <img src={SmallAdvert} style={{
            marginRight: 10,
            marginBottom: 10,
            height: 350,
            width: 350
          }}/>
          <img src={SmallAdvert} style={{
            marginBottom: 10,
            height: 350,
            width: 350
          }}/>
        </div>
        <div>
          <img src={SmallAdvert} style={{
            marginRight: 10,
            marginTop: 10,
            height: 350,
            width: 350
          }}/>
          <img src={SmallAdvert} style={{
            marginTop: 10,
            height: 350,
            width: 350
          }}/>
        </div>
    </div>
  )
}

export default smallAdvert