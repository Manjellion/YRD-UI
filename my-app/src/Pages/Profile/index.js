import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../Images/Logo/S_Logo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

import ProfileCard from '../../Components/ProfilePage/ProfileCard/ProfileCard'
import Collection from '../../Components/ProfilePage/Collection/Main'
import Footer from '../../Components/Footer'
import CSS from './index.module.css'

function index() {
  return (
    <div className={CSS.profile_container}>
        <div className={CSS.profile_navbar}>
          <Navbar expand="lg" variant='dark'>
          <Container>
            <Navbar.Brand href="/" style={{ fontSize: 40 }}><Link to="/" style={{ textDecoration: 'none', color: '#fff' }}><img src={Logo} style={{ height: 75, width: 150 }} /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link href='#Home'><Link to="/residentPage" style={{ textDecoration: 'none', color: '#000'}}>Home</Link></Nav.Link>
              <Nav.Link href='#Search' style={{color: '#000'}}><Link to='/searchPage' style={{ textDecoration: 'none', color: '#000'}}>Search</Link></Nav.Link>
              <Nav.Link href='#Events' style={{color: '#000'}}><Link to='/eventsPage' style={{ textDecoration: 'none', color: '#000'}}>Events</Link></Nav.Link>
              <Nav.Link href='#Contact' style={{color: '#000'}}>Contact</Nav.Link>
              <Nav.Link href='#Profile'><Link to='/login' style={{ textDecoration: 'none', color: '#000' }}>Login</Link></Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>        
        </div>
        <div className={CSS.profile_components}>
          <div>
            <ProfileCard />
          </div>
          <div>
            <Collection />
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default index