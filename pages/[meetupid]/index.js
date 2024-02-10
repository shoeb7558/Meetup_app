import React from 'react'
import { MongoClient, ObjectId } from 'mongodb';}
import './MeetupDetails.module.css'

function MeetupDetails(props) {
  return (
    <div className='details'>
        <img src={props.meetupData.image} />
        <h1>{props.meetupData.title}</h1>
        <address>{props.meetupData.address}</address>
        <p>{props.meetupData.description}</p>
      
    </div>
  )
}


export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://shoebshaikh:ngv9Jg9bfTYCAHKe@cluster1.zxfllfq.mongodb.net/meetups?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

      const db = client.db();
      const meetupsCollection = db.collection('meetups');

      const meetups = await meetupsCollection.find({},{_id:1}).toArray()
    
    return {
        fallback: false,
        paths: meetups.map(meetup =>({ params: { meetupId: meetup._id.toString()}}))
    };
}




export async function getStaticProps(context){
    const meetupId = context.params.meetupId

    const client = await MongoClient.connect('mongodb+srv://shoebshaikh:ngv9Jg9bfTYCAHKe@cluster1.zxfllfq.mongodb.net/meetups?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

      const db = client.db();
      const meetupsCollection = db.collection('meetups');

      const selectedMeetups = await meetupsCollection.findOne({_id: ObjectId(meetupId)})

      client.close()
    // const { meetupId } = context.params; // Correctly destructure meetupId from context
    // console.log(meetupId)
    return {
        props:{
            meetupData: {
                id: selectedMeetups._id.toString(),
                title: selectedMeetups.title,
                address: selectedMeetups.address,
                image: selectedMeetups.image,
                description: selectedMeetups.description
            }
        }
    }
}


export default MeetupDetails
