import React from 'react'
import ColoredLine from '../Components/ColoredLine';
import CardHotelAd from './CardHotelAd';
import CSS from '../CSS/index.module.css'
import {Card , Button} from 'react-bootstrap'
import { AiOutlineUser, AiFillCar } from 'react-icons/ai'
import image from '../../../Images/Search/testImage2.png'


function HotelAdvert() {
  return (
    <div className={CSS.hotelAd_container}>
        <ColoredLine color='grey' />
        <div className={CSS.hotelAd_header}>
          <h1>Your might like...</h1>
          <p>Based on your recent searches, we think you will like this</p>
        </div>
        <div className={CSS.hotelAd_components_container}>
          <div className={CSS.hotelAd_primary_component}>
            <CardHotelAd 
              title="DORCHESTER COLLECTIONS" 
              rating="5.0 / 5.0"
              numOfRooms="2" 
              wifi="Yes"
              breakfast="Yes"
              description="45 Park Lane features an on-site fitness studio and a modern American steak restaurant. A striking central staircase leads to a mezzanine featuring a bar, library and a private mdeia room."
              price="£100"
            />
          </div>
          <div className={CSS.hotelAd_secondary_components_container}>
            <div className={CSS.hotelAd_secondary_components}>
              <Card className={CSS.hotelAd_secondary_card_container}>
                <Card.Img src={image} />
                <Card.Body className={CSS.hotelAd_secondary_card_header}>
                  <Card.Body>
                    <Card.Title>SIDNEY HOTEL LONDON</Card.Title>
                    <Button variant='danger' className={CSS.hotelAd_secondary_card_button}>NEW!</Button>
                    <Card.Text>Rating: 5.0 / 5.0</Card.Text>
                  </Card.Body>
                  <Card.Body className={CSS.hotelAd_secondary_card_details}>
                    <Card.Text><AiOutlineUser />2</Card.Text>
                    <Card.Text><AiFillCar />0</Card.Text>
                  </Card.Body>
                </Card.Body>
                <Card.Text>Features bright, modern rooms with Hypnos beds, private bathrooms and 32-inch LED TVs</Card.Text>
                <Button>Book Now</Button>
              </Card>
            </div>
            <div className={CSS.hotelAd_secondary_components}>
              <Card className={CSS.hotelAd_secondary_card_container}>
                  <Card.Img src={image} />
                  <Card.Body className={CSS.hotelAd_secondary_card_header}>
                    <Card.Body>
                      <Card.Title>SIDNEY HOTEL LONDON</Card.Title>
                      <Button variant='danger' className={CSS.hotelAd_secondary_card_button}>NEW!</Button>
                      <Card.Text>5.0 / 5.0</Card.Text>
                    </Card.Body>
                    <Card.Body className={CSS.hotelAd_secondary_card_details}>
                      <Card.Text><AiOutlineUser />2</Card.Text>
                      <Card.Text><AiFillCar />0</Card.Text>
                    </Card.Body>
                  </Card.Body>
                  <Card.Text>Features bright, modern rooms with Hypnos beds, private bathrooms and 32-inch LED TVs</Card.Text>
                  <Button>Book Now</Button>
                </Card>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HotelAdvert