const ContactModel = require("../../models/Contact")

class ContactController{
    static contactinsert = async(req,res) =>{
        try{
            const{name,email,phone,message}=req.body
            const result = new ContactModel({
                name:name,
                email:email,
                phone:phone,
                message:message
            })       
            await result.save()
            res.redirect('/contact')  
        }catch(err){
            console.log(err)
        }
    }
    static contactdisplay = async(req,res) =>{ 
        try{
            const result = await  ContactModel.find()
            // console.log(result)
            res.render('admin/contact/contactdisplay',{data:result})    // data ko display page   
        }catch(err){
            console.log(err)
        }
    }
    static viewcontact = async(req,res) =>{
        console.log(req.params.id)
        try{
            const result = await  ContactModel.findById(req.params.id)
            // console.log(result)
            res.render('admin/contact/viewcontact',{data:result})
        }catch(err) 
        {
            console.log(err)
        }
    }
    static editcontact = async(req,res) =>{
        console.log(req.params.id)
        try{
            const result = await ContactModel.findById(req.params.id)
            // console.log(result)
            res.render('admin/contact/editcontact',{data:result})
        }catch(err) 
        {
            console.log(err)
        }
    }
    static contactupdate= async(req,res) =>{
        // console.log(req.params.id)
        // console.log(req.body)
        try{
            const result = await  ContactModel.findByIdAndUpdate(req.params.id,req.body)
            console.log(result)
            res.redirect('/admin/contactdisplay');
        }catch(err) 
        {
         console.log(err)
        }
    }
    static deletecontact = async(req,res) =>{
        // console.log(req.params.id)
        // console.log(req.body)
        try{
            const result = await ContactModel.findByIdAndDelete(req.params.id)
            // console.log(result)
            res.redirect('/admin/contactdisplay');
        }catch(err) 
        {
         console.log(err)
        }
    }
} 



module.exports=ContactController