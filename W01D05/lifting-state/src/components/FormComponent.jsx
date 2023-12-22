import React, { useState } from 'react'
import styleFromModule from './FormComponent.module.css'

const FormComponent = ({animals,setAnimals, createUser}) => {
    const [user, setUser] = useState({name:"", age:18,favColor:""})
    // console.log("PROPS FROM APP.JSX : ", props);
    const buttonHandler =  ()=> {
        // animals.push("🦝")
        console.log("Animals After push :",animals);
        // await setAnimals(animals)
        setAnimals([...animals, "🦝"])
    }
    const formHandler = (e)=> {
        e.preventDefault()
        // console.log(e);
        createUser(user)
        setUser({name:"", age:18,favColor:""})
    }
  return (
    <fieldset>
        <legend><h3>Form Component</h3></legend> 
        <h4>Animals in From Component.jsx : {JSON.stringify(animals)}</h4>
        <button onClick={buttonHandler}>Add Racoon 🦝</button>
        <hr />
        <form onSubmit={formHandler}>
            <h4>New User State Variable : {JSON.stringify(user)}</h4>
            <p> Name :  <input type="text" className={styleFromModule.input}
             onChange={(e)=> setUser({...user, name:e.target.value}) }
             value={user.name}
             /></p>
            <p> Age :  <input type="number" 
            onChange={(e)=> setUser({...user, age:e.target.value}) }
            value={user.age}
            className={styleFromModule.input}
            /></p>
            <p> Favorite Color :  <input type="color"  
            onChange={(e)=> setUser({...user, favColor:e.target.value}) }
            value={user.favColor}
            className={styleFromModule.input}
            /></p>
            <br />
            <button className={styleFromModule.button}>Add User</button>
        </form>
    </fieldset>
  )
}

export default FormComponent