import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetupPage() {
    function addMeetupHandler(enteredMeetupData){
        console.log(enteredMeetupData)

    }
  return (
    <div>
      <NewMeetupForm onaddMeetup={addMeetupHandler}/>
    </div>
  )
}

export default NewMeetupPage
