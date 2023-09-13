/** @format */

import { NextResponse } from "next/server";
var jwt = require("jsonwebtoken");
require("dotenv").config();

export async function GET(request) {
  try {
    let token = request.cookies.get("token")?.value || "";
    if (!token) return NextResponse.json({ err: "login first" });

    let decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    if (!decoded) return NextResponse.json({ err: "Pleae login first" });
    let { id, name, email } = decoded;
    // console.log({ id, name, email });
    return NextResponse.json({ id, name, email });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
