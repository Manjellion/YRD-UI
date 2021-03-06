import React from 'react'
import { Button, Card } from 'react-bootstrap'
import CSS from '../CSS/index.module.css'
import image from '../../../Images/Search/testImage1.png'

function CardHotelAd(props) {
  return (
    <Card className={CSS.hotelAd_primary_card_container}>
        <Card.Img src={image} alt="Hotel Ad image"  />
        <Card.Body>
            <Card.Title className={CSS.hotelAd_primary_card_title}>{props.title}</Card.Title>
            <Card.Text>Rating: {props.rating}</Card.Text>
            <Card.Text>Number of rooms: {props.numOfRooms}</Card.Text>
            <Card.Text>Wifi included: {props.wifi}</Card.Text>
            <Card.Text>Free Breakfast: {props.breakfast}</Card.Text>
            <Card.Text>{props.description}</Card.Text>
            <Card.Text>{props.price} per night</Card.Text>
            <Button>Book Now</Button>
        </Card.Body>
    </Card>
  )
}

export default CardHotelAd