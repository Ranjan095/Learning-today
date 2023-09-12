/** @format */
require("dotenv").config();
import mongoose from "mongoose";

export async function connect() {
  try {
   await mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log(
        "MongoDB has been connected successfully ======================================><============="
      );
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connected error. please make sure MongoDB is running.==============================><=============="
      );
      process.exit();
    });
  } catch (err) {
    console.log("DB is not connected ============================>", err);
  }
}
