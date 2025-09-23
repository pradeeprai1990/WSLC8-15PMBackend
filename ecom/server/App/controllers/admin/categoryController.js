const { categoryModel } = require("../../models/categoryModel")

let categoryCreate = async (req, res) => {
   
    let insertobj={...req.body} //{ categoryName: 'Men', categoryOrder: '1' }
    if(req.file){
        if(req.file.filename){
            insertobj['categoryImage']=req.file.filename
        }
    }
    
    // console.log(obj);
    
    
  try {
        let categoryCollection = await categoryModel(insertobj)
        let categoryRes = await categoryCollection.save() //Insert
        obj = {
            status: 1,
            msg: "Category Added",
            categoryRes
        }
        res.send(obj)
    }
    catch (err) {
        // console.log(err);

        let errorMessage
        if (err.code == 11000) {
            errorMessage = "Category name Already Exist..."
        }

        if (err.errors) {
            if (err.errors.categoryName) {
                errorMessage = err.errors.categoryName.message
            }
        }

        obj = {
            status: 0,
            errorMessage,

        }
        res.send(obj)
    }


}

let categoryView = async (req, res) => {

    ///skip(0) Start
    //limit(5) Limit
    //Frontend Page Number Send
    // page key send  ->query
    let skip=0
    let limit=5
    
    if(req.query.limit){
        limit=req.query.limit;
        
    }

    if(req.query.page){
        skip=(req.query.page-1)*limit
        
    }
    let categoryData = await categoryModel.find().skip(skip).limit(limit) //5

    let categoryDatalength = await categoryModel.find() //[20]

    let obj = {
        status: 1,
         staticPath:process.env.CATEGORYIMAGEPATH,
        categoryData,
       
        length:categoryDatalength.length, //Number of Rows-13
        totPages: Math.ceil(categoryDatalength.length/limit)//2.3=3
    }

    res.send(obj)
}

let categoryDelete = (req, res) => {

    let { id } = req.params;
    let obj
    categoryModel.deleteOne({ _id: id })
        .then((delRes) => {
            obj = {
                status: 1,
                msg: "category Delete",
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
let categoryUpdate = async (req, res) => {
    
    let { id } = req.params;
    let obj
    try {
        let categoryRes = await categoryModel.updateOne(
            {
                _id: id
            },
            {
                $set: req.body
            }
        )

        obj = {
            status: 1,
            msg: "category Updated",
            categoryRes
        }
        res.send(obj)
    }
    catch (err) {
        // console.log(err);

        let errorMessage
        if (err.code == 11000) {
            errorMessage = "category name Already Exist..."
        }

        if (err.errors) {
            if (err.errors.categoryName) {
                errorMessage = err.errors.categoryName.message
            }
        }

        obj = {
            status: 0,
            errorMessage,

        }
        res.send(obj)
    }

}

let multiDelete = (req,res) => {
    let { ids } = req.body //Array
    let obj
    categoryModel.deleteMany({ _id: ids })
        .then((delRes) => {
            obj = {
                status: 1,
                msg: "category Delete",
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


let singleData=async (req,res)=>{
    let {id}=req.params;
     let categoryData = await categoryModel.findOne({_id:id})
    let obj = {
        status: 1,
        categoryData
    }

    res.send(obj)
}


let statusUpdate=async (req,res)=>{
   let { ids } = req.body //Array   [ id1,id2 ] 

//    for(let id of ids){
//         //Data Get ->Old Status
//         let oldata=await categoryModel.findOne({_id:id})
//         let currentStatu=oldata.categoryStatus
//          await categoryModel.updateOne({_id:id},{$set:{
//             categoryStatus:!currentStatu
//          }})
//    }
//
   let updateRes=await  categoryModel.updateMany(
        { _id:ids },
        [
            {
                $set:{
                   categoryStatus:{
                    $not:"$categoryStatus"
                   } 
                }
            }
        ]
   )
    let obj = {
        status: 1,
        msg:"Status updated",
     
    }

    res.send(obj)


}
module.exports = { categoryCreate, categoryView, categoryDelete, categoryUpdate, multiDelete,singleData,statusUpdate }