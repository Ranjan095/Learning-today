/** @format */
"use client";
import { AuthContext } from "@/context/authContext";
import Head from "next/head";
import React, { useContext } from "react";
const Home = () => {
  let {user} = useContext(AuthContext);
  console.log(user);
  return (
    <div className="grid place-content-center h-screen">
      <Head>
        <title>Task app</title>
      </Head>
      <h1 className="text-4xl">Home Page</h1>
    </div>
  );
};
export default Home;
