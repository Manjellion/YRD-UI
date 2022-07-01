import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CSS from './index.module.css'

import ResidentImg from '../../Images/Homepage/How-cards/resident.jpeg'
import TouristImg from '../../Images/Homepage/How-cards/tourist.jpeg'
import BusinessImg from '../../Images/Homepage/How-cards/business.jpeg'

function index() {
  return (
    <div className={CSS.container}>
        <div className={CSS.header_Container}>
            <h1>Who's viewing the page?</h1>
            <p>Choose your option below</p>
        </div>
        <div className={CSS.card_Container}>
            <Card style={{ width: '20rem' }} className={CSS.card_component}>
                <Card.Img variant="top" src={ResidentImg} />
                <Card.Title style={{ textAlign: 'center', padding: 20 }} className={CSS.card_title}>Resident</Card.Title>
                <Card.Body className={CSS.card_body}>
                    <Card.Text>
                    Are you living in breath-taking view of Royal Dock? A riverside industrial district that’s home to ExCeL London, Emirates Cable Car with many things to discover. Click here below to take your Royal Dock to the next level!
                    </Card.Text>
                </Card.Body>
                <Button variant='danger' className={CSS.card_button}><Link to="/residentPage">Select</Link></Button>
            </Card>
            <Card style={{ width: '20rem' }} className={CSS.card_component}>
                <Card.Img variant="top" src={BusinessImg} />
                <Card.Title style={{ textAlign: 'center', padding: 20 }} className={CSS.card_title}>Business Owner</Card.Title>
                <Card.Body className={CSS.card_body}>
                    <Card.Text>
                    If you are a passionate business owner or an entrepreneur living or have a business in Royal Dock, you can augment your concern in highly potential area of Royal Dock. Click here below to take your concern to the peak!
                    </Card.Text>
                </Card.Body>
                <Button variant='danger' className={CSS.card_button}><Link to="/residentPage">Select</Link></Button>
            </Card>
            <Card style={{ width: '20rem' }} className={CSS.card_component}>
                <Card.Img variant="top" src={TouristImg} />
                <Card.Title style={{ textAlign: 'center', padding: 20 }} className={CSS.card_title}>Tourist</Card.Title>
                <Card.Body className={CSS.card_body}>
                    <Card.Text>
                    Are you planning to visit Royal Dock soon? An astonishing tourist destination in the heart of London. Reveal the unseen beauty of O2 arena, Emirates Cable car, Excel exhibition centre and many other eye-catching places.
                    </Card.Text>
                </Card.Body>
                <Button variant='danger' className={CSS.card_button}><Link to="/residentPage">Select</Link></Button>
            </Card>
        </div>
    </div>
  )
}

export default index