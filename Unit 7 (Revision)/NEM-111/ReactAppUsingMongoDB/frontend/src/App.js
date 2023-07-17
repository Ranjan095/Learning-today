/** @format */

import logo from "./logo.svg";
import "./App.css";
import { AllRoutes } from "./component/AllRoutes";
import { NavBar } from "./component/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AllRoutes />
    </div>
  );
}

export default App;
