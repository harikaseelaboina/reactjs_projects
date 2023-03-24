const jwt=require("jsonwebtoken");

module.exports= function(req,res,next){
                
            try{
                let token= req.header("x-token");

                if(!token){
                    return res.status(400).send("Token not found");
                }

                let decodetoken=jwt.verify(token,"secretkey")

                 req.user=decodetoken.user;  
                 next() ;      
                 
                 
                //  we will get same payload given in index.js, when we decode jwt token as below
                //  let payload={user:{id:givenemailuser.id}}

            }



            catch(error){
               console.log(error);
               return res.status(500).send("Invalid token")
            }
               
            

  }