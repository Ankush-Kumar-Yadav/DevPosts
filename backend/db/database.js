const mongoose=require('mongoose')
const database=async()=>{
      await mongoose.connect(process.env.MONGO_URL)
      console.log("Database connected successfully");
      
}

module.exports=database