import React from 'react'
import Card from 'react-bootstrap/Card'
import CSS from '../CSS/index.module.css'
import image from '../../../Images/Search/testImage1.png'

function Cards(props) {
  return (
    <Card className={CSS.tourist_card_container}>
        <Card.Img src={image} alt='Image of Card' />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.desciprtion}</Card.Text>
            <Card.Body>
                <Card.Text>Rating: {props.rating}</Card.Text>
                <Card.Text>Price: {props.price}</Card.Text>
            </Card.Body>
        </Card.Body>
    </Card>
  )
}

export default Cards