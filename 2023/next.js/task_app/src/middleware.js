/** @format */

import { NextResponse } from "next/server";
export function middleware(request) {
  let { pathname } = request.nextUrl;
  let isPublicPath = pathname === "/login" || pathname === "/signup";

  let token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/tasks", "/login", "/signup"],
};
