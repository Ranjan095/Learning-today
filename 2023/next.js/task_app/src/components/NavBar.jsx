/** @format */

"use client";

import React, { useContext } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { AuthContext } from "@/context/authContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "My task",
    href: "/tasks",
  },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  let { user, setUser } = useContext(AuthContext);
  let route = useRouter();

  // console.log(user);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // let handleLogout = async () => {
  //   try {
  //     let res = await axios.get("/api/users/logout");

  //     alert("Logout successful!");
  //     setUser({});
  //     route.push("/login");
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Oops somting went wrong", {
  //       position: "top-center",
  //     });
  //   }
  // };

  let handleLogout = async () => {
    axios
      .get("/api/users/logout")
      .then((res) => {
        alert("Logout successful!");
        setUser({});
        route.push("/login");
      })
      .catch((err) => {
        console.log(err);
        alert("Somthing went wrong!");
      });
  };

  return (
    <div className=" fixed top-0 w-full bg-gray-400  ">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span></span>
          <span className="font-bold">
            <Link href={"/"}>TaskApp</Link>
          </span>
        </div>
        <div className="hidden grow md:flex items-center">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  {item.name}
                  <span>
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden space-x-2 md:block">
          {user.name && (
            <div className=" flex gap-3 items-center">
              <p className=" font-semibold inline-block">{user.name}</p>
              <span className="relative inline-block">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
                  alt="user"
                />
                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
              </span>
              <button
                onClick={handleLogout}
                className="border py-1 bg-red-500 text-white hover:bg-gray-400 hover:text-black rounded-xl px-2 font-semibold"
              >
                Logout
              </button>
            </div>
          )}

          {!user.name && (
            <div className="space-x-2">
              <button className="my-2" type="button">
                <Link
                  className="border border-black rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  href={"/signup"}
                >
                  Sign In
                </Link>
              </button>
              <button className="my-2" type="button">
                <Link
                  className="rounded-md border border-black px-3 py-2 hover:bg-black/10 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  href={"/login"}
                >
                  Log In
                </Link>
              </button>
            </div>
          )}
        </div>
        <div className="md:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span className="font-bold">TaskApp</span>
                  </div>

                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                {user.name && <p>{user.name}</p>}
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        onClick={toggleMenu}
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                        <span>
                          <ChevronRight className="ml-3 h-4 w-4" />
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
                {user.name && (
                  <div className="mt-2 flex justify-end gap-2 items-center">
                    <span className="relative inline-block">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
                        alt="user"
                      />
                      <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
                    </span>
                    <button
                      onClick={handleLogout}
                      className=" h-8 bg-red-500 text-white hover:bg-gray-400 hover:text-black rounded-xl px-1.5"
                    >
                      Logout
                    </button>
                  </div>
                )}
                {!user.name && (
                  <div className="mt-2 space-y-2">
                    <button
                      onClick={toggleMenu}
                      type="button"
                      className="w-full "
                    >
                      <Link
                        className=" block bg-blue-400 rounded-md  px-3 py-2 text-sm font-semibold hover:bg-black/10 text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        href={"/signup"}
                      >
                        {" "}
                        Sign In
                      </Link>
                    </button>
                    <button
                      onClick={toggleMenu}
                      type="button"
                      className="w-full "
                    >
                      <Link
                        className="block rounded-md bg-green-400 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        href={"/login"}
                      >
                        {" "}
                        Log In
                      </Link>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
