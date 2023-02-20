import React,{useEffect,useState} from "react"
import axios from "axios"
import "./App.css"


const App=()=>{
  const [data,setData]=useState({name:"",email:"",password:"",confrimpassword:""})

  const {name,email,password,confrimpassword}=data

  const changeHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    axios.post("https://fir-realtimedb-reactjs-default-rtdb.firebaseio.com/register.json",data).then(
      ()=>alert("Data submitted")
    )
  
  }
  

  return(
    <div>
    
      <center>
        <h1>Fill form to store data in FirebaseDB</h1>
    <form onSubmit={submitHandler}>
      <label className="label1">Name</label>
      <input type="text" onChange={changeHandler} name="name"/>
      <br/>
      <label>Email</label>
      <input type="text" onChange={changeHandler} name="email"/>
      <br/>
      <label>Password</label>
      <input type="password" onChange={changeHandler} name="password"/>
      <br/>
      <label>Confirm Password</label>
      <input type="password" onChange={changeHandler} name="confrimpassword"/>
      <br/>
      <input type="submit" value="Submit" className="btn"/>

    </form>
    </center>
    
    
    </div>
  )
}

export default App;