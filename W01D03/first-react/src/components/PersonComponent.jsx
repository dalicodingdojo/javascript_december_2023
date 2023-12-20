import React from 'react'

const PersonComponent = (props) => {
  // Destructuring
    const {person} = props
  return (
    <fieldset>
        <legend>Person Card</legend>
        <h2>Username : {person.username}</h2>
        <h2>Age : {person.age}</h2>
        <h2>Favorite Food : {person.favFood}</h2>
    </fieldset>
  )
}

export default PersonComponent