import React from 'react'
import './PeopleComponent.css'
const PeopleComponent = ({people}) => {
  return (
    <fieldset>
        <legend> <h2>PeopleComponent</h2></legend>
        <div className='people-container'>
        {people.map((person ,idx)=> <div key={idx} className='person' style={{backgroundColor:person.favColor}}>
            <h2>{person.name}</h2>
            <h4>Age : {person.age}</h4>
        </div>)}
        </div>
    </fieldset>
  )
}

export default PeopleComponent