/** @format */

import { connectionDB } from "@/halpers/db";
import { UserModal } from "@/modals/UserModal";
import { NextResponse } from "next/server";

connectionDB();

// API for get user by ID
export async function GET(req, { params }) {
  try {
    let { userId } = params;
    let user = await UserModal.find({ _id: userId })
      .select("-password")
      .populate("myTask");
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// ** API for Update user **//
export async function PATCH(req, { params }) {
  try {
    let { userId } = params;
    let updatedData = await req.json();
    await UserModal.findByIdAndUpdate({ _id: userId }, updatedData);
    return NextResponse.json({ msg: "user has updated", success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// ** API for Delete user **//
export async function DELETE(req, { params }) {
  try {
    let { userId } = params;
    await UserModal.findByIdAndDelete({ _id: userId });
    return NextResponse.json({ msg: "user has been deleted", success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
