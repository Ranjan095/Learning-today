/** @format */

import { NextRequest } from "next/server";
// import jwt from "jsonwebtoken";
let jwt = require("jsonwebtoken");
require("dotenv").config();

export function getDataFromToken(request: NextRequest) {
  try {
    let token = request.cookies.get("token")?.value || "";
    let decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET);
    return decodedToken.id;
  } catch (error: any) {
    return error.message;
  }
}
