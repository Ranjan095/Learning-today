/** @format */

import React from "react";
import { Routes,Route } from 'react-router-dom'
import Home from "../Components/Home";
import Login from "../Components/Login/Login";
import Todo from "../Components/todo/Todo";
import Counter from "../Components/Counter/Counter";
import PrivetRoute from "../Components/Pages/PrivetRoute";

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/todo' element={ <PrivetRoute> <Todo/> </PrivetRoute>} ></Route>
        <Route path='/counter' element={<Counter/>}/>
      </Routes>
    </div>
  );
};

export default AllRoute;
