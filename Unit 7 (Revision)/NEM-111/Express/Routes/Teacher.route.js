/** @format */

let express = require("express");

let teacher = express.Router();

teacher.get("/", (req, res) => {
  try {
    res.send({
      msg: "Teacher Page",
    });
  } catch (error) {
    res.status(400).send(error);
  }
});
// for query
teacher.post("/data",(req,res)=>{
    try {
        let query=req.query;
        res.send(query)
    } catch (error) {
        res.status(400).send(error);
    }
})

// for params
teacher.post("/data/:id", (req, res) => {
    try {
        let {id}=req.params;
        res.send({id})
    } catch (error) {
        res.status(400).send(error);
    }
});

teacher.post("/register", (req, res) => {
  res.status(200).send({
    msg: "teacher register page",
  });
});

module.exports = { teacher };
