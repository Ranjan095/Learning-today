/** @format */

import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import PrivateRoute from "../Components/PrivateRoute";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              {" "}
              <Dashboard />{" "}
            </PrivateRoute>
          }
        />
      </Routes>
      {/* Add Home, Login and dashboard  */}
    </div>
  );
}

export default AllRoutes;
