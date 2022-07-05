import React from 'react'
import CSS from '../index.module.css'

function Options() {
  return (
    <div className={CSS.options_container}>
        <h2>Additional Options</h2>
        <div className={CSS.options_list}>
            <ul>
                <li><input type='checkbox'/> Free Wi-Fi</li>
                <li><input type='checkbox'/> Free Breakfast</li>
                <li><input type='checkbox'/> Car Park</li>
                <li><input type='checkbox'/> Gym</li>
            </ul>
        </div>
    </div>
  )
}

export default Options