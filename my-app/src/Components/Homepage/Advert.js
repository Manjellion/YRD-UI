import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ColoredLine from './Components/ColoredLine'
import { BsArrowRightCircle } from 'react-icons/bs'

import images from './Components/ad-images'

function Advert() {

    const [width, setWidth ] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        console.log(carousel.current);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    const bounceAnimation = {
        y: {
            duration: 0.4,
            yoyo: Infinity,
            ease: 'easeOut',
        },
    }

  return (
    <div style={{ margin: '1%', padding: 0 }}>
        <div style={{ textAlign: 'center' }}>
            <ColoredLine color="black" />
            <div style={{
                marginTop: 50,
            }}>
                <h1 style={{ fontSize: '8vw' }}>Advertisements</h1>
                <p style={{ fontSize: '1.5vw' }}>Check out the latest products</p>
            </div>
        </div>
        <div>
            <motion.div className='carousel' ref={carousel} style={{
                cursor: 'grab',
                overflow: 'hidden',
            }}>
                <motion.div className='inner-carousel' drag='x' dragConstraints={{ right: 0, left: -2000 }} whileTap={{ cursor: "grabbing" }} style={{
                    display: 'flex',
                }}>
                    {images.map((image, index) => {
                        return(
                            <motion.div className='item' style={{
                                minHeight: '30rem',
                                minwidth: '30rem',
                                padding: 50
                            }}>
                                <img src={image} alt='advertisement images' key={index} style={{
                                    borderRadius: '2rem',
                                    pointerEvents: 'none'
                                }}/>
                                
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
            <div style={{
                textAlign: 'center',
                padding: 0,
                margin: 0,
                fontSize: '2vw'
            }}>
                <div>Hold and scroll
                    <motion.div transition={bounceAnimation} animate={{ y: ['25%', '-25%'] }}>
                        <BsArrowRightCircle />
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Advert