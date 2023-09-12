/** @format */

import { connect } from "@/dbConfig/dbConfig";
import UserModel from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
var bcrypt = require("bcryptjs");

connect();

export async function POST(request: NextRequest) {
  try {
    let reqBody = await request.json();
    let { username, email, password } = reqBody;

    console.log({ reqBody, check: "data is comming form body" });

    //Check user is already exists
    let user = await UserModel.findOne({ email });

    if (user) {
      return NextResponse.json(
        {
          error:
            "user is Already exists with this email please try othe email to create account",
        },
        { status: 400 }
      );
    }

    // Hash password and store to DB;

    let salt = bcrypt.genSaltSync(10);
    let hashPassword = await bcrypt.hash(password, salt);
    let newUser = new UserModel({ username, email, password: hashPassword });
    let savedUser = await newUser.save();
    console.log(savedUser);

    return NextResponse.json(
      { message: "user created successfully=====>", success: true, savedUser },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
        msg: "somthing is wrong in post request ==========>",
      },
      { status: 500 }
    );
  }
}
