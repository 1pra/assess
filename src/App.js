import React from 'react'
import {BrowserRouter as  Router,  Route, Routes } from 'react-router-dom'
import Home from './Home'
import HeadTail from './HeadTail'
import About from './About'

const App = () => {
  return (
    <div>
      <center>
        <Router>        
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/headtail' element={<HeadTail/>} />
          </Routes>
        </Router>
      </center>
    </div>
  )
}

export default App
