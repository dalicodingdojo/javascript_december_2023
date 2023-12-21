import React, { useState } from 'react'
import Display from './Display'

const Form = (props) => {
    const [input, setInput] = useState("")
    const [animal, setAnimal] = useState("")
    const [zoo, setZoo] = useState(["🦅", "🐻","🐼","🐻‍❄️"])
    const formHandler = (event) => {
        event.preventDefault()
        setAnimal(input)
        zoo.push(input)
        setInput("")
    }
    return (
        <fieldset>
            <legend>Form</legend>
            <form onSubmit={(event) => formHandler(event)}>
                <h4>Input from State : {JSON.stringify(input)}</h4>
                <hr />
                <h4>Animal from State : {JSON.stringify(animal)}</h4>
                <hr />
                <h4>Zoo  from State : {JSON.stringify(zoo)}</h4>
                <p>
                    Add Animal <input type="text" onChange={(e) => setInput(e.target.value)}
                        value={input} />
                </p>
                <button>Submit</button>
            </form>
            <Display animal={animal} />
            {zoo.map((animal, idx) => <Display key={idx} animal={animal}/>)}
        </fieldset>
    )
}

export default Form