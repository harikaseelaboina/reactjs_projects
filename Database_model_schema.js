const mongoose=require("mongoose");

const TaskScheme=mongoose.Schema({
               task:{type:String,required:true},
               date:{type:Date,default:Date.now}
})

module.exports=mongoose.model("dbname:todolist",TaskScheme);