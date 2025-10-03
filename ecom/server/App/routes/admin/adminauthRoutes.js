let express=require("express")
const { adminLogin, adminChangePassword } = require("../../controllers/admin/adminAuthController")
let adminauthRoutes=express.Router()

let multer=require("multer")

const upload = multer()

adminauthRoutes.post('/login',upload.none() ,adminLogin)

adminauthRoutes.put('/change-password/:id',upload.none() ,adminChangePassword)


module.exports={adminauthRoutes}
