/** @format */
"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

let obj = {
  email: "",
  password: "",
};

export default function LoginPage() {
  let [userDetails, setUserDetails] = useState(obj);
  let [loading, setLoading] = useState(false);
  let [spin, setSpin] = useState(true);
  let router = useRouter();
  let handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      let response = await axios.post("/api/users/login", userDetails);
      toast.success("Login successful");
      console.log("login success", response.data);
      router.push("/profile");
    } catch (error) {
      setLoading(false);
      toast.error("Oops! Invalid Crediantials");
      console.log("login failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center py-4">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-3xl font-bold ">Login page!</h1>
      <form onSubmit={handleSubmit} className=" my-4 flex flex-col gap-3 ">
        <div>
          <label htmlFor="">Email</label>
          <br />
          <input
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
            value={userDetails.password}
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
            placeholder="password"
            className="rounded-lg text-gray-700 px-3 py-1"
            type="password"
            name=""
          />
        </div>
        <div>
          <br />
          <button className="rounded-lg border px-3 py-1" type="submit">
            {loading ? "Loading..." : "Login here"}
          </button>
        </div>
      </form>

      <Link href={"/signup"}>Visit Signup Page</Link>
    </div>
  );
}
