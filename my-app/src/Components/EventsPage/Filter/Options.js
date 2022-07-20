import React from 'react'
import CSS from '../index.module.css'

function Options() {
  return (
    <div className={CSS.options_container}>
        <h2>Additional Options</h2>
        <div className={CSS.options_list}>
            <ul>
                <li><input type='checkbox'/> Sports</li>
                <li><input type='checkbox'/> Gaming</li>
                <li><input type='checkbox'/> Charity</li>
                <li><input type='checkbox'/> Concert</li>
            </ul>
        </div>
    </div>
  )
}

export default Options