import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import ColoredLine from './Components/ColoredLine'

import ResidentCard from '../../Images/Homepage/How-cards/Resident-card.png'
import BusinessCard from '../../Images/Homepage/How-cards/Business-card.png'
import TouristCard from '../../Images/Homepage/How-cards/Tourist-card.png'

function How() {

    const { ref, inView } = useInView({
        threshold: 0.1
    }); 

    // useAnimation is a hook that allows the state to use animation on a condition
    const animation = useAnimation();
    const childAnimtion = useAnimation();

    // inside useEffect we place all the hooks together to animate the state on view
    useEffect(() => {
        if(inView){
            animation.start({
                x: 0,
                opacity: 1,
                transition: {
                    duration: 1
                }
            })
            childAnimtion.start({
                y: 0,
                opacity: 1,
                transition: {
                    duration: 1
                }
            })
        }
        if(!inView) {
            animation.start({
                x: -500,
                opacity: 0.1
            })
            childAnimtion.start({
                y: -200,
                opacity: 0
            })
        }
        console.log('use effect hook, inView = ', inView)
    }, [inView]);

  return (
       <div style={{ textAlign: 'center', margin: 100 }} ref={ref}>
            <ColoredLine color="black" />
            <div style={{
                marginTop: 50
            }}>
                <h1 style={{ fontSize: '8vw' }}>How it works</h1>
                <p style={{ fontSize: '1.5vw' }}>Get started in 3 simple steps</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', margin: 50 }}>
                <motion.Card style={{ width: '20rem', margin: 20 }} animate={animation}>
                    <Card.Img variant="top" src={ResidentCard} />
                </motion.Card>
                <motion.Card style={{ width: '20rem', margin: 20 }} animate={animation}>
                    <Card.Img variant="top" src={BusinessCard} />
                </motion.Card>
                <motion.Card style={{ width: '20rem', margin: 20 }} animate={animation}>
                    <Card.Img variant="top" src={TouristCard} />
                </motion.Card>
            </div>
       </div>
  )
}

export default How