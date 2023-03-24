import React,{useState} from 'react'
import axios from 'axios';
import Box  from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  Container  from '@mui/material/Container';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import "./App.css"


const Register = () => {
  const [userdata,setUserData]=useState({name:"",email:"",password:"",confirmpassword:""})
  

  const changeHandler=(e)=>{
    setUserData({...userdata,[e.target.name]:e.target.value})
  }
  

  const submitHandler= async (e)=>{
    e.preventDefault();

  
    await axios.post("http://localhost:5000/register",userdata)
    .then(res=>{
      alert(res.data);
      console.log(userdata);
    })
     .catch(err => {
                  if (err.response && err.response.status === 400) {
                     alert("User already exists.")}
                  else if(err.response && err.response.status===402){
                    return alert("Password and confirm password do not match.");
                  }
                  else{
                    return alert(err);
                  }
      })
  
  }

  return (
    <div className='bg2'  style={{paddingTop:"5rem"}}>
        <Container style={{backgroundColor:"#d3dbe0",padding:"10px"}}  >
          <center>
         
           <Box>
            <h1>Register Form</h1>
         <form onSubmit={submitHandler} >
         <TextField
         
          required
          onChange={changeHandler}
           name="name"
          style={{width:"50%",margin:"5px"}}
          id="outlined-required"
          label="Name"
          defaultValue=""
        />
        <TextField
          required
          onChange={changeHandler}
           name="email"
          style={{width:"50%",margin:"5px"}}
          id="outlined-required"
          label="Email"
          defaultValue=""
        />
        <TextField
          required
          onChange={changeHandler}
           name="password"
          style={{width:"50%",margin:"5px"}}
          id="outlined-required"
          label="Password"
          defaultValue=""
        />
        <TextField
          required
          onChange={changeHandler}
           name="confirmpassword"
          style={{width:"50%",margin:"5px"}}
          id="outlined-required"
          label="Confirm Password"
          defaultValue=""
        />
            {/* <input type="text" name="name" placeholder='full name' onChange={changeHandler}/> <br/>
            <input type="email" name="email" placeholder='email' onChange={changeHandler}/><br/>
            <input type="password" name="password" placeholder='password' onChange={changeHandler}/><br/>
            <input type="password" name="confirmpassword" placeholder='confirm your password' onChange={changeHandler}/>
            <br/> */}
            <Box>
        <Button className='btn' variant="contained" type="submit" style={{marginTop:"40px",marginBottom:"20px"}}  >Register</Button>
        
        </Box>
        </form>

        </Box>
        

        <Link to="/" style={{marginTop:"40px"}} className='btn'>  <Button className='btn' variant="contained" >Back to Home</Button></Link>
      
        </center>

       
          </Container>
          </div> 
  )
}

export default Register
