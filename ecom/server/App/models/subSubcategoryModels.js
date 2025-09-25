let mongoose=require("mongoose")
let subSubcategorySchema=mongoose.Schema(
    {
       subSubcategoryName:{
        required: [ true, 'category Name Is required'], //T-Shirts
         type:String,
         minLength:2,
         maxLength:30,
         unique:true,
       },
       parentCategory:{ //Men
             type: mongoose.Schema.Types.ObjectId, //Obejct Id Men ->Object Id
             ref: 'category'   
       },
       subCategory:{ //Topwear
             type: mongoose.Schema.Types.ObjectId, //Obejct Id Men ->Object Id
             ref: 'subcategory'   
       },
       subSubcategoryImage:String,
       subSubcategoryOrder:Number,
       subSubcategoryStatus:{
        type:Boolean,
        default:true
       }
    }
)
let subSubCategoryModel=mongoose.model("subsubcategory",subSubcategorySchema)
module.exports={subSubCategoryModel}