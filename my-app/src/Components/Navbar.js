import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfilePic from '../Images/Profile.jpeg'

function Navigationbar() {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">YRD</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href='#Home' style={{color: 'black'}}>Home</Nav.Link>
            <Nav.Link href='#Search' style={{color: 'black'}}>Search</Nav.Link>
            <Nav.Link href='#Events' style={{color: 'black'}}>Events</Nav.Link>
            <Nav.Link href='#Contact' style={{color: 'black'}}>Contact</Nav.Link>
            <Nav.Link href='#Profile'><img src={ProfilePic} style={{ borderRadius: 50}}/></Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    
  )
}

export default Navigationbar