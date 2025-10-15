const { transporter } = require("../../config/mailConfig");
const bcrypt = require('bcrypt');
const { userModel } = require("../../models/userModel");
const saltRounds = 10;
let userOTP = new Map()
let jwt = require('jsonwebtoken');
let sendOTP = async (req, res) => {

    let { userEmail } = req.body;

    let OTP = Number((Math.random() * 9999999).toString().split(".")[0].slice(0, 4))
    console.log(OTP);
    //0-1  0.5555 /0.33366
    //Mail


    //backend OTP STORE
    userOTP.set('myOTP', OTP);

    const info = await transporter.sendMail({
        from: '"MONSTA OTP" <pradeep.9997@gmail.com>',
        to: userEmail,
        subject: "OTP|MONSTA",
        text: "OTP", // plain‑text body
        html: `<b>OTP ${OTP} </b>`, // HTML body
    });

    let obj = {
        status: 1,
        msg: "OTP send"
    }
    res.send(obj)
}


let createUser = async (req, res) => {
    //OTP CHECK ->Correct User Create
    let { userName, userEmail, userPhone, userPassword, otp } = req.body
    let myOTP = userOTP.get('myOTP')
    let resObj
    if (otp == myOTP) {
        //User Create
        //userPassword =123456
        const hash = bcrypt.hashSync(userPassword, saltRounds);

        let userObj = {
            userName,
            userEmail,
            userPhone,
            userPassword: hash
        }

        let user = await userModel(userObj)
        let userRes = await user.save()

        resObj = {
            status: 1,
            msg: "User Created",
            userRes
        }
    }
    else {
        resObj = {
            status: 0,
            msg: "Please Fill The Correct OTP"
        }
    }
    res.send(resObj)
}


let userLogin = async (req, res) => {
    let { userEmail, userPassword } = req.body
    //Check Email 
    let checkEmail = await userModel.findOne({ userEmail })
    let resObj;
    if (checkEmail) { //True
        //DB Password
        let dbuserPassword = checkEmail.userPassword
        //Check Password
        let checkPassword = bcrypt.compareSync(userPassword, dbuserPassword); // true


        //Create Token

        let token = jwt.sign({ id: checkEmail._id }, process.env.TOKENKEY);



        if (checkPassword) {
            resObj = {
                status: 1,
                user: checkEmail,
                token
            }
        }
        else {
            resObj = {
                status: 0,
                msg: "Invalid  Password"
            }
        }
    }
    else {
        resObj = {
            status: 0,
            msg: "Invalid Email Id"
        }
    }

    res.send(resObj)
}


let changePassword = async (req, res) => {
    let { id, oldPasswprd, newPassword, confirmPassword } = req.body
    let checkUser = await userModel.findOne({ _id: id })

    let dbPass = checkUser.userPassword

    let oldPasswordCheck = bcrypt.compareSync(oldPasswprd, dbPass); // true
    let resObj
    if (oldPasswordCheck) {
        if (newPassword == confirmPassword) {
            //Update
            const hash = bcrypt.hashSync(newPassword, saltRounds);

            let passUpdateRes = await userModel.updateOne(
                {
                    _id: id
                },
                {
                    $set: {
                        userPassword: hash
                    }
                }
            )
            resObj = {
                status: 1,
                msg: "Password Changed",
                passUpdateRes
            }
        }
        else {
            resObj = {
                status: 0,
                msg: "New Pass or Confirm Not Matched"
            }
        }
    }
    else {
        resObj = {
            status: 0,
            msg: "Invalid Old  Password"
        }
    }



    res.send(resObj)
}
module.exports = { sendOTP, createUser, userLogin, changePassword }