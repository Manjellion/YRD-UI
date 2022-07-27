import React from 'react'
import CSS from '../index.module.css'
import Button from 'react-bootstrap/Button'

function NumPeople() {
  return (
    <div className={CSS.rooms_container}>
        <h2>Number of People</h2>
        <div className={CSS.rooms_input}>
          <div className={CSS.rooms_input_row}>
            <Button>10</Button>
            <Button>20</Button>
            <Button>25+</Button>
          </div>
        </div>
    </div>
  )
}

export default NumPeople