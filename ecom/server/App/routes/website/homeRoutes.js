let express=require("express")
const { getProducts, getCategory } = require("../../controllers/web/homeController")
let homeRoutes=express.Router()


homeRoutes.get('/product/:catId',getProducts)

homeRoutes.get('/category',getCategory)

module.exports={homeRoutes}