import React from 'react'
import { Card, Button } from 'react-bootstrap'
import CSS from '../index.module.css'
import TestImg1 from '../../../Images/Search/testImage1.png'

function ResultsMain() {

    const cardInfo = [
        { cardImg: '', cardTitle: 'Dorchester Collection', cardText: '45 Park Lane features an on-site fitness studio and a modern American steak restaurant. A striking central staircase leads to a mezzanine featuring a bar, library and a private media room', Wifi:'Free Wifi', numOfRooms:'2 rooms', breakfast: 'Breakfast', parking: '' },
        { cardImg: '', cardTitle: 'Sidney Hotel London', cardText: 'This hotel features bright, modern rooms with Hypnos beds, private bathrooms and 32-inch LED TVs.', Wifi:'', numOfRooms:'2 rooms', breakfast: '', parking: 'Free Parking' },
        { cardImg: '', cardTitle: 'Sidney Hotel London', cardText: 'This hotel features bright, modern rooms with Hypnos beds, private bathrooms and 32-inch LED TVs.', Wifi:'', numOfRooms:'2 rooms', breakfast: '', parking: 'Free Parking' },
        { cardImg: '', cardTitle: 'Sidney Hotel London', cardText: 'This hotel features bright, modern rooms with Hypnos beds, private bathrooms and 32-inch LED TVs.', Wifi:'', numOfRooms:'2 rooms', breakfast: '', parking: 'Free Parking' },
        { cardImg: '', cardTitle: 'Sidney Hotel London', cardText: 'This hotel features bright, modern rooms with Hypnos beds, private bathrooms and 32-inch LED TVs.', Wifi:'', numOfRooms:'2 rooms', breakfast: '', parking: 'Free Parking' },
        { cardImg: '', cardTitle: 'Sidney Hotel London', cardText: 'This hotel features bright, modern rooms with Hypnos beds, private bathrooms and 32-inch LED TVs.', Wifi:'', numOfRooms:'2 rooms', breakfast: '', parking: 'Free Parking' },
        { cardImg: '', cardTitle: 'Sidney Hotel London', cardText: 'This hotel features bright, modern rooms with Hypnos beds, private bathrooms and 32-inch LED TVs.', Wifi:'', numOfRooms:'2 rooms', breakfast: '', parking: 'Free Parking' },
        { cardImg: '', cardTitle: 'Sidney Hotel London', cardText: 'This hotel features bright, modern rooms with Hypnos beds, private bathrooms and 32-inch LED TVs.', Wifi:'', numOfRooms:'2 rooms', breakfast: '', parking: 'Free Parking' }
    ]

  return (
    <div className={CSS.results_container}>
        {cardInfo.map((cardInfomation, key) => (
            <Card key={key} className={CSS.card_container}>
                <Card.Img src={TestImg1} />
                <Button className={CSS.results_card_button}>Book Here</Button>
                <Card.Title>{cardInfomation.cardTitle}</Card.Title>
                <Card.Text>{cardInfomation.cardText}</Card.Text>
                <div className={CSS.card_inner_container}>
                    <Card className={CSS.card_inner}>
                        <Card.Text>{cardInfomation.Wifi}</Card.Text>
                    </Card>
                    <Card className={CSS.card_inner}>
                        <Card.Text>{cardInfomation.numOfRooms}</Card.Text>
                    </Card>
                    <Card className={CSS.card_inner}>
                        <Card.Text>{cardInfomation.breakfast}</Card.Text>
                    </Card>
                    <Card className={CSS.card_inner}>
                        <Card.Text>{cardInfomation.parking}</Card.Text>
                    </Card>
                    <Card className={CSS.card_inner}>
                        <Card.Text>{cardInfomation.parking}</Card.Text>
                    </Card>
                </div>
            </Card>
        ))}
    </div>
  )
}

export default ResultsMain