let express=require("express")
const { colorCreate, colorView, colorDelete, colorUpdate } = require("../../controllers/admin/colorContollers")
let colorRoutes=express.Router()


colorRoutes.post("/create",colorCreate)
//http://localhost:8000/admin/color/view
colorRoutes.get("/view",colorView)

colorRoutes.delete("/delete",colorDelete)

colorRoutes.put("/update",colorUpdate)


module.exports={colorRoutes}