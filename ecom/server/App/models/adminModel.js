let mongoose=require("mongoose")
let adminSchema=mongoose.Schema(
    {
       adminEmail:{
        required: [ true, 'Color Name Is required'],
         type:String,
         minLength:2,
         maxLength:30,
         unique:true,
       },
       adminPassword:{
         type:String, //#ccc
         minLength:2,
         maxLength:30,
       } 
    }
)
let adminModel=mongoose.model("admin",adminSchema)
module.exports={adminModel}