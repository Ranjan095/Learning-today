/** @format */

import Link from "next/link";
import React from "react";
import "./about.css";

const layout = ({ children }) => {
  return (
    <div className="about-layout-nav">
      <ul className="about-layout-nav">
        <li>
          <h4>NavBar</h4>
        </li>
        <li>
          {" "}
          <Link href={"/about/aboutcollege"}>aboutCollege</Link>
        </li>
        <li>
          <Link href={"/about/aboutstudent"}>aboutStudent</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default layout;
