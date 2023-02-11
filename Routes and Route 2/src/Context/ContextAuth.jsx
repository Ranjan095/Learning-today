/** @format */

import { createContext, useState } from "react";

export let AuthContext = createContext();

export default function ContextAut({ children }) {
let [isAuth,setIsAuth]=useState(false);

let login=()=>{
    setIsAuth(true)
};
let logOut=()=>{
    setIsAuth(false)
}

//   let isAuth = false;
  return (
    <div>
      <AuthContext.Provider value={{ isAuth,login,logOut }}>
        {children}
        </AuthContext.Provider>
    </div>
  );
}
