import React from 'react'
import Card from 'react-bootstrap/Card'
import CSS from '../CSS/index.module.css'

function CardMaker(props) {
  return (
        <Card className={CSS.events_resident_card}>
          <Card.Body className={CSS.events_card_body}>
            <Card.Title className={CSS.events_card_title}>{props.title}</Card.Title>
          </Card.Body>
        </Card> 
  )
}

export default CardMaker