const BlogModel = require('../models/Blog');
const CategoryModel = require('../models/Category');

class BlockController{
    static home =async(req,res) =>{
        try{
            const result = await BlogModel.find()
            // console.log(result);
            res.render('home',{data:result})

        }catch(err){
            console.log(err);
        }
        res.render('home')
    }
    static detail = async(req,res) =>{
        try{
            // console.log(req.params.id)
            const result = await BlogModel.findById(req.params.id)
            const cat = await CategoryModel.find()
            // console.log(result);
            res.render('detail',{data:result,cname:cat})
        }catch(err){
            console.log(err);
        }  
    }
    static DisplayCategory=async(req,res)=>{
        try{
           const result = await StudentModel.find()
         //   console.log(result)
           res.render('/admin/blogdisplay',{data:result});
        }catch(err){
            console.log(err)
        }     
 
     }
    static about = (req,res) =>{
        res.render('about')
    }
    static contact = (req,res) =>{
        res.render('contact')
    }
    // static blog = (req,res) =>{
    //     res.render('blog')
    // }
    static blog =async(req,res) =>{
        try{
            const result = await BlogModel.find()
            // console.log(result);
            res.render('blog',{data:result})

        }catch(err){
            console.log(err);
        }       
    }
    static login = (req,res) =>{
        res.render('login',{message:req.flash('error')})
    }
  
    static dashboard = (req,res) =>{
        res.render('dashboard')
    }
}

module.exports = BlockController