import React from 'react'
import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://www.vivantahotels.com/content/dam/vivanta/hotels/vbt-aurangabad/gallery/Facade-view_3x2.png/jcr:content/renditions/cq5dam.web.756.756.png',
        address: 'some place in some city',
        discription: 'get together'
    },
    {
        id: 'm2',
        title: 'A office Party',
        image: 'https://www.itchotels.com/content/dam/itchotels/in/umbrella/welcomHotel/hotels/welcomhotelramainternational-aurangabad/images/headmast/desktop/welcomhotel-rama-international.png',
        address: 'some place in some city',
        discription: 'Monthly party'
    }
]


function HomePage() {
  return (
    <div>
      
      
      <MeetupList meetups={DUMMY_MEETUPS}/>
      
    </div>
  )
}

export default HomePage
