import React, { useEffect } from 'react'
import CSS from './CSS/index.module.css'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import AboutImg from '../../Images/Homepage/About-us.jpeg'
import Image from 'react-bootstrap/Image'

function About() {

    const { ref, inView } = useInView({
        threshold: 0.2
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
                x: 500,
                opacity: 0.1
            })
            childAnimtion.start({
                y: 200,
                opacity: 0
            })
        }
        console.log('use effect hook, inView = ', inView)
    }, [inView]);

  return (
    <div className={CSS.about_container} ref={ref}>
            <div className={CSS.about_text_container}>
                <div className={CSS.about_text_heading}>
                    <h1 className={CSS.about_heading}>About Us</h1>
                    <p>Find out about who we are</p>
                </div>
                <div> 
                    <br />
                    <div className={CSS.about_content_text}>
                        Our team has been working hard on paving the way for new job opportunities for all existing and new residents of the royal dock area. It is our mission to provide a platform where we can bring the area to life through collaboration.
                    </div>
                </div>
        </div>
        <motion.div animate={animation}>
            <Image className={CSS.about_img} src={AboutImg} fluid={true} width={3000} height='auto' />
        </motion.div>
    </div>
  )
}

export default About