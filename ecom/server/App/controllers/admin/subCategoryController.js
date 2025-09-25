const { categoryModel } = require("../../models/categoryModel")
const { subcategoryModel } = require("../../models/subCategoryModels")

let subcategoryCreate = async (req, res) => {

    let insertobj = { ...req.body }
    if (req.file) {
        if (req.file.filename) {
            insertobj['subcategoryImage'] = req.file.filename
        }
    }

    // console.log(obj);


    try {
        let subcategoryCollection = await subcategoryModel(insertobj)
        let subcategoryRes = await subcategoryCollection.save() //Insert
        obj = {
            status: 1,
            msg: "subCategory Added",
            subcategoryRes
        }
        res.send(obj)
    }
    catch (err) {
        // console.log(err);

        let errorMessage
        if (err.code == 11000) {
            errorMessage = "subCategory name Already Exist..."
        }

        if (err.errors) {
            if (err.errors.subcategoryName) {
                errorMessage = err.errors.subcategoryName.message
            }
        }

        obj = {
            status: 0,
            errorMessage,

        }
        res.send(obj)
    }


}

let subcategoryView = async (req, res) => {

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
    let subcategoryData = await subcategoryModel.find().populate('parentCategory', 'categoryName').skip(skip).limit(limit) //5

    let subcategoryDatalength = await subcategoryModel.find() //[20]
    let obj = {
        status: 1,
        staticPath: process.env.SUBCATEGORYIMAGEPATH,
        subcategoryData,

        length: subcategoryDatalength.length, //Number of Rows-13
        totPages: Math.ceil(subcategoryDatalength.length / limit)//2.3=3
    }

    res.send(obj)
}

let subcategoryDelete = (req, res) => {

    let { id } = req.params;
    let obj
    subcategoryModel.deleteOne({ _id: id })
        .then((delRes) => {
            obj = {
                status: 1,
                msg: "subcategory Delete",
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
let subcategoryUpdate = async (req, res) => {

    let { id } = req.params;
    let updObj = { ...req.body }
    if (req.file) {
        if (req.file.filename) {
            updObj['subcategoryImage'] = req.file.filename
        }
    }

    let obj
    try {
        let subcategoryRes = await subcategoryModel.updateOne(
            {
                _id: id
            },
            {
                $set: updObj
            }
        )

        obj = {
            status: 1,
            msg: "subcategory Updated",
            subcategoryRes
        }
        res.send(obj)
    }
    catch (err) {
        // console.log(err);

        let errorMessage
        if (err.code == 11000) {
            errorMessage = "subcategory name Already Exist..."
        }

        if (err.errors) {
            if (err.errors.subcategoryName) {
                errorMessage = err.errors.subcategoryName.message
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
    subcategoryModel.deleteMany({ _id: ids })
        .then((delRes) => {
            obj = {
                status: 1,
                msg: "subcategory Delete",
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
    let subcategoryData = await subcategoryModel.findOne({ _id: id })
    let obj = {
        status: 1,
        subcategoryData,
        staticPath: process.env.SUBCATEGORYIMAGEPATH,
    }

    res.send(obj)
}


let statusUpdate = async (req, res) => {
    let { ids } = req.body //Array   [ id1,id2 ] 

    //    for(let id of ids){
    //         //Data Get ->Old Status
    //         let oldata=await subcategoryModel.findOne({_id:id})
    //         let currentStatu=oldata.subcategoryStatus
    //          await subcategoryModel.updateOne({_id:id},{$set:{
    //             subcategoryStatus:!currentStatu
    //          }})
    //    }
    //
    let updateRes = await subcategoryModel.updateMany(
        { _id: ids },
        [
            {
                $set: {
                    subcategoryStatus: {
                        $not: "$subcategoryStatus"
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


let parentCategory = async (req, res) => {
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
module.exports = { parentCategory, subcategoryCreate, subcategoryView, subcategoryDelete, subcategoryUpdate, multiDelete, singleData, statusUpdate }