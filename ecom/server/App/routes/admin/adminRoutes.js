let express=require("express")
const { colorRoutes } = require("./colorRoutes")
const { materialRoutes } = require("./materialRoutes")
const { categoryRoutes } = require("./categoryRoutes")
const { subcategoryRoutes } = require("./subCategoryRoutes")
const { subSubcategoryRoutes } = require("./subSubCategoryroutes")
const { productRoutes } = require("./productRoutes")

let adminRoutes=express.Router()
//http://localhost:8000/admin/color


adminRoutes.use("/color",colorRoutes)
adminRoutes.use("/material",materialRoutes)
adminRoutes.use("/category",categoryRoutes)
adminRoutes.use("/subcategory",subcategoryRoutes)
adminRoutes.use("/subsubcategory",subSubcategoryRoutes)


adminRoutes.use("/product",productRoutes)
// //http://localhost:8000/admin/login
// adminRoutes.post("/login",(req,res)=>{
//     let obj={
//         status:1,
//         msg:"Login Done"
//     }

//     res.send(obj)
// })

module.exports={adminRoutes}