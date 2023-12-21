import React from 'react'

const Display = (props) => {
    return (
        <fieldset>
            <legend>Display</legend>
            <h1>{props.animal}</h1>
        </fieldset>
    )
}

export default Display