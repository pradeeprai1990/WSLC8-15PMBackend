let express=require("express")
const { sendOTP, createUser, userLogin, changePassword } = require("../../controllers/web/userAuthController")
const { checkToken } = require("../../middleware/checkToken")

let userauthRoutes=express.Router()


userauthRoutes.post('/send-otp',sendOTP)
userauthRoutes.post('/create',createUser)
userauthRoutes.post('/login',userLogin)

userauthRoutes.post('/change-password',checkToken,changePassword)
module.exports={userauthRoutes}