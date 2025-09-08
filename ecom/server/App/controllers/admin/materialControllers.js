let materialCreate=(req,res)=>{
     let obj={
        status:1,
        msg:"material Added"
    }

    res.send(obj)
}

let materialView=(req,res)=>{
     let obj={
        status:1,
        msg:"material View"
    }

    res.send(obj)
}

let materialDelete=(req,res)=>{
     let obj={
        status:1,
        msg:"material Delete"
    }

    res.send(obj)
}
let materialUpdate=(req,res)=>{
     let obj={
        status:1,
        msg:"material Delete"
    }

    res.send(obj)
}

module.exports={materialCreate,materialView,materialDelete,materialUpdate}