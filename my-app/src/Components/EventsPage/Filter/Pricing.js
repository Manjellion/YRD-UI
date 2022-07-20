import React from 'react'
import Button from 'react-bootstrap/Button'
import CSS from '../index.module.css'

function Price() {
  return (
    <div className={CSS.price_filter}>
        <h2>Price</h2>
        <div className={CSS.price_input_container}>
          <Button>Free</Button>
          <Button>Paid</Button>
        </div>
    </div>
  )
}

export default Price