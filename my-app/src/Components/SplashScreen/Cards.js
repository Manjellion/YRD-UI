import React from 'react'
import CSS from './index.module.css'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

function Cards(props) {
  return (
    <Card style={{ width: '20rem' }} className={CSS.card_component}>
        <Card.Img variant="top" src={props.img} />
        <Card.Title style={{ textAlign: 'center'}} className={CSS.card_title}>{props.title}</Card.Title>
        <Card.Body className={CSS.card_body}>
            <Card.Text className={CSS.card_text}>
            {props.description}
            </Card.Text>
        </Card.Body>
        <Button variant='danger' className={CSS.card_button}><Link to={props.button}>Select</Link></Button>
    </Card>
  )
}

export default Cards