import React,{useState} from 'react'

const PersonComponent = ({person}) => {
    const [age, setAge] = useState(person.age)
    const increaseAge  = () => {
        setAge(age+1)
    }
  return (
    <fieldset>
        <legend>PersonComponent</legend>
        <h4>Username : {person.username}</h4>
        <h4>Age : {age}</h4>
        <h4>Favorite Food : {person.favFood}</h4>
        {/* !⛔🚫<button onClick={increaseAge()}>HappyBirthday</button> */}
        <button onClick={()=> increaseAge()}>HappyBirthday</button>
        <button onClick={increaseAge}>HappyBirthday</button>
    </fieldset>
  )
}

export default PersonComponent