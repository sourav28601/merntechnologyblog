const mongoose = require('mongoose');


con = "mongodb+srv://souravrajput7975:123@cluster0.zgzyktq.mongodb.net/blog?retryWrites=true&w=majority"

const connectDB=()=>{
    // return mongoose.connect('mongodb://localhost:27017/blog_website') //Database name Blog_website
    return mongoose.connect(con) //Database name Blog_website
    .then(()=>{
        console.log('Connection Successfull....')
    })
    .catch((err)=>{
        console.log(err)
    })
}


module.exports= connectDB