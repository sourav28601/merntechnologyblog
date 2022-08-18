const StudentModel = require("../models/Student.js")
// const TeacherModel = require("../models/Teacher.js")

class CurdController{
    static Createform =async(req,res)=>{
        res.render('curd/create');
    }
    static InsertData=async(req,res)=>{
        // console.log(req.body.name);
        // console.log('hello data insert');
        // res.render('curd/create');
        try{
            const{name,email}=req.body
            const result = new StudentModel({
                name:name,
                email:email
            })
            //saving data
            await result.save()
            res.redirect('/curd/create')//route ka url jispe apko puchna h use
        }catch(err){
            console.log(err)
        }
    }

    // static DisplayCurd=async(req,res)=>{
    //    try{
    //       const result = await StudentModel.find()
    //     //   console.log(result)
    //       res.render('/curd/display',{data:result});
    //    }catch(err){
    //        console.log(err)
    //    }     

    // }

    static displaydata = async(req,res) =>{
        try{
            const result = await StudentModel.find()
            // console.log(result)
            res.render('curd/display',{data:result})    // data ko display page   
        }catch(err){
            console.log(err)
        }
    
    }
    static curdview = async(req,res)=>{ 
        // res.render('curd/view')
        console.log(req.params.id) // to get id in terminal or console by params
        try{
            const result = await StudentModel.findById(req.params.id);
            console.log(result)
            res.render('curd/view',{data:result})
        }catch(err){
            console.log(err)
        }
    }
    static editcurd = async(req,res) =>{
        // console.log(req.params.id)
        // console.log(req.body)
        try{
            const result = await StudentModel.findById(req.params.id)
            // console.log(result)
            res.render('curd/edit',{data:result})
        }catch(err) 
        {
            console.log(err)
        }
    }
    static updatecurd = async(req,res) =>{
        // console.log(req.params.id)
        // console.log(req.body)
        try{
            const result = await StudentModel.findByIdAndUpdate(req.params.id,req.body)
            // console.log(result)
            res.redirect('/curd/display');
        }catch(err) 
        {
         console.log(err)
        }
    }
    static deletecurd = async(req,res) =>{
        // console.log(req.params.id)
        // console.log(req.body)
        try{
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            // console.log(result)
            res.redirect('/curd/display');
        }catch(err) 
        {
         console.log(err)
        }
    }

}


module.exports = CurdController;
