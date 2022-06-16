import React from 'react'
import Card from 'react-bootstrap/Card'
import { motion } from 'framer-motion'

import ColoredLine from './ColoredLine'

import review1 from '../../Images/Homepage/Review-box/review-1.png'
import review2 from '../../Images/Homepage/Review-box/review-2.png'
import review3 from '../../Images/Homepage/Review-box/review-3.png'

function Review() {
  return (
    <div style={{ margin: 50 }}>
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
            justifyContent: 'space-evenly',
            margin: 50
        }}>
            <Card style={{ width: '20rem' }}>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                    <Card.Img variant="top" src={review1} />
                </motion.div>
            </Card>
            <Card style={{ width: '20rem' }}>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                    <Card.Img variant="top" src={review2} />
                </motion.div>
            </Card>
            <Card style={{ width: '20rem' }}>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                    <Card.Img variant="top" src={review3} />
                </motion.div>
            </Card>
        </div>
    </div>
  )
}

export default Review