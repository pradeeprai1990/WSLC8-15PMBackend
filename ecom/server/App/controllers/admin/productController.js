// const { colorModel } = require("../../models/colorModel")

const { categoryModel } = require("../../models/categoryModel")
const { colorModel } = require("../../models/colorModel")
const { materialModel } = require("../../models/materialModels")
const { productModel } = require("../../models/productModel")
const { subcategoryModel } = require("../../models/subCategoryModels")
const { subSubCategoryModel } = require("../../models/subSubcategoryModels")
const { materialRoutes } = require("../../routes/admin/materialRoutes")


let productCreate = async (req, res) => {
    // console.log(req.body);
    // console.log(req.file);
    let insertobj = { ...req.body }
    console.log(req.files);
    
    if (req.files) {
        if (req.files.productImage) {
            insertobj['productImage'] =req.files.productImage[0].filename
        }
  

    
        if (req.files.backImage) {
            insertobj['backImage'] =req.files.backImage[0].filename
        }
  

  
        if (req.files.productGallery) {
            
            insertobj['productGallery'] =req.files.productGallery.map((v)=>v.filename)
        }
    }


    // console.log(insertobj);
    
    // // if (req.file) {
    // //     if (req.file.filename) {
    // //         insertobj['backImage'] = req.file.filename
    // //     }
    // // }

    // res.send("Hello")

    // // console.log(insertobj);


    try {
        let productModelCollection = await productModel(insertobj)
        let productRes = await productModelCollection.save() //Insert
        obj = {
            status: 1,
            msg: " product Added",
            productRes
        }
        res.send(obj)
    }
    catch (err) {
        // console.log(err);

        let errorMessage
        if (err.code == 11000) {
            errorMessage = " product name Already Exist..."
        }

        if (err.errors) {
            if (err.errors.productName) {
                errorMessage = err.errors.productName.message
            }
        }

        obj = {
            status: 0,
            errorMessage,

        }
        res.send(obj)
    }


}

let getParentcategory = async (req, res) => {
    let categoryData = await categoryModel.
        find({ categoryStatus: true })
        .select('categoryName')
    let obj = {
        status: 1,
        categoryData

    }

    res.send(obj)
}


let getsubCategory = async (req, res) => {
    let { parentid } = req.params
    let subcategoryData = await subcategoryModel.
        find({ subcategoryStatus: true, parentCategory: parentid })
        .select('subcategoryName')

    //5
    let obj = {
        status: 1,
        subcategoryData

    }

    res.send(obj)
}


let getsubsubCategory = async (req, res) => {
    let { subid } = req.params
    let subsubCategoryData = await subSubCategoryModel.
        find({ subSubcategoryStatus: true, subCategory: subid })
        .select('subSubcategoryName')

    //5
    let obj = {
        status: 1,
        subsubCategoryData

    }

    res.send(obj)
}


let getColors = async (req, res) => {
    let colorData = await colorModel.
        find({ colorStatus: true })
        .select('colorName')
    let obj = {
        status: 1,
        colorData

    }

    res.send(obj)
}


let getMaterial = async (req, res) => {
    let materialData = await materialModel.
        find({ materialStatus: true })
        .select('materialName')
    let obj = {
        status: 1,
        materialData

    }

    res.send(obj)
}
module.exports = {productCreate, getParentcategory, getsubCategory, getsubsubCategory, getColors, getMaterial }