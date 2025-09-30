let mongoose=require("mongoose")
let materialSchema=mongoose.Schema(
    {
       materialName:{
        required: [ true, 'material Name Is required'],
         type:String,
         minLength:2,
         maxLength:30,
         unique:true,
       },
     
       materialOrder:Number,
       materialStatus:{
        type:Boolean,
        default:true
       }
    }
)
let materialModel=mongoose.model("material",materialSchema)
module.exports={materialModel}