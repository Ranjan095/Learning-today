/** @format */

import mongoose from "mongoose";
require("dotenv").config();
export let connectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB has Connected ====>");
  } catch (error) {
    console.log("DB has not Connected", error);
  }
};
