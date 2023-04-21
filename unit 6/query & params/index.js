let express =require("express");
let app=express();

app.get("/data",(req,res)=>{
    let {city}=req.query

let waither={
    delhi:"31c",
    mumbai:'28c'
}

console.log(`today waither of ${city} is ${waither[city]}`)
    res.send(`today waither of ${city} is ${waither[city]}`)
})

app.get("/student/:student_id",(req,res)=>{
    let {student_id}=req.params;
    console.log(student_id);
    res.end(student_id)
})

app.listen(8080,()=>{
    console.log("port is running in 8080")
})