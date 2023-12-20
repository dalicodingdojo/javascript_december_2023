import './App.css';
import FirstComponent from './components/FirstComponent';
import PersonComponent from './components/PersonComponent';
function App() {
  console.log("Hello From App.js");
  const message = "Message From App.js 🎈🎈🎈"
  const number  = 23
  const isAdmin  = true
  const animals  = ["leopard 🐆", "giraffe 🦒 ","zebra 🦓", "elephant 🐘", "monkey 🐵", "lion 🦁"];
  const user = {username:"John", age:41, favFood:"🍣", hobbies:{name:"football", icon:"⚽"}}
  const people = [
    {username:"John", age:41, favFood:"🍣"}, 
    {username:"Alex", age:35, favFood:"🍕"},
    {username:"Sarah", age:23, favFood:"🍔"}];
  return (
    <fieldset >
      <legend>❄️❄️ App.js ❄️❄️</legend>
      <h1>Hello From App.js</h1>
      <h2>What we are going to do today ?</h2>
      <ol>
        <li>Create React App</li>
        <li>Understand React App Folder Structure </li>
        <li>Display HTML content</li>
        <li> Display Variables (1)
          <ul>
            <li>Strings</li>
            <li>Numbers</li>
            <li>Booleans</li>
          </ul>
        </li>
      </ol>
      <h4>Message  : {message}</h4>
      <h4 >Number  : {number}</h4>
      <h4 >Is Admin  : {isAdmin? "Yes He is":"No he is not"}</h4>
      {/*animals.map((animal, index)=><h6 key={index}> {animal}</h6>)*/}
      <h6>User : {JSON.stringify(user)}</h6>
      <h5>
        Username : {user.username} <br />
        Age : {user.age} <br />
        Favorite Food : {user.favFood} <br />
        Hobbies : {JSON.stringify(user.hobbies)} <br />
      </h5>
      <FirstComponent animals={animals} number={55}/>
      <hr />
      {people.map((person, idx) => <PersonComponent key={idx} person={person}/>)}
    </fieldset>
  );
}

export default App;
