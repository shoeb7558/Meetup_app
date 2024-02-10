// pages/meetup-details/[meetupId].js

import MeetupDetails from '../../components/MeetupDetails';

function MeetupDetailsPage({ meetupData }) {
  return (
    <div>
      <h1>Meetup Details</h1>
      <MeetupDetails meetupData={meetupData} />
    </div>
  );
}

export default MeetupDetailsPage;
