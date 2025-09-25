const { categoryModel } = require("../../models/categoryModel")
const { subcategoryModel } = require("../../models/subCategoryModels")

const {  subSubCategoryModel } = require("../../models/subSubcategoryModels")

let subSubcategoryCreate = async (req, res) => {
    // console.log(req.body);
    // console.log(req.file);
    let insertobj = { ...req.body }
    if (req.file) {
        if (req.file.filename) {
            insertobj['subSubcategoryImage'] = req.file.filename
        }
    }

    // console.log(insertobj);


    try {
        let subSubcategoryCollection = await subSubCategoryModel(insertobj)
        let subSubcategoryRes = await subSubcategoryCollection.save() //Insert
        obj = {
            status: 1,
            msg: "subSubCategory Added",
            subSubcategoryRes
        }
        res.send(obj)
    }
    catch (err) {
        // console.log(err);

        let errorMessage
        if (err.code == 11000) {
            errorMessage = "subSubCategory name Already Exist..."
        }

        if (err.errors) {
            if (err.errors.subSubcategoryName) {
                errorMessage = err.errors.subSubcategoryName.message
            }
        }

        obj = {
            status: 0,
            errorMessage,

        }
        res.send(obj)
    }


}

let subSubcategoryView = async (req, res) => {

    ///skip(0) Start
    //limit(5) Limit
    //Frontend Page Number Send
    // page key send  ->query
    let skip = 0
    let limit = 5

    if (req.query.limit) {
        limit = req.query.limit;

    }

    if (req.query.page) {
        skip = (req.query.page - 1) * limit

    }
    let subSubcategoryData = await subSubCategoryModel.find().populate('parentCategory', 'categoryName').populate('subCategory', 'subcategoryName') .skip(skip).limit(limit) //5

    let subSubcategoryDatalength = await subSubCategoryModel.find() //[20]
    let obj = {
        status: 1,
        staticPath: process.env.SUBSUBCATEGORYIMAGEPATH,
        subSubcategoryData,

        length: subSubcategoryDatalength.length, //Number of Rows-13
        totPages: Math.ceil(subSubcategoryDatalength.length / limit)//2.3=3
    }

    res.send(obj)
}

let subSubcategoryDelete = (req, res) => {

    let { id } = req.params;
    let obj
    subSubcategoryModel.deleteOne({ _id: id })
        .then((delRes) => {
            obj = {
                status: 1,
                msg: "subSubcategory Delete",
                delRes
            }

            res.send(obj)
        })
        .catch((err) => {
            obj = {
                status: 0,
                err
            }
            res.send(obj)
        })

}
let subSubcategoryUpdate = async (req, res) => {

    let { id } = req.params;
    let obj
    try {
        let subSubcategoryRes = await subSubcategoryModel.updateOne(
            {
                _id: id
            },
            {
                $set: req.body
            }
        )

        obj = {
            status: 1,
            msg: "subSubcategory Updated",
            subSubcategoryRes
        }
        res.send(obj)
    }
    catch (err) {
        // console.log(err);

        let errorMessage
        if (err.code == 11000) {
            errorMessage = "subSubcategory name Already Exist..."
        }

        if (err.errors) {
            if (err.errors.subSubcategoryName) {
                errorMessage = err.errors.subSubcategoryName.message
            }
        }

        obj = {
            status: 0,
            errorMessage,

        }
        res.send(obj)
    }

}

let multiDelete = (req, res) => {
    let { ids } = req.body //Array
    let obj
    subSubcategoryModel.deleteMany({ _id: ids })
        .then((delRes) => {
            obj = {
                status: 1,
                msg: "subSubcategory Delete",
                delRes
            }

            res.send(obj)
        })
        .catch((err) => {
            obj = {
                status: 0,
                err
            }
            res.send(obj)
        })
}


let singleData = async (req, res) => {
    let { id } = req.params;
    let subSubcategoryData = await subSubcategoryModel.findOne({ _id: id })
    let obj = {
        status: 1,
        subSubcategoryData
    }

    res.send(obj)
}


let statusUpdate = async (req, res) => {
    let { ids } = req.body //Array   [ id1,id2 ] 

    //    for(let id of ids){
    //         //Data Get ->Old Status
    //         let oldata=await subSubcategoryModel.findOne({_id:id})
    //         let currentStatu=oldata.subSubcategoryStatus
    //          await subSubcategoryModel.updateOne({_id:id},{$set:{
    //             subSubcategoryStatus:!currentStatu
    //          }})
    //    }
    //
    let updateRes = await subSubcategoryModel.updateMany(
        { _id: ids },
        [
            {
                $set: {
                    subSubcategoryStatus: {
                        $not: "$subSubcategoryStatus"
                    }
                }
            }
        ]
    )
    let obj = {
        status: 1,
        msg: "Status updated",

    }

    res.send(obj)


}


let parentCategory = async (req,res) => {
    let categoryData = await categoryModel.
    find({ categoryStatus: true })
    .select('categoryName')
    
    //5
    let obj = {
        status: 1,
        categoryData

    }

    res.send(obj)
}

let subCategory=async (req,res)=>{
    let {parentid}=req.params
    let subcategoryData = await subcategoryModel.
    find({ subcategoryStatus: true,parentCategory:parentid })
    .select('subcategoryName')
    
    //5
    let obj = {
        status: 1,
        subcategoryData

    }

    res.send(obj)
}
module.exports = {subCategory,parentCategory, subSubcategoryCreate, subSubcategoryView, subSubcategoryDelete, subSubcategoryUpdate, multiDelete, singleData, statusUpdate }