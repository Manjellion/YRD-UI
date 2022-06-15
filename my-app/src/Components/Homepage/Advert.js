import React from 'react'

import ColoredLine from './ColoredLine'

import SmallAdvert from './Advert-components/smallAdvert'
import BigAdvert from './Advert-components/bigAdvert'
import BannerAdvert from './Advert-components/bannerAdvert'

function Advert() {
  return (
    <div style={{ margin: 50 }}>
        <ColoredLine color='black' />
        <div className='How-Text-container' style={{
            textAlign: 'center',
            marginTop: 50
        }}>
            <h1 style={{ fontSize: '6vw' }}>Advertisements</h1>
            <p style={{ fontSize: '1.5vw' }}>Check out the latest products</p>
        </div>
        <div style={{
            display: 'flex',
            justifyContent: 'space-around'
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