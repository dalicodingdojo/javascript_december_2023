import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './components/Home'
import CreateMovie from './components/CreateMovie'
import UpdateMovie from './components/UpdateMovie'


function App() {

  return (
    <div className=' bg-success'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to={'/home'} />} />
        {/* Home All Movies Route path '/home' */}
        <Route path='/home' element={<Home />} />
        {/* Create Movie Route path '/movies/new' */}
        <Route path='/movies/new' element={<CreateMovie/>}/>
        {/* Update Movie Route path '/movies/:id/edit' */}
        <Route path='/movies/:id/edit' element={<UpdateMovie/>}/>
      </Routes>
    </div>
  )
}

export default App
