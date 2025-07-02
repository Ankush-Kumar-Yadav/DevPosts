const postModel=require('../models/postModel')
 
const UpdatePost=async(req,res)=>{
try {
    const {id}=req.params
    const {title,content}=req.body 

    const update=await postModel.findByIdAndUpdate(id,{
        title,
        content 
    })
    console.log("user updated",update);
    
     res.status(201).json({
        massage:"User Updated",
        
      })
    
} catch (error) {
    console.log("upadation error",error);
}
}
module.exports=UpdatePost