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
      console.log(res.data);
    } catch (error) {
      // console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
