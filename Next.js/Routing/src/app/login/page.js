/** @format */

"use client";
import Link from "next/link";
import React from "react";

let Login = () => {
  let navigateFun = (path) => {
    route.push(path);
  };
  return (
    <div>
      <h1>Login page</h1>
      <div style={{ display: "flex", gap: "10px",justifyContent:"center" }}>
      <Link href={"/"}>Home</Link>
        <button onClick={() => navigateFun("/login/studentlogin")}>
         Student Login Page
        </button>
      
      </div>
    </div>
  );
};
export default Login;
