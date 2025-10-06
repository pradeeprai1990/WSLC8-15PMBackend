const nodemailer = require("nodemailer");
// Create a test account or replace with real credentials.
//GMAIL SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "pradeep.9997@gmail.com",
    pass: "fdfjwmilyvpauxrt",
  },
});

module.exports={transporter}