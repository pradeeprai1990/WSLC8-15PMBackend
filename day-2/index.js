let express = require("express")

require("dotenv").config()

let App = express()

App.get("/slider", (req, res) => {
    let sliderData = [
        {
            title: "Slider1",
            url: `https://deen3evddmddt.cloudfront.net/images/home-images/learn-web-dev.svg`
        },
        {
            title: "Slider2",
            url: `https://deen3evddmddt.cloudfront.net/images/home-images/app-development-icon.svg`
        },
        {
            title: "Slider3",
            url: `https://deen3evddmddt.cloudfront.net/images/home-images/app-development-icon.svg`
        }
    ];
    let obj = {
        status: 1,
        data:sliderData
    }

    res.send(obj)
})

App.get("/news",(req,res)=>{

    let obj={
        status:1,
        msg:"News Data"
    }
    res.send(obj)
})

App.listen(process.env.PORT ?? 8000, () => {
    console.log("Server Start");

})

//http://localhost:8000/slider