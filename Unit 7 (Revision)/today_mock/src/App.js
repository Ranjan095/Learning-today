/** @format */

import logo from "./logo.svg";
import "./App.css";
import { Basic } from "./pages/TypeScript/Basic.tsx";

let App = () => {
  let person = {
    name: "Ranjan",
    age: 26,
    color: "white",
  };
  return (
    <div className="App">
      <Basic {...person} />
    </div>
  );
};

export default App;
