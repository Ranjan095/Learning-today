const express = require ("express");
const{connetion}=require("./DB")
const app=express();
const {userRoute}=require("./routes/userRoute")
app.use(express.json());
app.use("/users",userRoute)


app.listen(8080,async()=>{
   try {
    await connetion;
    console.log("connected to DB")
   } catch (err) {
    console.log("can't be connected to DB")
   }
console.log("port is runing at 8080")
})
