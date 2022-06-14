import React from 'react'
import Card from 'react-bootstrap/Card'

import ColoredLine from './ColoredLine'

import review1 from '../../Images/Homepage/Review-box/review-1.png'
import review2 from '../../Images/Homepage/Review-box/review-2.png'
import review3 from '../../Images/Homepage/Review-box/review-3.png'

function Review() {
  return (
    <div style={{ margin: 100 }}>
        <ColoredLine color='black' />
        <div className='How-Text-container' style={{
            textAlign: 'center',
            marginTop: 50
        }}>
            <h1 style={{ fontSize: '6vw'}}>Reviews</h1>
            <p style={{ fontSize: '1.5vw' }}>See what people think of this App</p>
        </div>
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
            <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={review1} />
            </Card>
            <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={review2} />
            </Card>
            <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={review3} />
            </Card>
        </div>
    </div>
  )
}

export default Review