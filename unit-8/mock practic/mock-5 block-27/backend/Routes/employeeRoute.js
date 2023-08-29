/** @format */

let express = require("express");
const { EmpModel } = require("../models/employeeModel");

let empRoute = express.Router();

// API to get all employee
empRoute.get("/", async (req, res) => {
  try {
    let allEmployee = await EmpModel.find();
    res.status(200).send(allEmployee);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// API to add employee
empRoute.post("/create", async (req, res) => {
  let doc = req.body;
  try {
    let newEmp = new EmpModel(doc);
    await newEmp.save();
    res.status(200).send({ msg: "New employee has been created" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = { empRoute };
