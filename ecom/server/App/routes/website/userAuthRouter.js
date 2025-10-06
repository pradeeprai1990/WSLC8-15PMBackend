let express=require("express")
const { sendOTP } = require("../../controllers/web/userAuthController")

let userauthRoutes=express.Router()


userauthRoutes.post('/send-otp',sendOTP)

module.exports={userauthRoutes}