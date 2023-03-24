
import React,{useContext,useState,useEffect} from 'react'
import { Box, Button, Card, CardContent, Grid, Toolbar, Typography , Container} from '@mui/material'
import "./App.css"
import { store } from '../App'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

const Myportfolio = () => {
  const [token,setToken]=useContext(store)

  const [user,setUser]=useState(null);

  useEffect(()=>{
    axios.get("http://localhost:5000/myportfolio",{headers: {"x-token":token} })
    .then(res=>setUser(res.data)).catch(error=>console.log(error))
  },[])

  if(!token){
    return <Navigate to="/login" />
  }

  return (
    <div>
   {user &&
    <Box style={{textAlign:"center",paddingTop:"20px",color:"white"}} className='bg3'   >
      <Toolbar style={{justifyContent:"space-between"}}>
       <Typography variant='h3' > Hey {user.name}! Welcome to Myportfolio </Typography>
       <Box>
       <Typography variant='h5' > Name:  Harika S </Typography>
       <Typography variant='h5' > Full Stack Developer</Typography>
       </Box>
      </Toolbar>
   
      <Grid container spacing={2} style={{margin:"20px"}}>
  <Grid item xs={3} className="card1" style={{margin:"10px",borderRadius:"10px"}}>
  <Card  className='card2'>
      <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Contact
          </Typography>
          <Typography variant="body2"  fontSize="20.5px">
           <p style={{fontWeight:"bold"}}>Phone.No: 9110354523 </p>
           <p>Email: harika.krishna99@gmail.com</p>
           <a href="https://www.linkedin.com/in/harika-s-39284415a" >LinkedIn Profile</a>
 
          </Typography>
        </CardContent>
      </Card>
  </Grid>
  <Grid item xs={4} className="card1" style={{margin:"10px",borderRadius:"10px"}}>
  <Card  className='card2'>
      <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Skills
          </Typography>
          <Typography variant="body2" textAlign="start" fontSize="14px">
          <p style={{fontWeight:"bold"}}>Frontend: HTML, CSS, Bootstrap, Javascript, React, Material UI, Redux </p>
          <p style={{fontWeight:"bold"}}>Backend:   Node.js, Express.js </p>
          <p style={{fontWeight:"bold"}}>Database: MongoDB, SQL, Firebase </p>
          <p style={{fontWeight:"bold"}}>Version Control: Git </p>
           
          </Typography>
        </CardContent>
      </Card>
  </Grid>
  <Grid item xs={4} className="card1" style={{margin:"10px",borderRadius:"10px"}}>
  <Card  className='card2'>
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
            Education
          </Typography>
          <Typography variant="body2" textAlign="start" fontSize="16.5px" >
          <p style={{fontWeight:"bold"}}>
          <li>IIT, Madras - M.Tech <br></br>
          Petroleum Engineering 2020-21 </li><br></br>
         <li>JawaharLal Nehru Technological University, Kakinada - B.Tech <br></br>
         Petroleum Engineering 2013-17</li>
          </p>
          </Typography>
        </CardContent>
      </Card>
  </Grid>
  <Grid item xs={3} className="card1" style={{margin:"10px",borderRadius:"10px"}}>
  <Card  className='card2'>
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
            Experience
          </Typography>
          <Typography variant="body2" textAlign="start" >
          <p style={{fontWeight:"bold"}}>
          <li>Govt.of AP - Administrative Secretary <br></br>
          October 2019 - Present </li><br></br>
         <li>Nxtwave CCBP 4.0 Course-Intensive Skill Development Program <br></br>
         June 2022-Present</li>
          </p>
          </Typography>
        </CardContent>
      </Card>
  </Grid>

  <Grid item xs={8} className="card1" style={{margin:"10px",borderRadius:"10px"}}>
  <Card  className='card2'>
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
            Projects
          </Typography>
          <Typography variant="body2" textAlign="start" >
          <p style={{fontWeight:"bold"}}>
          <li style={{marginTop:"10px"}}>1. Restaurant & Food Website-Static design
            
           <span style={{paddingLeft:"25px"}}> Tech stack: HTML, CSS, Bootstrap Flexbox</span> 
               <a target="blank" href="https://sanhafoods2.ccbp.tech/" style={{paddingLeft:"25px"}}>Project Link</a> 
               </li>

               <li style={{marginTop:"10px"}} >2.To-Do List - Responsive design
            
           <span style={{paddingLeft:"25px"}}> Tech stack: HTML, CSS, JavaScript</span> 
               <a target="blank" href="https://todoapplifinal.ccbp.tech/" style={{paddingLeft:"25px"}}>Project Link</a> 
               </li>

               <li style={{marginTop:"10px"}}>3. Wikipedia Search - Responsive design
            
           <span style={{paddingLeft:"25px"}}> Tech stack: HTML, CSS, JavaScript</span> 
               <a href="https://wikisearchinjs.ccbp.tech/" target="blank" style={{paddingLeft:"25px"}}>Project Link</a> 
               </li>

               <li style={{marginTop:"10px"}}>4. Restaurant - React JS Project
            
           <span style={{paddingLeft:"25px"}}> Tech stack: React.js, Redux, React-Router, JSX</span> 
               <a target="blank" href="https://github.com/harikaseelaboina/reactjs_projects/tree/restaurant-reactjs-full-project/src" style={{paddingLeft:"25px"}}>Project Git Link</a> 
               </li>

               <li style={{marginTop:"10px"}}>5.User Details Registration, Login and Dashboard Form – MERN Project
            
           <span style={{paddingLeft:"25px"}}> Tech stack: React.js, React-Router, Node.js, MongoDB, JWT Tokens, Express.js</span> 
               <a target="blank" href="https://github.com/harikaseelaboina/reactjs_projects/tree/Registration-and-login-form-using-jwtconcepts" style={{paddingLeft:"25px"}}>Project Git Link</a> 
               </li>

        
          </p>
          </Typography>
        </CardContent>
      </Card>
  </Grid>
</Grid>



<Button onClick={()=>setToken(null)} style={{backgroundColor:"white",padding:"10px",color:"black",fontWeight:"bold",fontSize:"20px"}}>Logout</Button>

      
    </Box>
}
</div>
  )
}

export default Myportfolio
