/** @format */

import { connectionDB } from "@/halpers/db";
import { UserModal } from "@/modals/UserModal";
import { TaskModal } from "@/modals/taskModel";
import { NextResponse } from "next/server";

connectionDB();

// API for get task by ID
export async function GET(req, { params }) {
  try {
    let { taskId } = params;
    let task = await TaskModal.findOne({ _id: taskId });
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// API for update task
export async function PATCH(req, { params }) {
  try {
    let { taskId } = params;
    let updatedData = await req.json();
    await TaskModal.findByIdAndUpdate({ _id: taskId }, updatedData);
    return NextResponse.json(
      { msg: "task has been updated", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// API for Delete task
export async function DELETE(req, { params }) {
  try {
    // let { userId } = await req.json();
    let { taskId } = params;
    await TaskModal.findByIdAndDelete({ _id: taskId });

    // delete from it's parents
    await UserModal.findByIdAndUpdate("64fa45416cda074a3af2ef8f", { $pull: { myTask: taskId } });
    return NextResponse.json(
      { msg: "task has been deleted", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
