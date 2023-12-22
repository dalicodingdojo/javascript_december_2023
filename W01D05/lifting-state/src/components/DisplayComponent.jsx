import React from 'react'

const DisplayComponent = (props) => {
    const { animals } = props
    return (
        <fieldset>
            <legend><h3>Display Component</h3></legend>
            <ul>
                {animals.map((animal, idx) => <li key={idx}>{animal}</li>)}
            </ul>
        </fieldset>
    )
}

export default DisplayComponent