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
    },
    {
        id: 'm3',
        title: 'A collage Party',
        image: 'https://www.itchotels.com/content/dam/itchotels/in/umbrella/welcomHotel/hotels/welcomhotelramainternational-aurangabad/images/headmast/desktop/welcomhotel-rama-international.png',
        address: 'some place in some city',
        discription: 'yearly party'
    }
]


function HomePage(props) {
    return (
    <div>     
      <MeetupList meetups={props.meetups}/>      
    </div>
  )
}

// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;

//     return {
//         props:{
//             meetups: DUMMY_MEETUPS
//         },
        
//     }
// }


export async function getStaticProps(){
    return {
        props:{
            meetups: DUMMY_MEETUPS
        },
        revalidate: 1
    }
}

export default HomePage
