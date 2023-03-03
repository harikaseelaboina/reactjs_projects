import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { useState,createContext } from 'react'
import Navbar from "./components/Navbar"
import Registerform from './components/Registerform'
import Loginform from './components/Loginform'
import Dashboard from './components/Dashboard'
import Home from "./components/Home"

export const store=createContext();

const App = () => {
  const [token,setToken]=useState(null)
  return (
    <div>
        <store.Provider value={[token,setToken]}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Registerform/>}/>
      <Route path="/login" element={<Loginform/>}/>
      <Route path="/myprofile" element={<Dashboard/>}/>

      </Routes>
      </BrowserRouter>
      </store.Provider>
    </div>
  )
}

export default App
