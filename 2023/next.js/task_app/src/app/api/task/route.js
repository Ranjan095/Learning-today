/** @format */

import { connectionDB } from "@/halpers/db";
import { UserModal } from "@/modals/UserModal";
import { TaskModal } from "@/modals/taskModel";
import { NextResponse } from "next/server";
let jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
connectionDB();
// API for get all tasks
export async function GET(req) {
  try {
    // gettin current userId using jwt
    let token = req.cookies.get("token")?.value || "";
    let decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    let tasks = await TaskModal.find({ userId: decoded.id });
    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// API for create new task
export async function POST(req) {
  try {
    // gettin current userId using jwt
    let token = req.cookies.get("token")?.value || "";
    let decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    let { title, description } = await req.json();
    let data = new TaskModal({ title, description, userId: decoded.id });
    let newTask = await data.save();
    await UserModal.findByIdAndUpdate(decoded.id, {
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
