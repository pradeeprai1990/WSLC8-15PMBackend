let express=require("express")
require("dotenv").config()
let App=express()
let cors=require("cors")
const { adminRoutes } = require("./App/routes/admin/adminRoutes")
App.use(cors())
App.use(express.json())

//http://localhost:8000/admin
App.use("/admin",adminRoutes)


//http://localhost:8000
App.listen("8000")
