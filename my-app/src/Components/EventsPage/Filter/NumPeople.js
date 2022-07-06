import React from 'react'
import CSS from '../index.module.css'
import Button from 'react-bootstrap/Button'

function NumPeople() {
  return (
    <div className={CSS.rooms_container}>
        <h2>Number of Rooms</h2>
        <div className={CSS.rooms_input}>
          <div className={CSS.rooms_input_row}>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button>5+</Button>
          </div>
        </div>
    </div>
  )
}

export default NumPeople