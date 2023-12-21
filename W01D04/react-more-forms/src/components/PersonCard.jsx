import React from 'react'

const PersonCard = ({person}) => {
    // props =  {person:"red"}
    // console.log(person);
  return (
    <fieldset style={{backgroundColor:person.favColor}}>
        <legend>{person.username} Card</legend>
        <h4>He is {person.age} years old.</h4>
    </fieldset>
  )
}

export default PersonCard