import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CSS from './search.module.css'
import { 
  MapsApi,
  Filter,
  Results
 } from '../../Components/SearchPage/export'
import Navigationbar from '../../Components/Navbar'

function index() {

  const [width, setWidth ] = useState(0);
  const carousel = useRef();

  useEffect(() => {
      console.log(carousel.current);
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className={CSS.container}>
      <nav className={CSS.navbar}>
        <Navigationbar />
      </nav>
      <div className={CSS.map_container}>
        <MapsApi />
      </div>
      <div className={CSS.component_container}>
        <div className={CSS.filter_container}>
          <Filter />
        </div>
        <div className={CSS.search_output_container}>
        <motion.div className='carousel' ref={carousel} style={{
                cursor: 'grab',
                overflow: 'hidden',
            }}>
                <motion.div className='inner-carousel' drag='x' dragConstraints={{ right: 0, left: -1000 }} whileTap={{ cursor: "grabbing" }} style={{
                    display: 'flex',
                }}>
                  <Results />
                </motion.div>
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default index