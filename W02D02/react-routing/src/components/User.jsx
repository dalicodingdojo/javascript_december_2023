import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    console.log("useParams Content :", useParams())
    const { username, age } = useParams()
    return (
        <fieldset>
            <legend>User</legend>
            <h2> Username : {username} <br />
                Age : {age}
            </h2>
        </fieldset>
    )
}

export default User