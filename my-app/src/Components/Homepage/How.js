import React from 'react'
import Card from 'react-bootstrap/Card'

import BusinessImg from '../../Images/Homepage/How-cards/business.jpg'
import ResidentImg from '../../Images/Homepage/How-cards/resident.jpg'
import TouristImg from '../../Images/Homepage/How-cards/tourist.jpg'


function How() {
  return (
       <div style={{ textAlign: 'center', margin: 100 }}>
            <div>
                <h1 style={{ fontSize: '8vw' }}>How it works</h1>
                <p style={{ fontSize: '1.5vw' }}>Get started in 3 simple steps</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={ResidentImg} />
                    <Card.Body>
                        <Card.Title style={{ fontSize: '2vw' }}>Residents</Card.Title>
                        <Card.Text style={{ fontSize: '1vw' }}>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam obcaecati asperiores, doloremque facere soluta autem atque amet perspiciatis excepturi impedit illum reprehenderit possimus at, aliquid minima suscipit voluptatem accusamus. Corrupti?
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={BusinessImg} />
                    <Card.Body>
                        <Card.Title style={{ fontSize: '2vw' }}>Business Owners</Card.Title>
                        <Card.Text style={{ fontSize: '1vw' }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio, magnam alias saepe molestiae error culpa labore, enim corporis tempora deleniti eos necessitatibus libero! Quos eligendi nam natus eum labore!
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={TouristImg} />
                    <Card.Body>
                        <Card.Title style={{ fontSize: '2vw' }}>Tourists</Card.Title>
                        <Card.Text style={{ fontSize: '1vw' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus vero illo iusto! Saepe reiciendis veniam atque itaque eos accusamus, laudantium iusto harum adipisci, dolores vel, doloremque nobis facilis ipsum?
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
       </div>
  )
}

export default How