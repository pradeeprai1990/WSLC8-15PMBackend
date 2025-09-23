let express=require("express")
const multer  = require('multer')
const { categoryCreate, categoryView } = require("../../controllers/admin/categoryController")
let categoryRoutes=express.Router()

const storage=multer.diskStorage({
    destination:function( req,file,callBack  ){
       callBack(null,"uploads/category")
    },
    filename:function( req,file,callBack ){
       callBack(null,Date.now()+file.originalname)
                            //35353453453451.jpg
    }
})

const upload = multer({ storage: storage })

categoryRoutes.post("/create", upload.single('categoryImage'), categoryCreate)
//http://localhost:8000/admin/color/view
categoryRoutes.get("/view",categoryView)

// colorRoutes.delete("/delete/:id",colorDelete)

// colorRoutes.post("/multi-delete",multiDelete)

// colorRoutes.post("/status-update",statusUpdate)

// colorRoutes.get("/edit-color/:id",singleData)

// colorRoutes.put("/update/:id",colorUpdate)



module.exports={categoryRoutes}