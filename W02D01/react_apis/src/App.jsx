import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [fetchSuperHeros, setFetchSuperHeros] = useState([])
  const [axiosSuperHeros, setAxiosSuperHeros] = useState([])
  const [useEffectSuperHeros, setUseEffectSuperHeros] = useState([])
  const fetchAPI = () => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(response => {
        console.log("RESPONSE :", response);
        return response.json()
      })
      .then(response => {
        console.log("FETCH API RESPONSE AS JSON : ", response)
        setFetchSuperHeros(response)
      })
      .catch(error => console.log("FETCH API ERROR :", error))
  }
  const handleClick = (apiCall,stateVariable, setStateVariable) => {
    console.log("State Variable");
    if(stateVariable.length !=0){
      setStateVariable([])
    } else{
      apiCall()
    }
  }
  const axiosAPI = () => {
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
    .then(response => {
      console.log("AXIOS RESPONSE :", response.data)
      setAxiosSuperHeros(response.data)
    })
    .catch(error=> console.log("AXIOS ERROR:", error))
  }
  useEffect(()=>{
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
    .then(response => {
      console.log("UseEffect RESPONSE :", response.data)
      setUseEffectSuperHeros(response.data)
    })
    .catch(error=> console.log("AXIOS ERROR:", error))
  }, [])
  return (
    <fieldset>
      <legend><h1>🦹🏼🦸🏼‍♀️ SuperHeros API 🦹🏼🦸🏼‍♀️</h1></legend>
      {/* <button onClick={fetchAPI}>fetch API</button> */}
      <button onClick={() => handleClick(fetchAPI, fetchSuperHeros, setFetchSuperHeros)}>fetch API</button>
      <button onClick={axiosAPI}>axios API</button>
      <fieldset style={{backgroundColor:"cornflowerblue"}}>
        <legend>
          <h4>Fetch Super Heros Array</h4>
        </legend>
        <table>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Full Name</th>
            <th>Publisher</th>
          </tr>
          {fetchSuperHeros.map(hero=> <tr key={hero.id}>
            <td>{hero.id}</td> 
            <td><img src={hero.images.sm} alt={hero.name}/></td>
            <td>{hero.name}</td>
            <td>{hero.biography.fullName?hero.biography.fullName:"👻 UNKNOWN 👻"}</td>
            <td>{hero.biography.publisher}</td>
          </tr>)}
        </table>
      </fieldset>
      <fieldset style={{backgroundColor:"teal"}}>
        <legend>
          <h4>Axios Super Heros Array</h4>
        </legend>
        <table>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Full Name</th>
            <th>Publisher</th>
          </tr>
          {axiosSuperHeros.map(hero=> <tr key={hero.id}>
            <td>{hero.id}</td>
            <td><img src={hero.images.sm} alt={hero.name}/></td>
            <td>{hero.name}</td>
            <td>{hero.biography.fullName?hero.biography.fullName:"👻 UNKNOWN 👻"}</td>
            <td>{hero.biography.publisher}</td>
          </tr>)}
        </table>
      </fieldset>
      <fieldset style={{backgroundColor:"crimson"}}>
        <legend>
          <h4>UseEffect Super Heros Array</h4>
        </legend>
        <table>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Full Name</th>
            <th>Publisher</th>
          </tr>
          {useEffectSuperHeros.map(hero=> <tr key={hero.id}>
            <td>{hero.id}</td>
            <td><img src={hero.images.sm} alt={hero.name}/></td>
            <td>{hero.name}</td>
            <td>{hero.biography.fullName?hero.biography.fullName:"👻 UNKNOWN 👻"}</td>
            <td>{hero.biography.publisher}</td>
          </tr>)}
        </table>
      </fieldset>
      {/* {JSON.stringify(fetchSuperHeros)} */}
    </fieldset>
  )
}

export default App
