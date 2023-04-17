/** @format */

// write the routes for /students end poient and add middlewares.
const fs = require("fs");

let addStudent = (req, res) => {
  let data = req.body;
  let parseData = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  parseData.students.push(data);
  fs.writeFileSync("./db.json", JSON.stringify(parseData));
  console.log(parseData.students);
  //    console.log(parseData)
  res.status(200).send(`Student has been added`);
};
let students = (req, res) => {
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  res.status(200).send(JSON.stringify(data.students));
  console.log(data.students);
};

let studentCode = (req, res) => {
  let { studentCode } = req.params;
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let filterData = data.students.filter(
    (ele) => ele.student_code == studentCode
  );
  res.status(200).send(JSON.stringify(filterData[0]));
};


let update = (req,res) => {
  let { studentCode } = req.params;
  let { name, location, batch } = req.body;
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let std = data.students.map((ele) => {
    if (ele.student_code == studentCode) {
      return { ...ele, name, location, batch };
    }
  });
  data.students = std;
  fs.writeFileSync("./db.json", JSON.stringify(data));
  res.status(200).send(`Patched Student Details`);
};

let dlt = (req, res) => {
  let { studentCode } = req.params;
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let std = data.students.filter((ele) => {
    if(ele.student_code != studentCode){
        return ele
    }
  });
  data.students = std;
  fs.writeFileSync("./db.json", JSON.stringify(data));
  res.status(200).send(`Deleted Student Details`);
};

module.exports = { students, studentCode, addStudent, update, dlt };
// module.exports=log;
