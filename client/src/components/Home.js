import React from 'react'
// import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import  Box  from '@mui/material/Box';
import { Link } from 'react-router-dom';
import "./App.css"
// import  image from "./images/img1.png"



const Home = () => {
  return (
    <>
<Box style={{height:"100vh"}}>
{/* <Typography variant='h6' margin="10px" justifyContent="center" >Home page</Typography> */}
  <Box  className="bg1" display="flex" flexDirection="column"  alignItems="center"  color="black">
   
    <Typography variant="h2" paddingTop="5rem" >To access my portfolio You need to register</Typography>
    <Typography variant='h4' marginTop="5rem">Regiter Button is present at top right corner</Typography>
    <Typography variant='h4' marginTop="1rem">Please login with Registered Credentials</Typography>

    <Typography variant='h5' marginTop="15rem" >use below credentials to login directly <br></br>
                                          email: harika@gmail.com <br></br>
                                          password: 123456</Typography>
  </Box>

  
</Box>
    </>
  )
}

export default Home
