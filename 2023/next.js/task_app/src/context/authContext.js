/** @format */
"use client";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export let AuthContext = createContext();

let AuthContextProvider = ({ children }) => {
  let [user, setUser] = useState({});

  let getData = async () => {
    try {
      let res = await axios.get("/api/current_user");
      setUser(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
