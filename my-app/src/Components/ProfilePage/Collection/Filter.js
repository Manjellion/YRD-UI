import React from 'react'
import CSS from '../index.module.css'
import Button from 'react-bootstrap/Button'

function Filter() {
  return (
    <div className={CSS.profile_filterContainer}>
        <Button>View History</Button>
        <Button>Interest</Button>
        <Button>Your Businesses</Button>
    </div>
  )
}

export default Filter