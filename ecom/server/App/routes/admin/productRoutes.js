let express = require("express")
const { getParentcategory, getsubCategory, getsubsubCategory, getColors, getMaterial, productCreate } = require("../../controllers/admin/productController")
const multer = require("multer")
let productRoutes = express.Router()


const storage = multer.diskStorage({
    destination: function (req, file, callBack) {
        callBack(null, "uploads/product")
    },
    filename: function (req, file, callBack) {
        callBack(null, Date.now() + file.originalname)
        //35353453453451.jpg
    }
})

const upload = multer({ storage: storage })


productRoutes.post("/create", upload.fields(
    [
        { name: 'productImage', maxCount: 1 },
        { name: 'backImage', maxCount: 1 },
        { name: 'productGallery', maxCount: 20 },
    ]
), productCreate)

productRoutes.get("/parent-category", getParentcategory)

productRoutes.get("/sub-category/:parentid", getsubCategory)

productRoutes.get("/sub-sub-category/:subid", getsubsubCategory)

productRoutes.get("/colors", getColors)

productRoutes.get("/material", getMaterial)
module.exports = { productRoutes }