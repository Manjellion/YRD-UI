import React from 'react'

import Button from 'react-bootstrap/Button'

import backgroundImg from '../../Images/Hero-bg.jpeg'
import NavBar from '../../Components/Navbar'

function Hero() {
  return (
    <div>
        <div>
          <img src={backgroundImg} alt="Home" 
            style={{
                width: '100%',
                height: 800,
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
                <NavBar />
              </div>
              <div className='Hero-Text' style={{
                marginTop: 200
              }}>
                <h2 style={{ fontSize: 40}}>DISCOVER</h2>
                <h1 style={{ fontSize: 60}}>ROYAL DOCKS</h1>
                <Button variant='danger'>Search</Button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero