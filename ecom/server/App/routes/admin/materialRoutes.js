let express=require("express")
const { materialCreate, materialView, materialDelete, materialUpdate } = require("../../controllers/admin/materialControllers")
let materialRoutes=express.Router()


materialRoutes.post("/create",materialCreate)

materialRoutes.get("/view",materialView)

materialRoutes.delete("/delete",materialDelete)

materialRoutes.put("/update",materialUpdate)


module.exports={materialRoutes}