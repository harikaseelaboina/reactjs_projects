const express=require('express');
const app=express();
const mongoose=require("mongoose");
const TaskScheme=require("./Database_model_schema");

const cors=require("cors");
app.use(cors({origin:"*"}))

app.use(express.json());

mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://harika2645:harika2645@cluster0.nj4lnwi.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("db connected")).catch(err=>console.log(err))

app.get("/gettasks",async (req,res)=>{
    try{
     return res.json(await TaskScheme.find())
    }
    catch(error){
    console.log(error)
    }
})

app.post("/addtasks",async (req,res)=>{
    const {task}=req.body;
    try{
        const data= new TaskScheme({task})
        await data.save();
     return res.json(await TaskScheme.find())
    }
    catch(error){
    console.log(error)
    }
})

app.delete("/deletetask/:id",async(req,res)=>{
 
    try{
         await TaskScheme.findByIdAndDelete(req.params.id)
         return res.json(await TaskScheme.find())
    }
    catch(error){
    console.log(error)
    }

})

app.listen(8080,()=>{console.log("server Running")});