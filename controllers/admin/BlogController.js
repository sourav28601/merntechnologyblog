const BlogModel = require("../../models/Blog")
// const CategoryModel = require("../../models/Category")


class BlogController{
    static createblog=async(req,res)=>{
        res.render('admin/blog/createblog')
    }
    //insert
    static bloginsert = async(req,res)=>{
        try{
            const{title,description,image}=req.body
            const result = new BlogModel({
                title:title,
                description:description,
                image:req.file.filename
            })
            //saving data
            await result.save()
            res.redirect('/admin/createblog')//route ka url jispe apko puchna h use
        }catch(err){
            console.log(err)
        }
    }
    static displayblog = async(req,res) =>{ 
        try{
            const result = await BlogModel.find()
            // console.log(result)
            res.render('admin/blog/displayblog',{data:result})    // data ko display page   
        }catch(err){
            console.log(err)
        }
    }
    static viewblog = async(req,res) =>{
        console.log(req.params.id)
        try{
            const result = await BlogModel.findById(req.params.id)
            // console.log(result)
            res.render('admin/blog/viewblog',{data:result})
        }catch(err) 
        {
            console.log(err)
        }
    }
    static editblog = async(req,res) =>{
        console.log(req.params.id)
        try{
            const result = await BlogModel.findById(req.params.id)
            // console.log(result)
            res.render('admin/blog/editblog',{data:result})
        }catch(err) 
        {
            console.log(err)
        }
    }
    static Updateblog = async(req,res) =>{
        console.log(req.params.id)
        console.log(req.body)
        // try{
        //     if(req.file){
        //         var imagefile = req.file.filename
        //     }
        //     const result = await BlogModel.findByIdAndUpdate(req.params.id,{
        //         title:req.body.title,
        //         description:req.body.description,
        //         image:imagefile
        //     })
        //     // console.log(result)
        //     res.redirect('/admin/displayblog');
        // }catch(err) 
        // {
        //  console.log(err)
        // }
    }
    static deleteblog = async(req,res) =>{
        // console.log(req.params.id)
        // console.log(req.body)
        try{
            const result = await BlogModel.findByIdAndDelete(req.params.id)
            // console.log(result)
            res.redirect('/admin/displayblog');
        }catch(err) 
        {
         console.log(err)
        }
    }
    
} 
module.exports=BlogController