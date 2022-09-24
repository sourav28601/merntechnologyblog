const UserModel = require('../../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserController{
    static register = async(req,res)=>{
        res.render('user/registration',{message:req.flash('error')})
    }
    static registerinsert = async(req,res)=>{
        // console.log(req.body);
        const{username,email,password,confirmpassword}=req.body
        const user = await UserModel.findOne({email:email})
        if(user){
            req.flash('error','this email is already registered')
            return res.redirect('/register')
        }else{
            if(username && email  && password && confirmpassword){
                if(password === confirmpassword){
                    try{
                        const salt = await bcrypt.genSalt(10)
                        const hashpassword =await bcrypt.hash(password,salt)
                        const result = new UserModel({
                            username:username,
                            email:email,
                            password:hashpassword,
                        })
                        await result.save()
                        req.flash('error','Registration Successfully')
                    return res.redirect('/login')
                    }catch(err){
                        console.log(err);
                    }
                }else{
                    req.flash('error','password does not match')
                    return res.redirect('/register')
                }

            }else{
                req.flash('error','all field are required')
                return res.redirect('/register')
            }
        }
    }
    static verifylogin = async(req,res)=>{   console.log(req.body);
        // res.render('user/registration')
        try{
            const{email,password}=req.body
            const User = await UserModel.findOne({email:email})
            // console.log(User)
            if(User!=null){
                const isMatch = await bcrypt.compare(password,User.password)
                if((User.email==email)&& isMatch){
                    // generate token
            
                    const token = jwt.sign({ userid: User._id }, 'souravrajputrjitgwalior');
                    // console.log(token);
                    res.cookie('jwt',token)
                    res.redirect('/admin/dashboard')
                }else{
                    req.flash('error','email and password does not match')
                    res.redirect('/login')
                }
            }else{
                req.flash('error','you are not registered user')
                res.redirect('/login')
            }

        }catch(err){
            console.log(err);
        }
    }
    static logout = async(req,res)=>{
        try{
            res.clearCookie('jwt')
            res.redirect('/')
        }catch(err){
            console.log(err);
        }
    }

}

module.exports = UserController;