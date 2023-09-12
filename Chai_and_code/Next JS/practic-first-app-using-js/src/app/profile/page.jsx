/** @format */
"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Profile = () => {
  let [user, setUser] = useState({});
  let [loading, setLoading] = useState(true);
  let route = useRouter();
  let getData = async () => {
    try {
      setLoading(true);
      let response = await axios.get("/api/users/currentUser");
      setLoading(false);
      let { _id, name, age, email } = response.data;
      // let data=
      setUser({ id: _id, name, age, email });
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  let handleLogout = async () => {
    try {
      setLoading(true);
      let response = await axios.get("/api/users/logout");
      setLoading(false);
      console.log(response.data);
      route.push("/login");
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return loading ? (
    <h1 className="text-4xl">Loading....</h1>
  ) : (
    <div>
      <h1 className="text-3xl">Profile Page</h1>
      <Link className="text-blue-600 underline" href={`/profile/${user.id}`}>
        <b>{user.id}</b>
      </Link>
      <h3>UserId : {user.id}</h3>
      <h3>Name : {user.name}</h3>
      <h3>Age : {user.age}</h3>
      <h3>Email : {user.email}</h3>
      <button
        onClick={handleLogout}
        className="bg-red-600 p-2 m-3 rounded-lg text-white hover:bg-yellow-500"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
