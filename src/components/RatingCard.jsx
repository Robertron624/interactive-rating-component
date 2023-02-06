import React from 'react'
import star from '../assets/icon-star.svg'

const RatingCard = () => {
  return (
    <>
        <div className='container'>
            <div className="star-container">
                <img src={star} alt="star icon" />
            </div>
            <h1>How did we do?</h1>
            <p className='rating-text'>
                Please let us know how we did with your support request. All feedback
                is appreciated to help us improve our offering!
            </p>
            <button className='submit-btn'>Submit</button>
        </div>
    </>
  )
}

export default RatingCard