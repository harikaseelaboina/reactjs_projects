import React, { useState } from 'react'
import "./index.css"

const Home = () => {
    const [updata,setUpdata]=useState({name:"",age:"",email:""});
  return (
    <div>
        <h1 className="head2">Edit Form</h1>
      <form  className="form1">
        <label>Name</label>
        <input type="text" name="name" placeholder="Full name"/> <br/>
        <label>Age</label>
        <input type="text" name="age"placeholder="your age"/> <br/>
        <label>E-mail</label>
        <input type="text" name="email" placeholder="your email"/> <br/>
        <input className="btn" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default Home
