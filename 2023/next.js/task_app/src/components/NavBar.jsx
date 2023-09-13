/** @format */
"use client";
import { AuthContext } from "@/context/authContext";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const NavBar = () => {
  let { user } = useContext(AuthContext);
  let route = useRouter();
  console.log(user);

  let handleLogout = async () => {
    try {
      let res = await axios.get("/api/users/logout");
      // console.log(res.data);

      toast.success(res.data, {
        position: "top-center",
      });
      route.push("/login");
    } catch (error) {
      console.log(error);
      toast.error("Oops somting went wrong", {
        position: "top-center",
      });
    }
  };
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
      {user.name ? (
        <div className="flex gap-2">
          <h1 className="text-2xl">{user.name}</h1>
          <button
            onClick={handleLogout}
            className="border bg-red-500 text-white hover:bg-gray-400 hover:text-black rounded-xl px-3 font-semibold"
          >
            Logout
          </button>
        </div>
      ) : (
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
      )}
    </nav>
  );
};

export default NavBar;
