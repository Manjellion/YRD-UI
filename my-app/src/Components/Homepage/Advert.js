import React from 'react'
import SmallAdvert from './Advert-components/smallAdvert'
import BigAdvert from './Advert-components/bigAdvert'
import BannerAdvert from './Advert-components/bannerAdvert'

function Advert() {
  return (
    <div style={{ margin: 50 }}>
        <div className='How-Text-container' style={{
            textAlign: 'center'
        }}>
            <h1>Advertisements</h1>
            <p>Check out the latest products</p>
        </div>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
        </div>
        <div className='Box-container'>
            <div className='top-row' style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly'
                }}>
                <SmallAdvert />
                <BigAdvert />
            </div>
            <BannerAdvert />
        </div>
    </div>
  )
}

export default Advert