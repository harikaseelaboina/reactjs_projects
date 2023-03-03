import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';


const Registerform = () => {
    const [data,setData]=useState({fullname:"",email:"",password:"",confirmpassword:""});

    const changeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/register",data).then(res=>alert(res.data))
    }

  return (
    <div className='mt-5'>
        <center>
            <h1>Registration form</h1>
        <form onSubmit={submitHandler}>
            <input type="text" name="fullname" placeholder='type your full name' onChange={changeHandler}/> <br/>
            <input type="email" name="email" placeholder='type your full email' onChange={changeHandler}/><br/>
            <input type="password" name="password" placeholder='type your password' onChange={changeHandler}/><br/>
            <input type="password" name="confirmpassword" placeholder='confirm your password' onChange={changeHandler}/>
            <br/>
            <input type="submit" value="Register"/>
        </form>
        
        <Link to="/" ><button className='btn btn-primary mt-5'>Back to home</button></Link>
        </center>
      
    </div>
  )
}

export default Registerform
