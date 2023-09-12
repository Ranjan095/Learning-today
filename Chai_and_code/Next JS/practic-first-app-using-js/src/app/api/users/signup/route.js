/** @format */

import { UserModel } from "@/modal/UserModel";
import { NextResponse } from "next/server";
var bcrypt = require("bcryptjs");
require("dotenv").config();
export async function POST(req) {
  try {
    let { name, age, email, password } = await req.json();
    let isAlreadyUser = await UserModel.findOne({ email });
    if (isAlreadyUser) {
      return NextResponse.json(
        {
          error: "Oops! this email is already register",
        },
        { status: 400 }
      );
    }

    var salt = bcrypt.genSaltSync(10);
    var hash = await bcrypt.hash(password, salt);
    let user = await new UserModel({ name, age, email, password: hash });
    await user.save();
    return NextResponse.json(
      { Msg: "New user has been created", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
