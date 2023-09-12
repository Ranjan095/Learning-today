/** @format */

import { connectionDB } from "@/halpers/db";
import { TaskModal } from "@/modals/taskModel";
import { NextResponse } from "next/server";

connectionDB()

// API for get all task by user id

export async function GET(req, { params }) {
  try {
    let { userId } = params;
    let taskes = await TaskModal.find({ userId });
    return NextResponse.json(taskes);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
