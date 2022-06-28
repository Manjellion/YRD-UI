import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfilePic from '../Images/Homepage/Profile.jpeg'

function Navigationbar() {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/" style={{ fontSize: 40 }}><Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>YRD</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href='#Home' style={{color: '#fff'}}>Home</Nav.Link>
            <Nav.Link href='#Search' style={{color: '#fff'}}>Search</Nav.Link>
            <Nav.Link href='#Events' style={{color: '#fff'}}>Events</Nav.Link>
            <Nav.Link href='#Contact' style={{color: '#fff'}}>Contact</Nav.Link>
            <Nav.Link href='#Profile'><Link to='/login' style={{ textDecoration: 'none', color: '#fff' }}>Login</Link></Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    
  )
}

export default Navigationbar