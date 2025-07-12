const postModel=require('../models/postModel')
const userModel=require('../models/userModel')

const getAllPosts=async(req,res)=>{
     
    try {
    
    const fdata=await postModel.find();
    
    
    if(!fdata){
         return res.status(404).json({
                success: false,
                message: "Data not found"
            });
    }
    res.status(200).json({
        success:true,
        fdata
    })
    } catch (error) {
         console.error("Error fetching  posts:", error);
        res.status(500).json({
            success: false,
            message: "Error fetching posts",
            error: error.message
        });
    }
  
}
module.exports=getAllPosts;