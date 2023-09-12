/** @format */

import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    let response = NextResponse.json(
      { message: "Logout successful" },
      { status: 200 }
    );
    response.cookies.delete("token");
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
