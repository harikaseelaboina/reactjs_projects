import React,{useState,useContext} from 'react'
import Box  from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  Container  from '@mui/material/Container';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./App.css"
import { store } from '../App';
import { Navigate } from 'react-router-dom';




const Register = () => {
  const [token,setToken]=useContext(store)
  const [data,setData]=useState({email:"",password:""})

  const changeHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const submitHandler= (e)=>{
    e.preventDefault();
    axios.post("http://localhost:5000/login",data).then(res=>setToken(res.data.token))
    .catch(err=>{
      if (err.response && err.response.status === 400) {
        return alert("Given email not registered,Please register before login")}
      else if(err.response && err.response.status===402){
        return alert("Wrong Password ");
      }
      else{
        return alert(err);
      }
    })
  }

  if(token){
    return <Navigate to="/myportfolio" />
  }

  return (
    
        <div className='bg2'  style={{paddingTop:"5rem"}} >
          <Container>
            <Box   padding="2rem"  display="flex" flexDirection="column" justifyItems="center"  alignItems="center"
            textAlign="center" backgroundColor="#ccd0d9" border="1px solid black">
                <Typography variant='h3'>Login</Typography>
       <form onSubmit={submitHandler}>
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
          type="password"
        />
         <br></br>
        <Button variant="contained" type="submit">Login</Button>
        </form>
        <Link to="/" style={{marginTop:"40px"}} className='btn'>  <Button className='btn' variant="contained" >Back to Home</Button></Link>
      
        </Box>
        </Container>
          </div>
    
  )
}

export default Register
