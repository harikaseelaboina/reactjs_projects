const express=require('express');
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const cors=require("cors");

const RegisterSchema=require("./Registerschema.js")
const middleware=require("./middleware.js")

const app=express();
app.use(express.json());
app.use(cors({origin:"*"}))     

// "*" can be used if we want to acess from any domain, if we want to access from particular domain we need to set domain name instaed of *

mongoose.connect("mongodb+srv://harikamem:harikamem@cluster0.4xhp7be.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch((e)=>{console.log(e)})


 
//register router
app.post("/register",async(req,res)=>{
try{
    const {name,email,password,confirmpassword}=req.body;
    
    let checkUserwithemail=await RegisterSchema.findOne({email})

    if(checkUserwithemail){
        return res.status(400).send("User with given email exist");
    }

    if(password!==confirmpassword){
        return res.status(402).send("Password and confirmpassword should be same")
    }

    let newUser=new RegisterSchema({name,email,password,confirmpassword});
    await newUser.save();
    res.status(200).send("Registered Successfully")
}
catch(error){
    console.log(error);
    return res.status(500).send("internal server error");
}

})

//login router
app.post("/login",async(req,res)=>{
try{
   const {email,password}=req.body;
   let givenemailuser=await RegisterSchema.findOne({email});

   if(!givenemailuser){
    return res.status(400).send("Given email not registered,Please register before login")
   }

   if(givenemailuser.password!==password){
     return res.status(402).send("Wrong password")
   }

   let payload={user:{id:givenemailuser.id}}
  
   jwt.sign(payload,"secretkey",{expiresIn:36000000},
                                (error,token)=>{
                                    if(error) throw error;
                                    return res.json({token})  }   )
}
catch(error){
    console.log(error);
    return res.status(500).send("internal server error");
}

})


//myportfolio router(protected router with middleware)

app.get("/myportfolio",middleware,async(req,res)=>{

    try{

        let existingUser= await RegisterSchema.findById(req.user.id)
        if(!existingUser){
            return res.status(400).send("User not found")
        }

        res.json(existingUser)

    }
    catch(error){
        console.log(error);
        return res.status(500).send("internal server error");
    }
    
})

app.listen("5000",()=>{console.log("server running")});
