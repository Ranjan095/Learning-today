/** @format */

import { connectionDB } from "@/halpers/db";
import { UserModal } from "@/modals/UserModal";
import { NextResponse } from "next/server";

connectionDB();

// ** API for Get all users **//
export async function GET(req) {
  try {
    let users = await UserModal.find().select("-password")//.populate("myTask");
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: error.messaage }, { status: 400 });
  }
}

// // ** API for Create user **//
// export async function POST(req) {
//   try {
//     let newUser = await req.json();
//     let createdUser = await UserModal(newUser);
//     await createdUser.save();
//     return NextResponse.json({ msg: "New user has created", success: true });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ error: error.messaage }, { status: 400 });
//   }
// }
