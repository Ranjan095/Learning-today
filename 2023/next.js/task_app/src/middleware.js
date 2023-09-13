/** @format */

// /** @format */

// import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";

// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//   let { pathname } = request.nextUrl;
//   // console.log("==========================>", pathname);

//   let publicPath = pathname == "/login" || pathname == "/signup";
//   let token = request.cookies.get("token")?.value || "";

//   if (!token && !publicPath) {
//     return NextResponse.redirect(new URL("/login", request.nextUrl));
//   }
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: ["/about", "/tasks", "/login", "/signup"],
// };

// ***************************

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
