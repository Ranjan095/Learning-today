

import { NextResponse } from "next/server";


const privateRoute = (request) => {
    // console.log(request)
    // if(request.nextUrl.pathname !="/login"){
    // console.log('privateRoute 1111**********************')
        return NextResponse.redirect(new URL("/login", request.url));
    // }
};

export const config = {
  matcher:["/about/:path*"]
};
export default privateRoute