let jwt = require('jsonwebtoken');
let checkToken = (req, res, next) => {
    
    let token = req.headers.authorization.split(" ")[1]
    let resObj
    if (token) {
        let decoded = jwt.verify(token, process.env.TOKENKEY);
        if (decoded) {
            //
            let {id}=decoded
            
            req.body.id=id
            //{id: checkEmail._id }
           return next()
        }
        else {
            resObj = {
                status: 0,
                error: "Please Fill Correct Token"
            }
        }
        //Object

    }
    else {
        resObj = {
            status: 0,
            error: "Please Fill Token"
        }
    }

    res.send(resObj)
}

module.exports = { checkToken }