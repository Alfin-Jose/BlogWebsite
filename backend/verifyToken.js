const jwt=require('jsonwebtoken');
const verifyToken=(req,res,next)=>{
    const token=req.cookies.token
    if(!token){
        return res.status(401).json("you are not authinticated");

    }
    jwt.verify(token,package.env.SECRET,async (err,data)=>{
    if(err){
        return res.staus(403).json("token is invalid")
    }
    req.userId=data._id  
    next()  
    }
)}
module.exports=verifyToken