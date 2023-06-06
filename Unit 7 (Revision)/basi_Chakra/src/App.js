/** @format */

import logo from "./logo.svg";
import "./App.css";
import { Pagination } from "./pages/Pagination";
import { useState } from "react";
import { Filter } from "./pages/Filter";
import { Hoistiog } from "./pages/Hoistiog";
import { MorFilter } from "./pages/MorFilter";
import { BackdropExample } from "./pages/ChakraModel";
import { NavBar } from "./Component/NavBar";
import { JS_ASS } from "./pages/JS_ASS";
// import { VideoAsses } from "../VideoAsses";

function App() {
  let [current, setCurrent] = useState(1);

  



  return (
    <div>
       {/* <h1>{current}</h1> */}
      {/* <Pagination
        totalPro={50}
        currentPage={current}
        handleClick={(id) => setCurrent(id)}
      />  */}
      {/* <Filter /> */}
      {/* <Hoistiog/> */}
      {/* <MorFilter/> */}
      {/* <BackdropExample/> */}
    {/* <NavBar/> */}
    <JS_ASS/>
    

    </div>
  );
}

export default App;
