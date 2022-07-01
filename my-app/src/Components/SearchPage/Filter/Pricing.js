import React from 'react'
import CSS from '../index.module.css'

function Pricing() {
  return (
    <div className={CSS.price_container}>
        <h2>Price</h2>
        <div className={CSS.price_input_container}>
          <input type='text' placeholder='£' />
          -
          <input type='text' placeholder='£££' />
        </div>
    </div>
  )
}

export default Pricing