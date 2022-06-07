import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfilePic from '../Images/Homepage/Profile.jpeg'

function Navigationbar() {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" style={{color: '#fff', fontSize: 40}}>YRD</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href='#Home' style={{color: '#fff'}}>Home</Nav.Link>
            <Nav.Link href='#Search' style={{color: '#fff'}}>Search</Nav.Link>
            <Nav.Link href='#Events' style={{color: '#fff'}}>Events</Nav.Link>
            <Nav.Link href='#Contact' style={{color: '#fff'}}>Contact</Nav.Link>
            <Nav.Link href='#Profile'><img src={ProfilePic} style={{ borderRadius: 50}}/></Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    
  )
}

export default Navigationbar