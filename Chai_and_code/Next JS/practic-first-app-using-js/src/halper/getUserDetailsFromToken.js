/** @format */

import { NextResponse } from "next/server";
var jwt = require("jsonwebtoken");
require("dotenv").config();
export let getUserDetailsFromToken = (request) => {
  try {
    let token = request.cookies.get("token")?.value || "";
    // decode the token
    let decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    let { id, name, email } = decodedToken;
    return decodedToken
  } catch (error) {
    return error.message;
  }
};
