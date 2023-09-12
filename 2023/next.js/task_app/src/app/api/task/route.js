/** @format */

import { connectionDB } from "@/halpers/db";
import { UserModal } from "@/modals/UserModal";
import { TaskModal } from "@/modals/taskModel";
import { NextResponse } from "next/server";

connectionDB();
// API for get all tasks
export async function GET(req) {
  try {
    let tasks = await TaskModal.find();
    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// API for create new task
export async function POST(req) {
  try {
    let { title, description, userId } = await req.json();
    let data = new TaskModal({ title, description, userId });
    let newTask = await data.save();
    await UserModal.findByIdAndUpdate(userId, {
      $push: { myTask: newTask._id },
    });
    return NextResponse.json(
      { msg: "new task has created", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
