/** @format */

import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-blue-600 flex h-14 text-center items-center px-4 justify-between">
      {/* <=== Logo section ===> */}
      <div>
        <Link href={"/"}>LOGO</Link>
      </div>

      {/* <=== middle section ===> */}
      <div>
        <ul className=" flex gap-5">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/tasks">TASKS</Link>
          </li>
        </ul>
      </div>

      {/* <=== login and signup ===> */}
      <div>
        <ul className="flex gap-5">
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
          <li>
            <Link href={"/signup"}>Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
