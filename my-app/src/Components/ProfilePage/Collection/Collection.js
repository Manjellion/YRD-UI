import React from 'react'
import CSS from '../index.module.css'

function Collection() {
  return (
    <div className={CSS.collection_collectionsContainer}>
        <div className={CSS.collection_collection_card}>
            <img src='https://www.dorchestercollection.com/wp-content/uploads/the-dorchester-exterior-square.jpg' alt='Image' />
            <h3>Collection</h3>
            <p>Hotel</p>
        </div>
        <div className={CSS.collection_collection_card}>
            <img src='https://www.dorchestercollection.com/wp-content/uploads/the-dorchester-exterior-square.jpg' alt='Image' />
            <h3>Charity Event</h3>
            <p>Event</p>
        </div>
        <div className={CSS.collection_collection_card}>
            <img src='https://www.dorchestercollection.com/wp-content/uploads/the-dorchester-exterior-square.jpg' alt='Image' />
            <h3>Sports Event</h3>
            <p>Event</p>
        </div>
    </div>
  )
}

export default Collection