const bcrypt=require('bcrypt')
const userModel=require('../models/userModel')

const signUpUser= async (req,res)=>{
  const {email,password} =req.body

  try {

    const user=await userModel.findOne({email})
    
  } catch (error) {
    
  }
}