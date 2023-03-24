import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivetRoute from "../Components/PrivetRoute";
import { Homepage } from './Homepage'
import { Login } from "./Login";
import { MovieDetail } from "./MovieDetail";

export const MainRoutes = () => {
  return <Routes>
    <Route path="/" element={<Homepage/>}></Route>
    <Route path="/login" element={<Login/>}/>
    <Route path="/movie/:id" element={ <PrivetRoute> <MovieDetail/> </PrivetRoute>}/>
    {/* Provide all routes here */}
    </Routes>;
};
