/** @format */

"use client";
import Link from "next/link";
import home from "./home.css";
import { useRouter } from "next/navigation";

export default function Home() {
  let route = useRouter();

  let navigateFun = (path) => {
    route.push(path);
  };

  return (
    <main id="box">
      <h1>Home Page</h1>
      <div className="route">
        <Link href={"/login"}>go to Login page</Link>
        <Link href={"/about"}>go to About Page</Link>
      </div>
      <button
        onClick={() => {
          route.push("/about");
        }}
      >
        go to About page
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          route.push("/login");
        }}
      >
        go to login page
      </button>
      <div>
        <h1>Nested route</h1>
        <button onClick={() => navigateFun("/about/aboutcollege")}>
          go to About College Page
        </button>
        <br />
        <br />
        <button onClick={() => navigateFun("/about/aboutstudent")}>
          go to About Student Page
        </button>
        <br />
        <br />
        <button onClick={() => navigateFun("/login/studentlogin")}>
          go to Student Login Page
        </button>
      </div>
    </main>
  );
}
