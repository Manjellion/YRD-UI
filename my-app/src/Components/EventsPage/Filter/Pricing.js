import React from 'react'
import CSS from '../index.module.css'

function Price() {
  return (
    <div className={CSS.price_filter}>
        <h2>Price</h2>
        <div className={CSS.price_input_container}>
          <input type='text' placeholder='£50' />
          -
          <input type='text' placeholder='£100' />
        </div>
    </div>
  )
}

export default Price