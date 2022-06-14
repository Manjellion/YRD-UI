import React from 'react'
import Card from 'react-bootstrap/Card'

function test() {
  return (
    <div>
        <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body style={{ textAlign: 'center' }}>
                <Card.Title>Residents</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body style={{ textAlign: 'center' }}>
                <Card.Title>Business Owners</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body style={{ textAlign: 'center' }}>
                <Card.Title>Tourists</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default test