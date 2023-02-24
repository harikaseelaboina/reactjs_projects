import React, { useState,useEffect } from 'react'
// import firebaseDB from "./firebase/compat/app"


import "./index.css"
import axios from "axios";
import { Router } from 'react-router-dom';



const Home = () => {
    const [data,setData]=useState({name:"",age:"",email:""});

    const [getdata,setGetData]=useState({});

    const {name,age,email}={...data};

    

    // to get data from fire base
    useEffect(()=>{
      axios.get("https://test-5380c-default-rtdb.firebaseio.com/registrationform.json").then(
        response=>setGetData(response.data))
    })

   

// to post data into firebase
const changeHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
}

const submitHandler=async(e)=>{
    e.preventDefault();
    console.log(data)
    var dataAdded=await axios.post("https://test-5380c-default-rtdb.firebaseio.com/registrationform.json",data)
    .then(()=>alert("User Registered Successfully"))
     
    setData({name:"",age:"",email:""})
    
}
const deleteHandler=(key)=>{
  
  axios.delete(`https://test-5380c-default-rtdb.firebaseio.com/registrationform/${key}.json`)

}

  return (
    <div>
      <center>
        <h1 className="head1">Registration Form</h1>
      <form className="form1" onSubmit={submitHandler}>
        
        <label>Name</label>
        <input type="text" name="name" placeholder="Full name" value={name} onChange={changeHandler}/> <br/>
        
        <label>Age</label>
        <input type="text" name="age" placeholder="your age" value={age} onChange={changeHandler}/> <br/>
        
        <label>E-mail</label>
        <input type="text" name="email" placeholder="your email" value={email} onChange={changeHandler}/> <br/>
        
        <input className="btn" type="submit" value="Submit"/>

      </form>
      </center>

      <div className='otputcontainer'>
       <center><h3 className='hed'>Registered Users in firebase DB</h3></center>
        {
          getdata &&
          Object.keys(getdata).map(key=>  
                                        <div className='bg1'>
                                          <p className='para1'>Name:  {getdata[key].name}</p>
                                          <p className='para1'>Age:   {getdata[key].age}</p>
                                          <p className='para1'>Email: {getdata[key].email}</p>
                                          {/* <button className='btn4'>Update</button> */}
                                          <button className='btn5'onClick={()=>deleteHandler(key)}>Delete</button>
                                        </div>
            )
        }
      </div>
      
    </div>
  )
}

export default Home



// .then(()=>alert("User Registered Successfully"))
//       // error=>{
//       //   if(error){
//       //     console.log(error)
//       //   }
      
//       // return alert("User Registered Successfully")
        
//       // })