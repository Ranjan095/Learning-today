/** @format */

import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  let { pathname } = request.nextUrl;
  let isPublicPath = pathname === "/login" || pathname === "/signup";
  let token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    console.log("public");
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  if (!isPublicPath && !token) {
    console.log("not is public");
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  //   return NextResponse.redirect(new URL("/home", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/login", "/signup", "/profile", "/profile/:userId*"],
};
