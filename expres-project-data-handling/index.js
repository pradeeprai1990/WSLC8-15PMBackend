let express = require("express")
require("dotenv").config()
let App = express()

App.use(express.json()) //body Data

App.post("/login", (req, res) => {

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

App.get("/product", (req, res) => {

    let { title } = req.query //o

    //  console.log(queryData);

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

App.listen(process.env.PORT ?? 8001, () => {
    console.log("Server Start");

})

