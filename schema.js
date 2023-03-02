const mongoose=require("mongoose");

const RegisterUserSchema=mongoose.Schema({
    fullname:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    // mobile:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    confirmpassword:{type:String,required:true}
})

module.exports=mongoose.model("dbname:register details",RegisterUserSchema);