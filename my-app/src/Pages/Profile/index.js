import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../Images/Logo/S_Logo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

import ProfileCard from '../../Components/ProfilePage/ProfileCard/ProfileCard'
import Collection from '../../Components/ProfilePage/Collection/Main'
import CSS from './index.module.css'

function index() {
  return (
    <div className={CSS.profile_container}>
        <div className={CSS.profile_navbar}>
          <Navbar expand="lg" bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href="/" style={{ fontSize: 40 }}><Link to="/" style={{ textDecoration: 'none', color: '#fff' }}><img src={Logo} style={{ height: 75, width: 150 }} /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link href='#Home'><Link to="/residentPage" style={{ textDecoration: 'none', color: '#fff'}}>Home</Link></Nav.Link>
              <Nav.Link href='#Search' style={{color: '#fff'}}><Link to='/searchPage' style={{ textDecoration: 'none', color: '#fff'}}>Search</Link></Nav.Link>
              <Nav.Link href='#Events' style={{color: '#fff'}}><Link to='/eventsPage' style={{ textDecoration: 'none', color: '#fff'}}>Events</Link></Nav.Link>
              <Nav.Link href='#Contact' style={{color: '#fff'}}>Contact</Nav.Link>
              <Nav.Link href='#Profile'><Link to='/login' style={{ textDecoration: 'none', color: '#fff' }}>Login</Link></Nav.Link>
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
    </div>
  )
}

export default index