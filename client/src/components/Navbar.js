import React,{useState,useContext} from 'react'
import { Toolbar,Typography,Box } from '@mui/material'
import { Link } from 'react-router-dom';
import { store } from '../App';

const Navbar = () => {
    const [token,setToken]=useContext(store);

  return (
    <div>
        {/* { (!token) &&  */}

      <Toolbar  style={{backgroundColor:"#0390fc",justifyContent:"space-between",marginTop:"5px"}}>


{/* <Box> */}
  <Typography variant="h3" color="white" padding="6px">Portfolio</Typography>
  <Box style={{color:'white', display:"flex" }}>
    <Link to="/register" className='btn'><Typography variant='h6' margin="10px" fontWeight="bold">Register</Typography></Link>
    <Link to="/login" className='btn'><Typography variant='h6' margin="10px" fontWeight="bold">Login</Typography></Link>
  {/* </Box> */}
  </Box>
</Toolbar>
 {/* } */}
    </div>
  )
}

export default Navbar
