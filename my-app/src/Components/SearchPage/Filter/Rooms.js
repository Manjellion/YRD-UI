import React from 'react'
import { Button } from 'react-bootstrap'
import CSS from '../index.module.css'

function Rooms() {
  return (
    <div className={CSS.rooms_container}>
        <h2>Number of Rooms</h2>
        <div className={CSS.rooms_input}>
          <div className={CSS.rooms_input_row}>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3+</Button>
          </div>
        </div>
    </div>
  )
}

export default Rooms