const bcrypt=require('bcrypt')
const userModel=require('../models/userModel')
const jwt=require('jsonwebtoken')

const createUser=async(req,res)=>{
      try {
        const{name,email,password,role}=req.body
        if(!name||!email||!password||!role){
            res.status(400).json({
                massage:"Something is missing",
                success:false
            })
        }
const hashPassword=await bcrypt.hash(password,10)
const newUser=new userModel({
    name:name,
    email:email,
    password:hashPassword,
    role:role,
    post:[]
})

const newUserCreated=await newUser.save()
const token=await jwt.sign({id:newUserCreated._id},"tarzen",{expiresIn:'2hr'})

res.status(201).json({
    massage:"user created successfully",
    newUserCreated,
    token
})


      } catch (error) {
        console.error("User registration unsuccessful", error);
    res.status(400).json({
      message: "Registration failed",
      error: error.message
    });

      }
}

module.exports=createUser