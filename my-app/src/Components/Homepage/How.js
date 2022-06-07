import React from 'react'

import HowCardResidents from '../../Images/How-cards/residents-card.png'
import HowCardBusiness from '../../Images/How-cards/bsn-card.png'
import HowCardTourist from '../../Images/How-cards/tourist-card.png'

function How() {
  return (
    <div style={{ margin: 100 }}>
        <div className='How-Text-container' style={{
            textAlign: 'center'
        }}>
            <h1>How It Works</h1>
            <p>Get started in 3 simple steps</p>
        </div>
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
            <img src={HowCardResidents} style={{
                height: 800,
                width: 400,
                borderRadius: 10
            }}/>
            <img src={HowCardBusiness} style={{
                height: 800,
                width: 400,
                borderRadius: 10
            }}/>
            <img src={HowCardTourist} style={{
                height: 800,
                width: 400,
                borderRadius: 10
            }}/>
        </div>
    </div>
  )
}

export default How