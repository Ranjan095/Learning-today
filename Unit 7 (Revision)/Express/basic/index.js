/** @format */

let express = require("express");
let app = express();
let fs=require("fs")
let port = 8080;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/students",(req,res)=>{
    let data=JSON.parse(fs.readFileSync("db.json","utf-8"));
    console.log(data)
    res.send(data)
});

app.post("/addStudent",(req,res)=>{
    let newStudent=req.body;
    let data=JSON.parse(fs.readFileSync("db.json","utf-8"));
    data.student.push(newStudent);
   fs.writeFileSync("db.json",JSON.stringify(data))
res.send({
    "Msg":"db.json file is updated"
})
})

app.delete("/",(req,res)=>{
    
})

// app.post("/login", (req, res) => {
//   console.log({
//     Msg: req.body,
//   });
//   res.send(req.body);
// });

app.listen(port, () => {
  console.log(`port is running at ${port}`);
});
