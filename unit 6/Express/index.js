
const express = require("express");
const app=express();
const fs=require("fs")
app.use(express.json())

app.get("/",(req,res)=>{
    // let pars_data= JSON.parse(fs.readFileSync("./db.json","utf-8"));
    // console.log(pars_data)
    res.end("hello")
});

app.post("/addData",(req,res)=>{
let pars_data= JSON.parse(fs.readFileSync("./db.json","utf-8"));
res.end("added")
for(let i=0;i<pars_data.student.length; i++){
    if(pars_data.student[i].name=="Prabhat"){
        pars_data.student[i].name=req.body.name,
        pars_data.student[i].age=req.body.age
    }
}
console.log(pars_data)
try {
    fs.writeFileSync("./db.json",JSON.stringify(pars_data))
    
} catch (error) {
    console.log(error)
}

})

app.listen(8000,()=>{
    console.log('port is running in 8000')
})

