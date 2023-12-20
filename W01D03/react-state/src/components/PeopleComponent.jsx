import React from 'react'

const PeopleComponent = ({people}) => {
    return (
        <fieldset>
            <legend>PeopleComponent</legend>
            {people.map((person, idx)=> { return (<fieldset key={idx}>
                <legend>Person Card</legend>
                <h4>Username : {person.username}</h4>
            </fieldset>)})}
        </fieldset>
    )
}

export default PeopleComponent