import React from 'react'
import Card from 'react-bootstrap/Card'
import { motion } from 'framer-motion'

import ColoredLine from './ColoredLine'

import ResidentCard from '../../Images/Homepage/How-cards/Resident-card.png'
import BusinessCard from '../../Images/Homepage/How-cards/Business-card.png'
import TouristCard from '../../Images/Homepage/How-cards/Tourist-card.png'



function How() {
  return (
       <div style={{ textAlign: 'center', margin: 100 }}>
            <ColoredLine color="black" />
            <div style={{
                marginTop: 50
            }}>
                <h1 style={{ fontSize: '8vw' }}>How it works</h1>
                <p style={{ fontSize: '1.5vw' }}>Get started in 3 simple steps</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', margin: 50}}>
                <motion.Card style={{ width: '18rem' }} whileHover={{ scale: 1.1 }}>
                    <Card.Img variant="top" src={ResidentCard} />
                </motion.Card>
                <motion.Card style={{ width: '18rem' }} whileHover={{ scale: 1.1 }}>
                    <Card.Img variant="top" src={BusinessCard} />
                </motion.Card>
                <motion.Card style={{ width: '18rem' }} whileHover={{ scale: 1.1 }}>
                    <Card.Img variant="top" src={TouristCard} />
                </motion.Card>
            </div>
       </div>
  )
}

export default How