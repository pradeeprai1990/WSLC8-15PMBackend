
let colorCreate=(req,res)=>{
     let obj={
        status:1,
        msg:"Color Added"
    }
    res.send(obj)
}

let colorView=(req,res)=>{
     let obj={
        status:1,
        msg:"Color View"
    }

    res.send(obj)
}

let colorDelete=(req,res)=>{
     let obj={
        status:1,
        msg:"Color Delete"
    }

    res.send(obj)
}
let colorUpdate=(req,res)=>{
     let obj={
        status:1,
        msg:"Color Delete"
    }

    res.send(obj)
}

module.exports={colorCreate,colorView,colorDelete,colorUpdate}