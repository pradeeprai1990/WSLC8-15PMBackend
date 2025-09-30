const { materialModel } = require("../../models/materialModels");


let materialCreate = async (req, res) => {

    console.log(req.body);

    // let materialRes=await materialModel.insertOne(materialInsertObj)

    //Insert

    // let insertObj={
    //     materialName:req.body.materialName,
    //     materialCode:req.body.materialCode,
    //     materialOrder:req.body.materialOrder,
    //     materialStatus:req.body.materialStatus
    // }
    let obj
    try {
        let materialCollection = await materialModel(req.body)
        let materialRes = await materialCollection.save() //Insert
        obj = {
            status: 1,
            msg: "material Added",
            materialRes
        }
        res.send(obj)
    }
    catch (err) {
        // console.log(err);

        let errorMessage
        if (err.code == 11000) {
            errorMessage = "material name Already Exist..."
        }

        if (err.errors) {
            if (err.errors.materialName) {
                errorMessage = err.errors.materialName.message
            }
        }

        obj = {
            status: 0,
            errorMessage,

        }
        res.send(obj)
    }


}

let materialView = async (req, res) => {

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
    let materialData = await materialModel.find().skip(skip).limit(limit) //5

    let materialDatalength = await materialModel.find() //[20]

    let obj = {
        status: 1,
        materialData,
        length:materialDatalength.length, //Number of Rows-13
        totPages: Math.ceil(materialDatalength.length/limit)//2.3=3
    }

    res.send(obj)
}

let materialDelete = (req, res) => {

    let { id } = req.params;
    let obj
    materialModel.deleteOne({ _id: id })
        .then((delRes) => {
            obj = {
                status: 1,
                msg: "material Delete",
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
let materialUpdate = async (req, res) => {
    
    let { id } = req.params;
    let obj
    try {
        let materialRes = await materialModel.updateOne(
            {
                _id: id
            },
            {
                $set: req.body
            }
        )

        obj = {
            status: 1,
            msg: "material Updated",
            materialRes
        }
        res.send(obj)
    }
    catch (err) {
        // console.log(err);

        let errorMessage
        if (err.code == 11000) {
            errorMessage = "material name Already Exist..."
        }

        if (err.errors) {
            if (err.errors.materialName) {
                errorMessage = err.errors.materialName.message
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
    materialModel.deleteMany({ _id: ids })
        .then((delRes) => {
            obj = {
                status: 1,
                msg: "material Delete",
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
     let materialData = await materialModel.findOne({_id:id})
    let obj = {
        status: 1,
        materialData
    }

    res.send(obj)
}


let statusUpdate=async (req,res)=>{
   let { ids } = req.body //Array   [ id1,id2 ] 

//    for(let id of ids){
//         //Data Get ->Old Status
//         let oldata=await materialModel.findOne({_id:id})
//         let currentStatu=oldata.materialStatus
//          await materialModel.updateOne({_id:id},{$set:{
//             materialStatus:!currentStatu
//          }})
//    }
//
   let updateRes=await  materialModel.updateMany(
        { _id:ids },
        [
            {
                $set:{
                   materialStatus:{
                    $not:"$materialStatus"
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
module.exports = { materialCreate, materialView, materialDelete, materialUpdate, multiDelete,singleData,statusUpdate }