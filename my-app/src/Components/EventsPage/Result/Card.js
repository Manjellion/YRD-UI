import React from 'react'
import { Button, Card } from 'react-bootstrap'
import CSS from '../index.module.css'
import { MdDateRange, MdOutlineCategory } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'

function Cards(props) {
  return (
    <div>
        <Card className={CSS.card_container}>
            <Card.Body className={CSS.card_inner_container}>
                <Card.Img src={props.imgUrl} className={CSS.card_img} />
                <Card.Body>
                    <Card.Title className={CSS.card_title}>{props.title}</Card.Title>
                    <Card.Body className={CSS.info_icon_cotainer}>
                        <Card.Text><MdDateRange /> {props.date}</Card.Text>
                        <Card.Text><CgProfile /> {props.capacity}</Card.Text>
                        <Card.Text><MdOutlineCategory /> {props.catergory}</Card.Text>
                    </Card.Body>
                    <Card.Text className={CSS.card_text}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate veniam suscipit in magni similique, sed eligendi possimus odit aliquam ad atque rerum hic quibusdam voluptatibus quisquam repellendus consequatur ipsam dolore!
                    </Card.Text>
                    <Button>Join</Button>
                </Card.Body>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Cards