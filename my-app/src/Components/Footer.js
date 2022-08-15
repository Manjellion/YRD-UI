import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { GrMail } from 'react-icons/gr'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <div style={{ 
                display: 'flex', 
                justifyContent: 'space-around', 
                backgroundColor: 'lightgrey', 
                maxWidth: '100%', 
                marginLeft: 'auto', 
                marginRight: 'auto',
                padding: 50
             }}>
            <div className='footer-Logo'>
                <h1>YRD</h1>
            </div>
            <div className='nav-List'>
                <h3 style={{ textAlign: 'center' }}>All Pages</h3>
                <ul style={{ listStyle: 'none', display: 'grid'}}>
                    <Link to='/' style={{ color: '#000', textDecoration: 'none' }}>Choose another viewer</Link>
                    <Link to='/searchPage' style={{ color: '#000', textDecoration: 'none' }}>Search</Link>
                    <Link to='/eventsPage' style={{ color: '#000', textDecoration: 'none' }}>Events</Link>
                    <Link to='/' style={{ color: '#000', textDecoration: 'none' }}>Contact Us</Link>
                    <Link to='login' style={{ color: '#000', textDecoration: 'none' }}>Login</Link>
                </ul>
            </div>
            <div className='newsletter-container' style={{ width: 300 }}>
                <h3>Newsletter</h3>
                <p style={{ wordWrap: 'break-word'}}>
                    Subscribe to our news letter to get your weekly dose of new updates, tips and special offers.   
                </p>
                <Form>
                    <GrMail style={{
                        position: 'absolute',
                        justifyContent: 'end',
                        marginTop: 10,
                        marginLeft: 10,
                        color: '#F6BE00'
                    }}/>
                    <Form.Control type="email" placeholder="Enter your email address" style={{ paddingLeft: 30 }} />
                    <br />
                    <Button variant="primary">Subscribe</Button>
                </Form>
            </div>
        </div>
    </div>
  )
}

export default Footer