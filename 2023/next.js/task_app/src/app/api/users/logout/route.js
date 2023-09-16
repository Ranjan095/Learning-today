/** @format */

import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    let response = NextResponse.json({
      msg: "Logout successful!",
    });

    // response.cookies.delete("token");
    response.cookies.set("token", "", {
      httpOnly: true,
      expires: Date.now(),
    });
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
