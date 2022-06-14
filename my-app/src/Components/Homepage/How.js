import React from 'react'
import Card from 'react-bootstrap/Card'

import ColoredLine from './ColoredLine'

import ResidentCard from '../../Images/Homepage/How-cards/Resident-card.png'
import BusinessCard from '../../Images/Homepage/How-cards/Business-card.png'
import TouristCard from '../../Images/Homepage/How-cards/Tourist-card.png'



function How() {
  return (
       <div style={{ textAlign: 'center', margin: 50 }}>
            <ColoredLine color="black" />
            <div style={{
                marginTop: 50
            }}>
                <h1 style={{ fontSize: '8vw' }}>How it works</h1>
                <p style={{ fontSize: '1.5vw' }}>Get started in 3 simple steps</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={ResidentCard} />
                </Card>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={BusinessCard} />
                </Card>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={TouristCard} />
                </Card>
            </div>
       </div>
  )
}

export default How