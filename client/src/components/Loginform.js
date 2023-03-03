import React,{useState,useContext} from 'react'
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import { store } from '../App';


const Loginform = () => {
    const [token,setToken]=useContext(store)
    const [data,setData]=useState({email:"",password:""});

    const changeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/login",data).then(res=>setToken(res.data.token))
    }

    if(token){
      return  <Navigate to="/myprofile"/>
    }

  return (
    <div className='mt-5'>
        <center>
            <h1>Login Here</h1>
        <form onSubmit={submitHandler} autoComplete="off">
            
            <input type="email" name="email" placeholder='type your full email' onChange={changeHandler}/><br/>
            <input type="password" name="password" placeholder='type your password' onChange={changeHandler}/><br/>
            
            <input type="submit" value="Login"/>

               </form>

               <Link to="/"  className='mt-5'><button className='btn btn-primary mt-5'>Back to home</button></Link>
     
        </center>
      
    </div>
  )
}




export default Loginform
