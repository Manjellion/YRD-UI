import React from 'react'
import CSS from './CSS/index.module.css'
import Card from 'react-bootstrap/Card'
import { motion } from 'framer-motion'

import ColoredLine from './Components/ColoredLine'

import review1 from '../../Images/Homepage/Review-box/review-1.png'
import review2 from '../../Images/Homepage/Review-box/review-2.png'
import review3 from '../../Images/Homepage/Review-box/review-3.png'

function Review() {
  return (
    <div className={CSS.review_container}>
        <ColoredLine color='black' />
        <div className={CSS.review_text_container}>
            <h1 style={{ fontSize: '8vw'}}>Reviews</h1>
            <p>See what people think of this App</p>
        </div>
        <div className={CSS.review_card_container}>
            <Card className={CSS.review_card}>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                    <Card.Img variant="top" src={review1} />
                </motion.div>
            </Card>
            <Card className={CSS.review_card}>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                    <Card.Img variant="top" src={review2} />
                </motion.div>
            </Card>
            <Card className={CSS.review_card}>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                    <Card.Img variant="top" src={review3} />
                </motion.div>
            </Card>
        </div>
    </div>
  )
}

export default Review