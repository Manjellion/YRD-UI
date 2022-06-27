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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim debitis autem dicta, dolores exercitationem perspiciatis totam hic magnam fuga quibusdam asperiores consequatur eaque veniam ea aliquam cumque accusantium pariatur sunt.
                    </Card.Text>
                </Card.Body>
                <Button variant='danger' className={CSS.card_button}><Link to="/residentPage">Select</Link></Button>
            </Card>
            <Card style={{ width: '20rem' }} className={CSS.card_component}>
                <Card.Img variant="top" src={BusinessImg} />
                <Card.Title style={{ textAlign: 'center', padding: 20 }} className={CSS.card_title}>Business Owner</Card.Title>
                <Card.Body className={CSS.card_body}>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quaerat! Animi repellat vitae a. Ipsum quis natus, impedit, excepturi, doloribus consequatur deleniti possimus nisi consectetur inventore modi incidunt animi cupiditate?
                    </Card.Text>
                </Card.Body>
                <Button variant='danger' className={CSS.card_button}><Link to="/residentPage">Select</Link></Button>
            </Card>
            <Card style={{ width: '20rem' }} className={CSS.card_component}>
                <Card.Img variant="top" src={TouristImg} />
                <Card.Title style={{ textAlign: 'center', padding: 20 }} className={CSS.card_title}>Tourist</Card.Title>
                <Card.Body className={CSS.card_body}>
                    <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorem nobis autem cumque quo accusamus explicabo, impedit sint eos expedita. Magni error repellat reprehenderit, culpa dolorem earum alias consequuntur quod.
                    </Card.Text>
                </Card.Body>
                <Button variant='danger' className={CSS.card_button}><Link to="/residentPage">Select</Link></Button>
            </Card>
        </div>
    </div>
  )
}

export default index