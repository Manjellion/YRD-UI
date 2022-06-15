import React from 'react'

import Button from 'react-bootstrap/Button'

import backgroundImg from '../../Images/Homepage/Hero-bg.jpeg'

import Navbar from '../Navbar'

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
              </div>
              <Navbar />
              <div className='Hero-Text' style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
                top: 300,
              }}>
                <h2 style={{ fontSize: '5vw'}}>DISCOVER</h2>
                <h1 style={{ fontSize: '8vw'}}>ROYAL DOCKS</h1>
                <Button variant='danger'>Search</Button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero