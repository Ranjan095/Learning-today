
const express=require("express")
const {HeroModel}=require("../models/heros.models")
const heroRouter=express.Router()

heroRouter.post("/add", async (req, res) => {
    try {
      const hero = await new HeroModel(req.body);
      hero.save();
  
      res.send(hero);
    } catch (err) {
      console.log(err);
    }
  });
  heroRouter.get("/", async (req, res) => {
    try {
      horos = await HeroModel.find();
      res.send(horos);
    } catch (err) {
      console.log(err);
    }
  });
  
  module.exports={heroRouter}