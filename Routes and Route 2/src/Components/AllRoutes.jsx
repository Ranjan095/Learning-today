/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Products from "../Pages/Products";
import Users from "../Pages/Users";
import SingleUserPage from "../Pages/SingleUserPage";
import NotFound from "../Pages/NotFound";
import PrivetRoute from "./PrivetRoute";
import SearchParam from "./SearchParam";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivetRoute>
              <Home />
            </PrivetRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Products />} />
        <Route path="/search" element={<SearchParam />} />
        <Route
          path="/users"
          element={
            <PrivetRoute>
              <Users />
            </PrivetRoute>
          }
        />
        <Route path="/user/:user_id" element={<SingleUserPage />} />
        {/* <Route path='*' element={<NotFound/>}> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
