import React, { useState, useEffect, useRef } from 'react'
import CSS from '../CSS/index.module.css'
import ColoredLine from '../Components/ColoredLine'
import Searchbar from './Searchbar'
import { motion } from 'framer-motion'
import Cards from './Cards'

function Main() {

    const [width, setWidth ] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        console.log(carousel.current);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    const tempArr = [
        <Cards 
            title='Dorchester Collections' 
            desciprtion='45 Park Lane features an on-site fitness studio and a modern American steak restaurant. A strking...'
            rating='5.0 / 5.0'
            price='£100 p/n'
        />,
        <Cards 
            title='Dorchester Collections' 
            desciprtion='45 Park Lane features an on-site fitness studio and a modern American steak restaurant. A strking...'
            rating='5.0 / 5.0'
            price='£100 p/n'
        />,
        <Cards 
            title='Dorchester Collections' 
            desciprtion='45 Park Lane features an on-site fitness studio and a modern American steak restaurant. A strking...'
            rating='5.0 / 5.0'
            price='£100 p/n'
        />,
        <Cards 
            title='Dorchester Collections' 
            desciprtion='45 Park Lane features an on-site fitness studio and a modern American steak restaurant. A strking...'
            rating='5.0 / 5.0'
            price='£100 p/n'
        />,
        <Cards 
            title='Dorchester Collections' 
            desciprtion='45 Park Lane features an on-site fitness studio and a modern American steak restaurant. A strking...'
            rating='5.0 / 5.0'
            price='£100 p/n'
        />,
        <Cards 
            title='Dorchester Collections' 
            desciprtion='45 Park Lane features an on-site fitness studio and a modern American steak restaurant. A strking...'
            rating='5.0 / 5.0'
            price='£100 p/n'
        />,
        <Cards 
            title='Dorchester Collections' 
            desciprtion='45 Park Lane features an on-site fitness studio and a modern American steak restaurant. A strking...'
            rating='5.0 / 5.0'
            price='£100 p/n'
        />,
        <Cards 
            title='Dorchester Collections' 
            desciprtion='45 Park Lane features an on-site fitness studio and a modern American steak restaurant. A strking...'
            rating='5.0 / 5.0'
            price='£100 p/n'
        />,
    ]

  return (
    <div className={CSS.toursit_main_container}>
        <ColoredLine color="grey" />
        <div className={CSS.tourit_main_header}>
            <h1>Places to visit</h1>
            <p>See what the area has to offer</p>
        </div>
        <div className={CSS.tourist_searchBar_component}>
            <Searchbar />
        </div>
        <div className={CSS.tourist_carousel_component}>
            <motion.div className='carousel' ref={carousel} style={{
                cursor: 'grab',
                overflow: 'hidden',
            }}>
                <motion.div className='inner-carousel' drag='x' dragConstraints={{ right: 0, left: -width }} whileTap={{ cursor: "grabbing" }} style={{
                    display: 'flex',
                }}>
                    {tempArr.map((temp, key) => (
                        <div key={key}>
                            {temp}
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default Main