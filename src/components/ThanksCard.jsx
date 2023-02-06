import React from 'react'
import thankYou from '../assets/illustration-thank-you.svg'
import repeat from '../assets/repeat.svg'

const ThanksCard = ({rating, setRating, setSelected}) => {

    function reset () {
        setRating(null)
        setSelected(null)
    }

  return (
    <div className='container thanks'>
        <div className='thanks__hero--container'>
            <div className='thanks__hero--images'>
                <img title='Repeat rating' onClick={reset} className='repeat__icon' src={repeat} alt='repeat icon' />
                <img src={thankYou} alt="thanks hero" />
            </div>
            <span className='total__rating'>You selected {rating} out of 5</span>
        </div>
        <div className='thanks__body'>
            <h1>Thank you</h1>
            <p className='thanks__text'>
                We appreciate you taking the time to give a rating. If you ever need more support, 
                don’t hesitate to get in touch! 
            </p>
        </div>
    </div>
  )
}

export default ThanksCard