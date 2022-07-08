import { Card, Button } from 'react-bootstrap'
import React from 'react'
import CSS from '../index.module.css'

function ProductInfo() {
  return (
    <div className={CSS.product_card_container}>
        <div className={CSS.product_card}>
            <Card>
                <Card.Body>
                    <Card.Title className={CSS.product_card_title}>DORCHESTER COLLECTIONS</Card.Title>
                    <Card.Text className={CSS.product_card_rating}>5.0</Card.Text>
                    <Card.Text className={CSS.product_card_price}>£100 p/n</Card.Text>
                    <Card.Text>Overlooking Hyde Park, 45 Park Lane features an onsite fitness studio and a modern American steak restaurant. A striking central staircase leads to a mezzanine featuring a bar, library and a private media room.</Card.Text>
                    <Card.Body className={CSS.product_cardPerks_container}>
                        <Button className={CSS.product_card_perks}>Free Wifi</Button>
                        <Button className={CSS.product_card_perks}>2 Rooms</Button>
                        <Button className={CSS.product_card_perks}>Breakfast</Button>
                    </Card.Body>
                    <Button className={CSS.product_card_button}>Book Now</Button>
                </Card.Body>
            </Card>
        </div>
        <div className={CSS.product_card_options_container}>
            <h1>You might like...</h1>
            <div className={CSS.product_card_options_innerContainer}>
                <Card className={CSS.product_card_options}>
                    <Card.Title className={CSS.product_card_options_text}>Sidney Hotel London</Card.Title>
                </Card>
                <Card className={CSS.product_card_options}>
                    <Card.Title className={CSS.product_card_options_text}>Sidney Hotel London</Card.Title>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default ProductInfo