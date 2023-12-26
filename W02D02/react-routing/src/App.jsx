import {
  Routes, Route, Link, Navigate
} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'
import Content from './components/Content'
import User from './components/User'

function App() {
  return (
    <>
    <div>
      <h1> Routing</h1>
      <a href="/">Home</a> <br />
      <a href="/content">Content</a> <br />
      <a href="/all">All</a>
       <hr />
       <Link to={'/home'}>Home</Link> <br />
       <Link to={'/content'}>Content</Link> <br />
       <Link to={'/all'}>All</Link><br />
       {/* <Link to={'/users/John/hello/31'}>User</Link> */}
    </div>
      <Routes>
        <Route path='/' element={<Navigate to={'/home'}/>}/>
        <Route path='/home' element={<Home />} />
        <Route path='/content' element={<Content />} />
        <Route path='/users/:username/hello/:age' element={<User />} />
        <Route path='/all' element={<>
          <Nav />
          <Home />
          <Content />
          <Footer />
        </>} />
        <Route path='*' element={<><h1>404 NOT FOUND</h1></>}/>
      </Routes>
      {/* <Nav /> */}
      {/* <Home />
      <Content/> */}
      {/* <Footer /> */}
    </>
  )
}

export default App
