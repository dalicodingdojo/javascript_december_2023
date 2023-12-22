import { useState } from 'react'
import './App.css'
import FormComponent from './components/FormComponent'
import DisplayComponent from './components/DisplayComponent'
import PeopleComponent from './components/PeopleComponent'

function App() {
  const [animals, setAnimals] = useState( ["🦁", "🐱", "🐯"])
  const [people, setPeople] = useState([
    { name: "James", age: 35, favColor: "red" }, 
    { name: "Sarah", age: 41, favColor: "coral" }])
  const createUser = (newUser) => {
    console.log("New User: ",newUser);
    if(newUser.name.length>3){
      setPeople([...people, newUser])
    } else{
      console.log("User must Have a valid Name !");
    }
  }
  return (
    <fieldset>
      <legend><h1>🏋🏼Lifting State🏋🏼</h1></legend>
      <h4>Animals From App.jsx : {JSON.stringify(animals)}</h4>
      <hr />
      <h4>People From App.jsx : {JSON.stringify(people)}</h4>
      <FormComponent animals={animals} setAnimals={setAnimals} createUser={createUser}/>
      <DisplayComponent animals ={animals}/>
      <PeopleComponent people = {people}/>
    </fieldset>
  )
}

export default App
