const UserModel = require('../models/User')
const jwt = require('jsonwebtoken');

const CheckUserAuth = async(req,res,next)=>{
    // console.log('hello');
    try{
        const token = req.cookies.jwt;
       
        if(!token){
            res.redirect('/')
        }else{
          
        const verifyuser = jwt.verify(token,'souravrajputrjitgwalior')
        // console.log(verifyuser);
        const user = await UserModel.findOne({_id:verifyuser.userid}) 
        req.user = user
        console.log(user);      
        next();
        }
        
      
    }catch(err){
        console.log(err);
    }
   
}



module.exports = CheckUserAuth