let express=require("express")
const { userauthRoutes } = require("./userAuthRouter")
const { homeRoutes } = require("./homeRoutes")
let webRoutes=express.Router()

webRoutes.use("/user",userauthRoutes)

webRoutes.use("/home",homeRoutes)

module.exports={webRoutes}