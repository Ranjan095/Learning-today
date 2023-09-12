/** @format */

import { getDataFromToken } from "@/halpers/getDataFromToken";
import UserModel from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    let userId = getDataFromToken(request);
    let user: any = await UserModel.findOne({ _id: userId }).select(
      "-password"
    );
    return NextResponse.json(user);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
