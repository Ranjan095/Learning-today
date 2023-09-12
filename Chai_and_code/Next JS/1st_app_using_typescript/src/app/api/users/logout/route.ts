/** @format */

import { NextResponse } from "next/server";

export async function GET() {
  try {
    let response = NextResponse.json({ message: "Logout successful" });
    response.cookies.set("token", "", { httpOnly: true, expires: Date.now() });
    return response;
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
