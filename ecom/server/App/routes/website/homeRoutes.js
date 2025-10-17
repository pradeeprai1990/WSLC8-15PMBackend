let express=require("express")
const { getProducts, getCategory, getBestsellingproduct } = require("../../controllers/web/homeController")
let homeRoutes=express.Router()


homeRoutes.get('/product/:catId',getProducts)

homeRoutes.get('/category',getCategory)

homeRoutes.get('/best-selling',getBestsellingproduct)



module.exports={homeRoutes}