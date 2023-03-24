const mongoose=require("mongoose");

const RegisterSchema=mongoose.Schema({
                            name:{type:String,
                                  require:true},
                            email:{type:String,
                                   require:true,
                                   unique:true},
                            password:{type:String,
                                require:true},
                            confirmpassword:{type:String,
                                require:true}
                        })

module.exports=mongoose.model("RegisteredDetailsInDB",RegisterSchema);