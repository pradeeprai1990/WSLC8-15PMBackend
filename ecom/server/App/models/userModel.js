let mongoose=require("mongoose")
let userSchema=mongoose.Schema(
    {
       userName:String,
       userEmail:{
        required: [ true, 'Email Id Is required'],
         type:String,
         minLength:2,
         maxLength:30,
         unique:true,
       },
       userPhone:{
        required: [ true, 'userPhone Is required'],
         type:String,
         minLength:2,
         maxLength:30,
         unique:true,
       },
       userPassword:String,
       
    }
)
let userModel=mongoose.model("user",userSchema)
module.exports={userModel}