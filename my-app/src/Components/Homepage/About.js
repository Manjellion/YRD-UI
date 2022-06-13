import React from 'react'
import AboutImg from '../../Images/Homepage/About-us.jpeg'
import Image from 'react-bootstrap/Image'

function About() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: 100, alignItems: 'center'}}>
        <div>
            <div>
                <h1 style={{ fontSize: "8vw" }}>About Us</h1>
                <p style={{ fontSize: "1.5vw" }}>Find out about who we are</p>
            </div>
            <div style={{
                marginRight: 50
            }}> 
                <div style={{
                    width: '100%',
                }}>
                    <h2 style={{ fontSize: '2vw' }}>We bring the community together through collaboration.</h2>
                </div>
                <br />
                <div style={{
                    width: '100%',
                    fontSize: '2vw',
                    fontWeight: 200
                }}>
                    Our team has been working hard on paving the way for new job opportunities for all existing and new residents of the royal dock area. It is our mission to provide a platform where we can bring the area to life through collaboration.
                </div>
            </div>
        </div>
        <div>
            <Image src={AboutImg} fluid={true} width={3000} height='auto' />
        </div>
    </div>
  )
}

export default About