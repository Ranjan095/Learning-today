/** @format */

import { createContext ,useState } from "react";

export let AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    let [isAuth,setIsAuth]=useState(true)


  return <AuthContext.Provider value={{isAuth,setIsAuth}}>
    {children}
    </AuthContext.Provider>;
}
