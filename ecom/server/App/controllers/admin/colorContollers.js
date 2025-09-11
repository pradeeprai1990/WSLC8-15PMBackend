const { colorModel } = require("../../models/colorModel")

let colorCreate = async (req, res) => {

    console.log(req.body);

    // let colorRes=await colorModel.insertOne(colorInsertObj)

    //Insert

    // let insertObj={
    //     colorName:req.body.colorName,
    //     colorCode:req.body.colorCode,
    //     colorOrder:req.body.colorOrder,
    //     colorStatus:req.body.colorStatus
    // }
    let obj
    try {
        let colorCollection = await colorModel(req.body)
        let colorRes = await colorCollection.save() //Insert
        obj = {
            status: 1,
            msg: "Color Added",
            colorRes
        }
        res.send(obj)
    }
    catch (err) {
        // console.log(err);

        let errorMessage
        if (err.code == 11000) {
            errorMessage = "Color name Already Exist..."
        }

        if (err.errors) {
            if (err.errors.colorName) {
                errorMessage = err.errors.colorName.message
            }
        }

        obj = {
            status: 0,
            errorMessage,

        }
        res.send(obj)
    }


}

let colorView = async (req, res) => {

    let colorData = await colorModel.find()
    let obj = {
        status: 1,
        colorData
    }

    res.send(obj)
}

let colorDelete = (req, res) => {

    let { id } = req.params;
    let obj
    colorModel.deleteOne({ _id: id })
        .then((delRes) => {
            obj = {
                status: 1,
                msg: "Color Delete",
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
let colorUpdate = async (req, res) => {
    
    let { id } = req.params;
    let obj
    try {
        let colorRes = await colorModel.updateOne(
            {
                _id: id
            },
            {
                $set: req.body
            }
        )

        obj = {
            status: 1,
            msg: "Color Updated",
            colorRes
        }
        res.send(obj)
    }
    catch (err) {
        // console.log(err);

        let errorMessage
        if (err.code == 11000) {
            errorMessage = "Color name Already Exist..."
        }

        if (err.errors) {
            if (err.errors.colorName) {
                errorMessage = err.errors.colorName.message
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
    colorModel.deleteMany({ _id: ids })
        .then((delRes) => {
            obj = {
                status: 1,
                msg: "Color Delete",
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

module.exports = { colorCreate, colorView, colorDelete, colorUpdate, multiDelete }