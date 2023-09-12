import { connectionDB } from "@/halpers/db";
import { UserModal } from "@/modals/UserModal";
import { NextResponse } from "next/server";

connectionDB();

// ** API for Create user **//
export async function POST(req) {
    try {
      let newUser = await req.json();
      let createdUser = await UserModal(newUser);
      await createdUser.save();
      return NextResponse.json({ msg: "New user has created", success: true });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error: error.messaage }, { status: 400 });
    }
  }