const express=require("express")
let app=express()
const fs=require("fs")

app.use((req,res,next)=>{
    console.log("MD is runnning1 => "+Date.now())
    fs.appendFileSync("./text.txt",`Route: ${req.url}, Time:${Date()}\n`)
    console.log(req.url)
    next()
   
})
// app.use((req,res,next)=>{
//     console.log("MD is runnning2 => "+Date.now())
//     next()
// })
// app.use((req,res,next)=>{
//     console.log("MD is runnning3 => "+Date.now())
//     next()
// })

app.get("/",(req,res)=>{
    res.send("Home page")
    console.log('Home Page')
})

app.get("/data",(req,res)=>{
    res.send("Data page")
})

app.get("/about",(req,res)=>{
    res.send("About page")
})

app.listen(9090,()=>{
    console.log('port is running 9090')
})