let express=require("express")
const multer  = require('multer')
const { subSubcategoryCreate, subSubcategoryView, parentCategory, subCategory } = require("../../controllers/admin/subsubCategoryController")
let subSubcategoryRoutes=express.Router()

const storage=multer.diskStorage({
    destination:function( req,file,callBack  ){
       callBack(null,"uploads/subsubcategory")
    },
    filename:function( req,file,callBack ){
       callBack(null,Date.now()+file.originalname)
                            //35353453453451.jpg
    }
})

const upload = multer({ storage: storage })

subSubcategoryRoutes.post("/create", upload.single('subSubcategoryImage'), subSubcategoryCreate)
//http://localhost:8000/admin/color/view
subSubcategoryRoutes.get("/view",subSubcategoryView)

subSubcategoryRoutes.get("/parent-category",parentCategory)


subSubcategoryRoutes.get("/sub-category/:parentid",subCategory)



module.exports={subSubcategoryRoutes}