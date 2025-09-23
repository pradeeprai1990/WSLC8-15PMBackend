let express=require("express")
const multer  = require('multer')
const { subcategoryCreate, subcategoryView, parentCategory } = require("../../controllers/admin/subcategoryController")
let subcategoryRoutes=express.Router()

const storage=multer.diskStorage({
    destination:function( req,file,callBack  ){
       callBack(null,"uploads/subcategory")
    },
    filename:function( req,file,callBack ){
       callBack(null,Date.now()+file.originalname)
                            //35353453453451.jpg
    }
})

const upload = multer({ storage: storage })

subcategoryRoutes.post("/create", upload.single('subcategoryImage'), subcategoryCreate)
//http://localhost:8000/admin/color/view
subcategoryRoutes.get("/view",subcategoryView)

subcategoryRoutes.get("/parent-category",parentCategory)


module.exports={subcategoryRoutes}