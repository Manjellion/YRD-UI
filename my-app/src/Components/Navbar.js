import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfilePic from '../Images/Homepage/Profile.jpeg'

function Navigationbar() {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" style={{ fontSize: 40 }}>YRD</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href='#Home' style={{color: '#000'}}>Home</Nav.Link>
            <Nav.Link href='#Search' style={{color: '#000'}}>Search</Nav.Link>
            <Nav.Link href='#Events' style={{color: '#000'}}>Events</Nav.Link>
            <Nav.Link href='#Contact' style={{color: '#000'}}>Contact</Nav.Link>
            <Nav.Link href='#Profile'><img src={ProfilePic} style={{ borderRadius: 50 }}/></Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    
  )
}

export default Navigationbar