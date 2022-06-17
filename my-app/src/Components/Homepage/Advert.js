import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ColoredLine from './Components/ColoredLine'

import images from './Components/ad-images'

function Advert() {

    const [width, setWidth ] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        console.log(carousel.current);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

  return (
    <div style={{ margin: '10%', padding: 0 }}>
        <div style={{ textAlign: 'center'}}>
            <ColoredLine color="black" />
            <div style={{
                marginTop: 50
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
                <motion.div className='inner-carousel' drag='x' dragConstraints={{ right: 0, left: -2200 }} whileTap={{ cursor: "grabbing" }} style={{
                    display: 'flex',
                }}>
                    {images.map((image, index) => {
                        return(
                            <motion.div className='item' style={{
                                minHeight: '40rem',
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
        </div>
    </div>
  )
}

export default Advert