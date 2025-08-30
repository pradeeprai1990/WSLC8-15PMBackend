let http = require("http")
const { addData } = require("./Calculator.js")

let server = http.createServer((req, res) => {

    if (req.url == "/") {
        let obj = {
            status: 1,
            mgs: 'Api First res',
            user: ["ram", "ravi", "raj"],
            data: addData(10, 20)
        }
        res.end(JSON.stringify(obj)) //String
    }
     if (req.url == "/news") {
         let obj = {
            status: 1,
            mgs: 'New', 
        }
        res.end(JSON.stringify(obj)) //String
     }
     
})

server.listen("8000") //http://localhost:8000

// let {addData,minData}=require("./Calculator.js") //Import


// console.log("hello");
// console.log(10+20);

// console.log(addData(90,20));
// console.log(minData(90,20));

// console.log(calculator.addData(10,20));
// console.log(calculator.minData(10,20));
// console.log(calculator.mulData(10,20));
// console.log(calculator.divData(10,20));






