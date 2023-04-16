// write the routes for /instructors end poient and add middlewares. 
const fs=require("fs")

let addInstructor=(req,res)=>{
    let data=req.body;
    let parseData=JSON.parse(fs.readFileSync("./db.json","utf-8"));
    parseData.instructors.push(data)
    fs.writeFileSync("./db.json",JSON.stringify(parseData))
//    console.log(parseData)
res.status(200).send(`Instructor has been added`)
}
let instructors=(req,res)=>{
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"));
    res.status(200).send(JSON.stringify(data.instructors))
    console.log(data.instructors)
    }

    let empID=(req,res)=>{
        let {empID}=req.params;
        let data=JSON.parse(fs.readFileSync("./db.json","utf-8"));
        let filterData=data.instructors.filter((ele)=>ele.emp_id==empID)
        res.status(200).send(JSON.stringify(filterData[0]))
    }


    module.exports={instructors,empID,addInstructor}