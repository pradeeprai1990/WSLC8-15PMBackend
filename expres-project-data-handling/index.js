let express = require("express")
require("dotenv").config()
let App = express()


App.use(express.json()) //body Data


let checkToken = (req, res, next) => {

    //Case 1
    if (req.query.token == "" || req.query.token == undefined || req.query.token == null) {
        let obj = {
            status: 0,
            msg: "Please send the token",
        }
        return res.send(obj)
    }
    //Case 2
    if(req.query.token!=process.env.TOKEN){
        let obj = {
            status: 0,
            msg: "Please send correct  token value",
        }
        return res.send(obj)
    }


    next()
}

// App.use(checkToken) //App all API




App.post("/login",(req, res) => {

    let { username, password } = req.body;

    let obj = {
        status: true,
        msg: "Login Done",
        username,
        password
    }

    res.status(200).json(obj)
    // res.send(obj) 

})

App.get("/product",     (req, res) => {
    let { title } = req.query //o
    //console.log(queryData);
    let product = [
        {
            title: "Iphone",
            desc: "Iphone"
        },
        {
            title: "MI",
            desc: "MI"
        },
        {
            title: "Vivo",
            desc: "Vivo"
        }
    ]

    if (title && title != "") {
        product = product.filter(
            (v) =>
                v.title.toLowerCase().includes(title.toLowerCase())
        )
    }

    let obj = {
        status: true,
        data: product
    }

    res.status(200).json(obj)
})


App.get("/product-details/:id", (req, res) => {

    let { id } = req.params; //Object

    let obj = {
        status: true,
        data: "Product Details"
    }
    res.send(obj)
})
App.listen(process.env.PORT ?? 8001, () => {
    console.log("Server Start");

})

