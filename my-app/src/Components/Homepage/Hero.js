import React from 'react'

import Image from 'react-bootstrap/Image'
import { motion } from 'framer-motion'

import backgroundImg from '../../Images/Homepage/Hero-bg.jpeg'

import Navbar from '../Navbar'
import AnimatedText from './Animation/AnimationText'

function Hero() {

  const placeholderText = [
    { 
      type: "heading1", 
      text: "Discover" 
    },
    {
      type: "heading2",
      text: "Royal Docks"
    }
  ]

  const container ={
    variable: {
      transition : {
        staggerChildren : 0.025
      }
    }
  }


  return (
    <div>
        <div>
          <Image src={backgroundImg} alt="Home" 
            style={{
                width: '100%',
                minHeight: '100%',
            }}
            />
            <div className='Hero-text-container' style={{
                position: 'absolute',
                justifyContent: 'center',
                textAlign: 'center',
                top: 0,
                width: '100%',
                color: '#fff'
            }}>
              <div className='Navbar'>
              </div>
              <motion.div
                animate={{
                  x: 0,
                  opacity: 1
                }}
                initial={{
                    opacity: 0.1,
                    x: -500
                }}
                transition={{
                    type: 'spring',
                    stiffness: 50,
                }}
              >
                <Navbar />
              </motion.div>
              <div className='Hero-Text' style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
                top: 200,
              }}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={container}
                >
                  <div>
                    {placeholderText.map((item, index) => {
                      return <AnimatedText {...item} key={index} />;
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero