/** @format */

import { getUserDetailsFromToken } from "@/halper/getUserDetailsFromToken";
import { UserModel } from "@/modal/UserModel";
import { NextResponse } from "next/server";
var jwt = require("jsonwebtoken");
require("dotenv").config();
export async function GET(request) {
  try {
    // get userId from "getUserDetailsFromToken" this method which is inside halpers
    let { id, name, age, email } = await getUserDetailsFromToken(request);
    if (!id) {
      return NextResponse.json({ error: "Please login" }, { status: 400 });
    }
    // find the user with id
    let user = await UserModel.findOne({ _id: id }).select("-password");
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
