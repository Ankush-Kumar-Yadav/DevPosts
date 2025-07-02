const express = require('express')
const server=express()
const router=require('./routes/PostRouter')
const dotenv=require('dotenv')
const database = require('./db/database')
const cors=require('cors')
server.use(cors())
server.use(express.json())
dotenv.config()
server.use('/api',router)
server.listen(process.env.PORT,async()=>{
    console.log("server is listening");
    database()
    
})