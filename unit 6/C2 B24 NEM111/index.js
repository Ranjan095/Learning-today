// create the express app and export it.
const express=require("express");
const fs=require("fs")
const {students,studentCode,addStudent,update,dlt}=require("./routes/student.route")
const {instructors,empID,addInstructor}=require("./routes/instructor.route")

let app=express();
const logger = require("./middleware/logger.middleware")
let validator = require("./middleware/validator.middleware")
app.use(express.json())
app.use(logger)


// Student
app.post("/students/addstudent",addStudent)
app.get("/students",students)
app.get("/students/:studentCode",studentCode)
app.patch("/students/:studentCode",validator,update)
app.delete("/students/:studentCode",validator,dlt)
// Instructors
app.post("/instructors/addinstructor",addInstructor)
app.get("/instructors",instructors)
app.get("/instructors/:empID",empID)


// 
// export the app
module.exports=app;