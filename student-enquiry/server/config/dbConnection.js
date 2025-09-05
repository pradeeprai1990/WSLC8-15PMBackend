//Server + DB Create
let {MongoClient} = require("mongodb")

//MongoClient Server Connect
//localhost--127.0.0.1
let dbClient=new MongoClient(`mongodb://127.0.0.1:27017`)

let dbConnect=async ()=>{
    await dbClient.connect() //Server Connect
    console.log('Connected successfully to server');
    let db=await dbClient.db('studentDb')
    return db
}

module.exports={dbConnect}
// mongodb.MongoClient