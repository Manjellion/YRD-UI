import React from 'react'
import CSS from './CSS/index.module.css'
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
      <nav className={CSS.navbar}>
      <Navbar />
      </nav>
        <div className={CSS.hero_container}>
          <Image className={CSS.hero_img} src={backgroundImg} alt="Home" />
            <div className={CSS.Hero_text_container}>
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
              </motion.div>
              <div className={CSS.hero_text}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={container}
                >
                  <h1>
                    {placeholderText.map((item, index) => {
                      return <AnimatedText {...item} key={index} />;
                    })}
                  </h1>
                </motion.div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero