/** @format */

let express = require("express");
let fs = require("fs");
let student = express.Router();

student.get("/", (req, res) => {
  res.send({
    msg: "welcome to Student page",
  });
});

student.get("/data", (req, res) => {
  let data = fs.readFileSync("./data.json", "utf-8");
  res.status(200).send(JSON.parse(data));
});

student.post("/register", (req, res) => {
  res.send({
    msg: "welcome to add student page",
  });
});

student.post("/result", (req, res) => {
  res.send({
    msg: "result of Student",
  });
});

module.exports = { student };
