const express=require("express");
const app=express();
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const RegisterUserSchema=require("./schema");
const middleware=require("./middleware");

const cors=require("cors");

app.use(cors({origin:"*"}));

app.use(express.json());


mongoose.connect("mongodb+srv://login2645:login2645@cluster0.ekoubyf.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log("db connected")})
.catch(err=>console.log(err));

app.get("/",async (req,res)=>{
 return res.send("<h1>hello<h1>")
})

app.post("/register",async(req,res)=>{
    
    try{
        const {fullname,email,password,confirmpassword}=req.body;
        const useremail=await RegisterUserSchema.findOne({email});
        if(useremail){
            return res.status(400).send("User with same email exists")
        }
        if(password!==confirmpassword){
            return res.status(400).send("password not matched with confirmpassword")
        }
        let userdetails=await new RegisterUserSchema({fullname,email,password,confirmpassword})
        await userdetails.save();
        return res.status(200).send("User registered successfully")
           
    }
    catch(err){
        console.log(err);
        return res.status(500).send("server error")
    }
})


app.post("/login",async(req,res)=>{
try{
    const {email,password}=req.body;
    let user=await RegisterUserSchema.findOne({email});
    if(!user){
            return res.status(400).send("User  not found");
    }
    if(user.password!==password){
        return res.status(400).send("wrong password");
    }

    let payload={ user:{id:user.id} } 

    jwt.sign(payload,"secretkey",{expiresIn:36000000},(error,token)=>{
        if (error) throw error;
        return res.json({token});
    })

}
catch(err){
    console.log(err);
    return res.status(500).send("server error")
}
})

// myprofile-protected router

app.get("/myprofile",middleware,async(req,res)=>{
    try{
            
            let existsuser=await RegisterUserSchema.findById(req.user.id);
            if(!existsuser){
                return res.status(400).send("user not found")
            }
            res.json(existsuser);
    }
    catch(error){
               console.log(error);
               return res.status(500).send(error);
    }
})

app.listen(5000,()=>console.log("server running"))
