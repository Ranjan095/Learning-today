/** @format */
import mongoose from "mongoose";
require("dotenv").config();
export async function connectionDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB has connected =======>");
  } catch (error) {
    console.log("fail to connect DB", error);
  }
}
