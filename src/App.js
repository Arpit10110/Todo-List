import React from 'react'
import { HashRouter as Router, Routes, Route  } from 'react-router-dom'
import Home from "./Pages/Home.jsx"
import Login from "./Pages/Login.jsx"
import Navbar from "./Components/Navbar.jsx"
import "./Style/Style.css"
import Logout from './Pages/Logout.jsx'
const App = () => {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/profile' element={<Logout/>} />
    </Routes>
   </Router>
  )
}

export default App