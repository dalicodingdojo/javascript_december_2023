import './App.css';
import { useState } from 'react';
import PeopleComponent from './components/PeopleComponent';
import PersonComponent from './components/PersonComponent';

function App() {
  const number  = 23
  // Create state variable using useState
  /*
  useState is a function that takes the default value of the state variable
  and return an array of 2 elements : 
         1 - stateVariable => getter 👁️
         2 - setter for the state variable (function) = > setter 
  */
  const [numberStateVariable, setNumberStateVariable] = useState(23)
  const user = {username:"John", age:41, favFood:"🍣", hobbies:{name:"football", icon:"⚽"}}
  const people = [
    {username:"John", age:41, favFood:"🍣"}, 
    {username:"Alex", age:35, favFood:"🍕"},
    {username:"Sarah", age:23, favFood:"🍔"}];
    const [age, setAge] = useState(user.age)
    const increaseAge =()=>{
      setAge(age+1)
    }
  return (
    <fieldset>
      <legend>App.js</legend>
      <h3>
        App User <br />
        Name : {user.username} <br />
        Age : {age} <br />
        Favorite Food : {user.favFood} <br />
        <button onClick={increaseAge}>Happy BirthDay</button>
        <br />
        Favorite Number :  {numberStateVariable} <br />
        <button onClick={() =>setNumberStateVariable(numberStateVariable+1)}>Increment FavNumber 🆙⬆️</button>
      </h3>
      <hr />
      <PeopleComponent people = {people}/>
      {people.map((person, idx)=><PersonComponent key={idx} person={person}/>)}
      {people.map((person, idx)=><PersonComponent key={idx} person={person}/>)}
      {/* {people.map((person, idx)=><PersonComponent key={idx} person={person}/>)}
      {people.map((person, idx)=><PersonComponent key={idx} person={person}/>)} */}
    </fieldset>
  );
}

export default App;
