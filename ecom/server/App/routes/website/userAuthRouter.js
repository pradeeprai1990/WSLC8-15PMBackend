let express=require("express")
const { sendOTP, createUser, userLogin } = require("../../controllers/web/userAuthController")

let userauthRoutes=express.Router()


userauthRoutes.post('/send-otp',sendOTP)
userauthRoutes.post('/create',createUser)
userauthRoutes.post('/login',userLogin)
module.exports={userauthRoutes}