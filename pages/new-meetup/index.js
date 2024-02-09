import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import { useRouter } from 'next/router';

function NewMeetupPage() {
  const Router = useRouter()



    async function addMeetupHandler(enteredMeetupData){
      console.log(enteredMeetupData)
        const response = await fetch('api/new-meetups',{
          method: 'POST',
          body: JSON.stringify(enteredMeetupData),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
      }

        const data = await response.json();
        console.log(data)

        Router.push('/')

    }
  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </div>
  )
}

export default NewMeetupPage
