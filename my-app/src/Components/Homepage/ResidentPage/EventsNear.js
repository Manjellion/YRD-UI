import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import CardEvents from './CardEvents'
import CSS from '../CSS/index.module.css'
import ColoredLine from '../Components/ColoredLine';

function EventsNear() {

    const [width, setWidth ] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        console.log(carousel.current);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    const tempList = [
    <CardEvents title='Sport Events' />,
    <CardEvents title='Sport Events' />,
    <CardEvents title='Sport Events' />,
    <CardEvents title='Sport Events' />,
    <CardEvents title='Sport Events' />,
    <CardEvents title='Sport Events' />,
    <CardEvents title='Sport Events' />,
    <CardEvents title='Sport Events' />,
    <CardEvents title='Sport Events' />,
    <CardEvents title='Sport Events' />,
    <CardEvents title='Sport Events' />,
    ];


  return (
    <div className={CSS.evemts_resident_container}>
        <ColoredLine color='grey' />
        <h1>Events near you</h1>
        <motion.div className='carousel' ref={carousel} style={{
                cursor: 'grab',
                overflow: 'hidden',
            }}>
                <motion.div className={CSS.events_inner_carousel} drag='x' dragConstraints={{ right: 0, left: -width }} whileTap={{ cursor: "grabbing" }}>
                    <motion.div className={CSS.events_list_row1}>
                        {tempList.map((lists, key) => (
                            <div key={key}>
                                {lists}
                            </div>
                        ))}
                    </motion.div>
                    <br />
                    <motion.div className={CSS.events_list_row1}>
                        {tempList.map((lists, key) => (
                            <div key={key}>
                                {lists}
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
    </div>
  )
}

export default EventsNear