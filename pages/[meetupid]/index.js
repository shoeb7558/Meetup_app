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

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { params: { meetupid: 'm1' } },
            { params: { meetupid: 'm2' } },
            { params: { meetupid: 'm3' } }
        ]
    };
}




export async function getStaticProps(context){
    const { meetupId } = context.params; // Correctly destructure meetupId from context
    console.log(meetupId)
    return {
        props:{
            meetupData: {
                image: 'https://www.vivantahotels.com/content/dam/vivanta/hotels/vbt-aurangabad/gallery/Facade-view_3x2.png/jcr:content/renditions/cq5dam.web.756.756.png',
                id: 'm1', // Ensure that meetupId is properly set
                title: 'First Meetup',
                address: 'Some City',
                description: 'this is the first meetup'
            }
        },
        revalidate: 1
    }
}


export default MeetupDetails
