import React from 'react'

import AboutImg from '../../Images/About-us.jpeg'

function About() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', margin: 50, alignItems: 'center'}}>
        <div>
            <div>
                <h1>About Us</h1>
                <p>Find out about who we are</p>
            </div>
            <div>
                <div style={{
                    width: '75%'
                }}>
                    <h2>We bring the community together through collaboration.</h2>
                </div>
                <br />
                <div style={{
                    width: '75%'
                }}>
                    Our team has been working hard on paving the way for new job opportunities for all existing and new residents of the royal dock area. It is our mission to provide a platform where we can bring the area to life through collaboration.
                </div>
            </div>
        </div>
        <div>
            <img src={AboutImg} alt="About"
            style={{
                height: 300,
                width: 450
            }}
            />
        </div>
    </div>
  )
}

export default About