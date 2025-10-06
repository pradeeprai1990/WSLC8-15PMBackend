const { transporter } = require("../../config/mailConfig");

let userOTP=new Map()

let sendOTP = async (req, res) => {

    let {userEmail}=req.body;

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


module.exports = { sendOTP }