const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
      name:{
        type:String,
        required:true
      },
       email:{
        type:String,
        required:true
      },
       password:{
        type:String,
        required:true
      },
      role:{
        type:String,
    enum:["admin","user"]
      },
      post:[{
     post_id:{type:mongoose.Schema.Types.ObjectId,
     ref:'posts'},
     title:String,
     content:String
      }]
},{timestamps:true})
const userModel= mongoose.model("User",userSchema)

module.exports=userModel;