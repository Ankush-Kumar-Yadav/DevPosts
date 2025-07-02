const postModel=require('../models/postModel')

const DeletePost=async(req,res)=>{
    try {
        const id=req.params.id
        const deletepost=await postModel.findByIdAndDelete(id)
      res.status(201).json({
        massage:"Post Deleted",
        deletepost
      })

    } catch (error) {
        
    }
}
module.exports=DeletePost