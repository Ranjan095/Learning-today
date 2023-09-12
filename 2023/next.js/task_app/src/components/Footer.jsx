/** @format */

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-700 px-4 py-4 text-center ">
      <div className="flex justify-around">
        <ul className=" text-center">
          <h3 className="text-2xl">compani</h3>
          <li>
            <Link href={"/"}>home </Link>
          </li>
          <li>
            <Link href={"/about"}>about </Link>
          </li>
          <li>
            <Link href={"/tasks"}>task </Link>
          </li>
        </ul>
        <ul className=" text-center">
          <h3 className="text-2xl">About</h3>
          <li>
            <Link href={"/"}>home </Link>
          </li>
          <li>
            <Link href={"/about"}>about </Link>
          </li>
          <li>
            <Link href={"/tasks"}>task </Link>
          </li>
        </ul>
        <ul className=" text-center">
          <h3 className="text-2xl">About</h3>
          <li>
            <Link href={"/"}>home </Link>
          </li>
          <li>
            <Link href={"/about"}>about </Link>
          </li>
          <li>
            <Link href={"/tasks"}>task </Link>
          </li>
        </ul>
        <ul className=" text-center">
          <h3 className="text-2xl">About</h3>
          <li>
            <Link href={"/"}>home </Link>
          </li>
          <li>
            <Link href={"/about"}>about </Link>
          </li>
          <li>
            <Link href={"/tasks"}>task </Link>
          </li>
        </ul>
      </div>
      <p className="m-4"> © Copyright 2023. All Rights Reserved by Ranjan yadav.</p>
    </div>
  );
};

export default Footer;
