import React from 'react';
import { MongoClient, ObjectId} from 'mongodb';
import styles from './MeetupDetails.module.css';


function MeetupDetails({ meetupData }) {
    console.log('hoii')
  if (!meetupData) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.details}>
      <h1>hi</h1>
      <img src={meetupData.image} alt={meetupData.title} />
      <h1>{meetupData.title}</h1>
      <address>{meetupData.address}</address>
      <p>{meetupData.description}</p>
    </div>
  );
}

export async function getStaticPaths() {
  try {
    const client = await MongoClient.connect('mongodb+srv://shoebshaikh:ngv9Jg9bfTYCAHKe@cluster1.zxfllfq.mongodb.net/meetups?retryWrites=true&w=majority', {
    });

    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
    console.log(meetups);
    console.log('Fetched meetups successfully');

    client.close();

    return {
      fallback: false,
      paths: meetups.map((meetup) => ({ params: { meetupId: meetup._id.toString() } }))
    };
  } catch (error) {
    console.error('Error fetching meetups:', error);
    return {
      fallback: false,
      paths: []
    };
  }
}

export async function getStaticProps(context) {
  try {
    const meetupId = context.params.meetupId;
    
    
    const client = await MongoClient.connect('mongodb+srv://shoebshaikh:ngv9Jg9bfTYCAHKe@cluster1.zxfllfq.mongodb.net/meetups?retryWrites=true&w=majority', {
      
    });

    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });
    console.log(selectedMeetup);
    console.log('Fetched selected meetup successfully');

    client.close();

    if (!selectedMeetup) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        meetupData:
        {
          id: selectedMeetup._id.toString(),
          title: selectedMeetup.title,
          address: selectedMeetup.address,
          image: selectedMeetup.image,
          description: selectedMeetup.description
        }
      }
    };
  } catch (error) {
    console.error('Error fetching selected meetup:', error);
    return {
      notFound: true,
    };
  }
}

export default MeetupDetails;
