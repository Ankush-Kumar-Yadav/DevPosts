const mongoose=require('mongoose')
const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
      content:{
        type:String,
        required:true
    }
},{timestamps:true})

const postModel=mongoose.model("posts",postSchema)

module.exports=postModel;