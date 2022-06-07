import React from 'react'

import review1 from '../../Images/Homepage/Review-box/review-1.png'
import review2 from '../../Images/Homepage/Review-box/review-2.png'
import review3 from '../../Images/Homepage/Review-box/review-3.png'

function Review() {
  return (
    <div style={{ margin: 100 }}>
        <div className='How-Text-container' style={{
            textAlign: 'center'
        }}>
            <h1 style={{ fontSize: 85 }}>How It Works</h1>
            <p style={{ fontSize: 30 }}>Get started in 3 simple steps</p>
        </div>
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
            <img src={review1} style={{
                height: 400,
                width: 400,
                borderRadius: 10
            }}/>
            <img src={review2} style={{
                height: 400,
                width: 400,
                borderRadius: 10
            }}/>
            <img src={review3} style={{
                height: 400,
                width: 400,
                borderRadius: 10
            }}/>
        </div>
    </div>
  )
}

export default Review