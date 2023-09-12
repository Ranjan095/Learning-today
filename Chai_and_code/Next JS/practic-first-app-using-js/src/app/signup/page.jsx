/** @format */

"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
let obj = {
  name: "",
  age: "",
  email: "",
  password: "",
};
const Signup = () => {
  let [formData, setFormData] = useState(obj);
  let [loading, setLoading] = useState(false);
  let router = useRouter();
  let handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("/api/users/signup", formData)
      .then((res) => {
        setLoading(false);
        console.log(res);
        setFormData(obj);
        router.push("/login");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
    // console.log(formData);
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl">Signup page</h1>
      <form onSubmit={handleSubmit} className="m-4 bg-green-500 p-3">
        <div>
          <label>Name </label>
          <br />
          <input
            required
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="name"
            className="rounded-lg p-1"
          />
        </div>
        <div>
          <label>Age </label>
          <br />
          <input
            required
            name="age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            placeholder="age"
            className="rounded-lg p-1"
          />
        </div>
        <div>
          <label>Email </label>
          <br />
          <input
            type="email"
            required
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="email"
            className="rounded-lg p-1"
          />
        </div>

        <div>
          <label>Password </label>
          <br />
          <input
            type="password"
            required
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="password"
            className="rounded-lg p-1"
          />
        </div>
        <Link href={"/login"}>
          <b>go to Login page</b>
        </Link>
        <div className="m-2">
          <button
            disabled={loading ? true : false}
            className="bg-blue-600 text-white p-1 rounded-md"
            type="submit"
          >
            {loading ? "submiting..." : "submit"}
          </button>
          <button
            disabled={loading ? true : false}
            onClick={() => setFormData(obj)}
            className="bg-red-600 text-white p-1 rounded-md ml-2"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
