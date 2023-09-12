/** @format */
"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
let obj = {
  username: "",
  email: "",
  password: "",
};
export default function SignupPage() {
  let [userDetails, setUserDetails] = useState(obj);
  let [loading, SetLoading] = useState(false);
  const router = useRouter();

  let handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(userDetails);
    SetLoading(true);
    axios
      .post("/api/users/signup", userDetails)
      .then((res) => {
        SetLoading(false);
        setUserDetails(obj);
        console.log(res);
        router.push("/login");
        toast.success("Successfully created!");
      })
      .catch((err) => {
        SetLoading(false);
        console.log({ msg: "error form signup page", err });
        toast.error("oops! somthing went wrong");
      });
  };

  return (
    <div className="text-center my-3">
      <div>
        <Toaster />
      </div>
      <h1 className=" text-3xl font-bold">Signup page!</h1>
      <form onSubmit={handleSubmit} className=" my-4 flex flex-col gap-3 ">
        <div>
          <label htmlFor="">UserName </label>
          <br />
          <input
            required
            value={userDetails.username}
            onChange={(e) =>
              setUserDetails({ ...userDetails, username: e.target.value })
            }
            placeholder="username"
            className="rounded-lg text-gray-700 px-3 py-1"
            type="text"
            name=""
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <br />
          <input
            required
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            placeholder="email"
            className="rounded-lg text-gray-700 px-3 py-1"
            type="email"
            name=""
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <br />
          <input
            required
            value={userDetails.password}
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
            placeholder="password"
            className="rounded-lg text-gray-700 px-3 py-1"
            type="password "
            name=""
          />
        </div>
        <div>
          <br />
          <button
            disabled={loading ? true : false}
            className="rounded-lg border px-3 py-1"
            type="submit"
          >
            {loading ? "Loading..." : " Signup here"}
          </button>
        </div>
      </form>

      <Link href={"/login"}>Visit Lonin Page</Link>
    </div>
  );
}
