let express=require("express")
let mongoose=require("mongoose")
require("dotenv").config()
let App=express()
let cors=require("cors")
const { adminRoutes } = require("./App/routes/admin/adminRoutes")
App.use(cors())
App.use(express.json())

//http://localhost:8000/admin
App.use("/admin",adminRoutes)


//http://localhost:8000
mongoose.connect(process.env.DBCONNECTION)
.then((res)=>{
    App.listen(process.env.PORT)
})

// App.listen("8000",()=>{

// })
