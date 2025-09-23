let mongoose=require("mongoose")
let subcategorySchema=mongoose.Schema(
    {
       subcategoryName:{
        required: [ true, 'category Name Is required'], //Topwear
         type:String,
         minLength:2,
         maxLength:30,
         unique:true,
       },
       parentCategory:{
             type: mongoose.Schema.Types.ObjectId, //Obejct Id Men ->Object Id
             ref: 'category'   
       },
       subcategoryImage:String,
       subcategoryOrder:Number,
       subcategoryStatus:{
        type:Boolean,
        default:true
       }
    }
)
let subcategoryModel=mongoose.model("subcategory",subcategorySchema)
module.exports={subcategoryModel}