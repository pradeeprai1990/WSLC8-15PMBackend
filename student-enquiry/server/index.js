let express=require("express")
const { dbConnect } = require("./config/dbConnection")
let cors=require("cors")
require("dotenv").config()
let App=express()
App.use(cors())
App.use(express.json())
//Student 
App.post("/student/insert",async (req,res)=>{ 
    let {fullName,email,phone}=req.body
    let insertObj={
        fullName,
        email,
        phone
    }
    let db=await dbConnect()
    //Collection Table Create
    let student=await db.collection("student") //Student table
    let insertRes=await student.insertOne(insertObj)
    let obj={
        status:1,
        msg:"Enquiry Added ",
        insertRes
    }
    res.send(obj)
})

App.get("/student/view", async (req,res)=>{
    let db=await dbConnect()
    let student=await db.collection("student") 
    let data= await student.find().toArray()
    let obj={
        status:true,
        data
    }
    res.send(obj)
})

// App.post("/student/delete")


// App.post("/student/update")






App.listen(process.env.PORT,()=>{
    console.log("Server Start");
    
})