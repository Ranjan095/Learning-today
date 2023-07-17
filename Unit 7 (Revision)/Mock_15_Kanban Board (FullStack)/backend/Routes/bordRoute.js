/** @format */

let express = require("express");
const { auth } = require("../Middleware/auth");
const { BordModal } = require("../Model/bordModel");

let bordRoute = express.Router();

bordRoute.get("/", auth, async (req, res) => {
  try {
    let bords = await BordModal.find();
    res.status(200).send(bords);
  } catch (error) {
    res.status(400).send(error);
  }
});

bordRoute.post("/create", auth, async (req, res) => {
    console.log(req.body)
  try {
    let bord = new BordModal(req.body);
    await bord.save();
    res.status(200).send({ msg: "new Bord has been created" });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = { bordRoute };
