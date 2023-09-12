/** @format */

import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import UserModel from "@/models/userModel";
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
connect();

export let POST = async (request: NextRequest) => {
  try {
    let reqBody = await request.json();
    let { email, password } = reqBody;
    console.log(reqBody);

    // fine the user is exists or not
    let user = await UserModel.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "user does not exist" },
        { status: 400 }
      );
    }

    // hash the password
    let validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    let tokenData = {
      id: user._id,
      name: user.name,
      email: user.email,
    };

    //create token
    let token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    let response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
