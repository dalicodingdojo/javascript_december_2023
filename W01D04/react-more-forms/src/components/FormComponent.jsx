import React,{useState} from 'react'
import PersonCard from './PersonCard'

const FormComponent = (props) => {
    const [people,setPeople]  = useState([
        {username:"John", age:41, favColor:"red"},
        {username:"Max", age:29, favColor:"green"},
        {username:"Sam", age:64, favColor:"blue"}
    ])
    // First Way
    const [username, setUsername] = useState("")
    // const [username]
    const [favFood, setFavFood] = useState("")
    const [favFoodError, setFavFoodError] = useState("")
    const [age, setAge] = useState(1)
    const [color, setColor] = useState("")
    // Second Way
    const [user,setUser] = useState({username:"", age:1, favColor:""})
    const favFoodHandler = (input) => {
        setFavFood(input)
        if(input.length<3){
            setFavFoodError("Favorite Food Must be at least 3")
        } else {
            setFavFoodError("")
        }
    }
    const addUser = (e) => {
        e.preventDefault()
        console.log(user);
        setPeople([...people,user])
        setUser({username:"", age:1, favColor:""})
    }
  return (
    <fieldset>
        <legend>FormComponent</legend>
        <form onSubmit={(e)=> addUser(e)}>
            <h2>{JSON.stringify(user)}</h2>
            <div>
                <label htmlFor="">Username</label>
                <br />
                {/* <input type="text" onChange={(e) => setUsername(e.target.value)}/> */}
                <input type="text" onChange={(e) => setUser({...user,username:e.target.value})} value={user.username}/>
                {user.username.length<3?<p style={{color:"red"}}>Username must be at least 3</p>:<p style={{color:"green"}}>Username Valid!</p>}
            </div>
            <div>
                <label htmlFor="">Favorite Food</label>
                <br />
                <input type="text" onChange={(e) => favFoodHandler(e.target.value)} value={favFood}/>
                <h4 style={{color:"crimson", backgroundColor:"yellow"}}>{favFoodError}</h4>
            </div>
            <div>
            <label htmlFor="">Age </label>
            <br />
                <input type="number"  onChange={(e) => setUser({...user,age:e.target.value})} value={user.age}/>
            </div>
            <div>
            <label htmlFor="">Favorite Color </label>
            <br />
                <input type="color"  onChange={(e) => setFavFood(e.target.value)} value={favFood}/>
            </div>
            <br />
            <button>Add User</button>
        </form>
        {people.map((person, idx) =>  <PersonCard key={idx} person={person}/>)}
    </fieldset>
  )
}

export default FormComponent