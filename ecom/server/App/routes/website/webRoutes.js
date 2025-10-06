let express=require("express")
const { userauthRoutes } = require("./userAuthRouter")
let webRoutes=express.Router()

webRoutes.use("/user",userauthRoutes)

module.exports={webRoutes}