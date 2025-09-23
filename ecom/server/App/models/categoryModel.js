let mongoose=require("mongoose")
let categorySchema=mongoose.Schema(
    {
       categoryName:{
        required: [ true, 'category Name Is required'],
         type:String,
         minLength:2,
         maxLength:30,
         unique:true,
       },
       categoryImage:String,
       categoryOrder:Number,
       categoryStatus:{
        type:Boolean,
        default:true
       }
    }
)
let categoryModel=mongoose.model("category",categorySchema)
module.exports={categoryModel}