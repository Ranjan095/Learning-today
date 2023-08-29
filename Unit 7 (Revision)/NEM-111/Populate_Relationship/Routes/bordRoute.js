/** @format */

let express = require("express");
const { auth } = require("../Middleware/auth");
const { BordModal } = require("../Model/bordModel");
const { TaskModal } = require("../Model/taskModal");
const { SubTaskModal } = require("../Model/subTaskModal");

let bordRoute = express.Router();

bordRoute.get("/",  async (req, res) => {
  try {
    let bords = await BordModal.find().populate("task");
    res.status(200).send(bords);
  } catch (error) {
    res.status(400).send(error);
  }
});

// API Rout for create new board
bordRoute.post("/create", async (req, res) => {
  try {
    let bord = new BordModal(req.body);
    await bord.save();
    res.status(200).send({ msg: "new Bord has been created" });
  } catch (error) {
    res.status(400).send(error);
  }
});

// API Route for Create new Task
bordRoute.post("/task/create/:bordId", async (req, res) => {
  let { bordId } = req.params;
  // console.log(req.body);
  try {
    let task = new TaskModal({ ...req.body, bordId });
    await task.save();
    res.status(200).send({ msg: "new task has been created" });
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all task with bordId
bordRoute.get("/task/:bordId", async (req, res) => {
  let { bordId } = req.params;
  try {
    let tasks = await TaskModal.find({ bordId });
    res.status(200).send(tasks);
  } catch (error) {
    res.status(400).send(error);
  }
});

// for SubTask create....with taskId
bordRoute.post("/task/subtask/:taskId", async (req, res) => {
  let { taskId } = req.params;
  try {
    let subTask = new SubTaskModal({ ...req.body, taskId });
    await subTask.save();
    res.status(200).send({ msg: "subTask has been created" });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get all subTask with taskId
bordRoute.get("/task/subtask/:taskId", async (req, res) => {
  let { taskId } = req.params;
  try {
    let subTasks = await SubTaskModal.find({ taskId });
    res.status(200).send(subTasks);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = { bordRoute };
