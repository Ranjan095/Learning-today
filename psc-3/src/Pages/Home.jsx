/** @format */

import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Conponents/Context/AuthContext";

const Home = () => {
  let { isAuth ,setIsAuth } = useContext(AuthContext);
  return (
    <div>
      <h1>Home page</h1>
      <button disabled={!isAuth} onClick={() => setIsAuth(false)}>LogOut</button>
    </div> 
  );
};

export default Home;
