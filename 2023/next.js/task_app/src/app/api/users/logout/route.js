/** @format */

import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    let response = NextResponse.json({
      msg: "Logout is successful",
    });

    response.cookies.delete("token");
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
