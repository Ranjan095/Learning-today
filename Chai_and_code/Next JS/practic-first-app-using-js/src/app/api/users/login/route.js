/** @format */
import { connectionDB } from "@/db";
import { UserModel } from "@/modal/UserModel";
import { NextResponse } from "next/server";
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
connectionDB();

export async function GET() {
  try {
    let users = await UserModel.find();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

// post method
export let POST = async (req) => {
  try {
    let { email, password } = await req.json();
    let user = await UserModel.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "this email is not registerd" },
        { status: 400 }
      );
    }
    // match password with hash password
    let isValiedPssword = await bcrypt.compare(password, user.password);
    if (!isValiedPssword) {
      return NextResponse.json({ error: "Invalied Password" }, { status: 400 });
    }

    //create tokendata
    let tokenData = {
      id: user._id,
      name: user.name,
      email: user.email,
    };
    //create token;
    let token = jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    //create response
    let response = NextResponse.json({
      msg: "login successful",
      success: true,
    });
    response.cookies.set("token", token, { httpOnly: true, expiresIn: "1d" });

    return response;
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
};
