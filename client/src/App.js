import React,{useState,createContext} from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home'
import Login from './components/Login'
import Myportfolio from './components/Myportfolio'
import Navbar from './components/Navbar'
import Register from './components/Register'

export const store=createContext();

const App = () => {
  const [token,setToken]=useState(null);
  return (
    <div>
      <store.Provider value={[token,setToken]}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/register" element={<Register/>}  />
        <Route path="/login" element={<Login/>}  />
        <Route path="/myportfolio" element={<Myportfolio/>}/>
      </Routes>
      </BrowserRouter>
      </store.Provider>
    </div>
  )
}

export default App
