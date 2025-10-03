const { adminModel } = require("../../models/adminModel")


let adminLogin = async (req, res) => {
    let { adminEmail, adminPassword } = req.body

    let admin = await adminModel.findOne({ adminEmail, adminPassword })
    let resObj
    if (admin) {
        resObj = {
            status: 1,
            admin
        }
        res.send(resObj)
    }
    else {
        resObj = {
            status: 0,
            error: "UserEmail Or  Password Invalid"
        }
        res.send(resObj)
    }
}

let adminChangePassword = async (req, res) => {
    let { id } = req.params
    let { oldPassword, newPassword, confirmPass } = req.body;

    //Check Old Password

    let checkPassword = await adminModel.findOne({ _id: id, adminPassword: oldPassword })
    let resObj;
    if (checkPassword) {
        //New Password === Confirm 

        if (newPassword == confirmPass) {
            //Password Update
            await adminModel.updateOne(
                {_id:id},
                {
                  $set:{
                    adminPassword:newPassword
                  }
                }
            )   
            
            resObj = {
                status: 1,
                msg: "Password Changed"
            }
        }
        else {
            resObj = {
                status: 0,
                msg: "New Password or Confirm Password not matched"
            }
        }
    }
    else {
        resObj = {
            status: 0,
            msg: "Invalid Old Password"
        }
    }


}

module.exports = { adminLogin, adminChangePassword }