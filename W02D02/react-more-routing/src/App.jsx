import {Routes, Route, Link, Navigate} from "react-router-dom"
// import './App.css'
import Hero from "./components/Hero"
import Error from "./components/Error"
import Form from "./components/Form"


function App() {

  return (
    <div className="container p-3 m-2">
      <Form/>
    <Routes>
      <Route path="/" element={<><h1>Welcome To Super Heros API Search </h1></>}/>
      {/* <Route path="/" element={<Navigate to={'/hero/1'}/>}/> */}
      <Route path="/hero/:id" element={<Hero/>}/>
      <Route path="/error" element={<Error/>}/>
      <Route path="/*" element={<Error/>}/>
    </Routes>
    </div>
  )
}

export default App
