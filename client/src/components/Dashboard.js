import React,{useContext,useEffect, useState,} from 'react'
import { store } from '../App'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {
    const [token,setToken]=useContext(store);
    const [data,setData]=useState(null)
    useEffect(()=>{
        axios("http://localhost:5000/myprofile",{headers:{"x-token":token}}).then(res=>setData(res.data)).catch(err=>console.log(err))
},[])
    if(!token){
        return <Navigate to="/login"/>
    }

    const logoutHandler=(e)=>{
        e.preventDefault();
        setToken(null)
    }
  return (
    <div>
        {data &&
         
      <center>hello {data.fullname},
            welcome to your dashboard 
            <h1>here are your profile details</h1>
            <p>Name:{data.fullname}</p>
            <p>email:{data.email}</p>
            <p>Password:{data.password}</p>
            </center>}
      
    <center>
    <Link to="/"><button className="btn btn-primary mt-5" onClick={logoutHandler}>LogOut</button></Link>
    </center>
    </div>
  )
}

export default Dashboard
