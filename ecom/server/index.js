let express=require("express")
let mongoose=require("mongoose")
require("dotenv").config()
let App=express()
let cors=require("cors")
const { adminRoutes } = require("./App/routes/admin/adminRoutes")
const { adminModel } = require("./App/models/adminModel")
const { webRoutes } = require("./App/routes/website/webRoutes")
App.use(cors())
App.use(express.json())

//Website Routes
App.use("/web",webRoutes)


//http://localhost:8000/admin
App.use("/admin",adminRoutes)

//Upload Folder Allow For React App
App.use("/uploads/category",express.static("uploads/category"))
App.use("/uploads/subcategory",express.static("uploads/subcategory"))
App.use("/uploads/subsubcategory",express.static("uploads/subsubcategory"))
// App.use("uploads/product",express.static("/uploads/product"))
//http://localhost:8000
mongoose.connect(process.env.DBCONNECTION)
.then(async (res)=>{

    let checkAdmin=await adminModel.find()  //Array

    if(checkAdmin.length==0){
        await adminModel.insertOne(
            {
                adminEmail:process.env.ADMINEMAIL,
                adminPassword:process.env.ADMINPASSWORD
            }
        )
    }

    App.listen(process.env.PORT)
})

// App.listen("8000",()=>{

// })
