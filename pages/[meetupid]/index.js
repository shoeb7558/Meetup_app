import React from 'react'
import './MeetupDetails.module.css'

function MeetupDetails() {
  return (
    <div className='details'>
        <img
        src='https://www.vivantahotels.com/content/dam/vivanta/hotels/vbt-aurangabad/gallery/Facade-view_3x2.png/jcr:content/renditions/cq5dam.web.756.756.png'
        alt='A First Meetup'
        />
        <h1>A First Meetup</h1>
        <address>Some Street, Some City</address>
        <p>The meetup description</p>
      
    </div>
  )
}

export default MeetupDetails
