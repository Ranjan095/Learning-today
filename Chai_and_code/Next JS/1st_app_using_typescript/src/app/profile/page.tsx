/** @format */

"use client";

/** @format */

import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCart from "../product/page";

let obj = {
  _id: "",
  username: "",
  email: "",
};

export default function ProfilePage() {
  let [user, setUser] = useState(obj);
  let [loading, setLoading] = useState(false);
  let route = useRouter();

  let getUser = async () => {
    try {
      setLoading(true);
      let response = await axios.get("/api/users/me");
      console.log(response);
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  let handleLogout = async () => {
    try {
      setLoading(true);
      let response = await axios.get("/api/users/logout");
      alert("Logout successful");
      route.push("/login");
      console.log("Logout successful", response);
    } catch (error) {
      setLoading(false);
      console.log({ error: "Somthing went wrong", err: error });
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <h1 className="text-3xl">Loading...</h1>
  ) : (
    <div className="text-center py-3">
      <h1 className="text-3xl font-bold">Profile Page!</h1>
      <ProductCart {...user} />
      <button onClick={handleLogout} className="bg-red-600 p-2 rounded-xl m-2">
        Logout
      </button>
    </div>
  );
}
