import React from 'react'
import CSS from '../index.module.css'
import ReactStars from 'react-rating-stars-component'

function Ratings() {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    }
  return (
    <div className={CSS.ratings_container}>
        <h2>Star Rating</h2>
        <div className={CSS.ratings_checkbox}>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                isHalf={true}
                activeColor="#ffd700"
            />
        </div>
    </div>
  )
}

export default Ratings