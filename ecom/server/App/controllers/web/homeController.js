const { categoryModel } = require("../../models/categoryModel")
const { productModel } = require("../../models/productModel")


let getCategory=async (req,res)=>{
    

    let category=await categoryModel.find({categoryStatus:true})
    let resObj={
        status:1,
        category,
        
    }

    res.send(resObj)

}


let getProducts=async (req,res)=>{
    let {catId}=req.params

    let product=await productModel.find({parentCategory:catId,productStatus:true})
    let resObj={
        status:1,
        product,
        staticPath:process.env.PRODUCTIMAGEPATH,
    }

    res.send(resObj)

}



let getBestsellingproduct=async (req,res)=>{
    
    let product=await productModel.find({productStatus:true,bestSelling:true})
    let resObj={
        status:1,
        product,
        staticPath:process.env.PRODUCTIMAGEPATH,
    }

    res.send(resObj)

}

module.exports={getProducts,getCategory,getBestsellingproduct}