'use client';
import { createContext, useContext, useState } from "react";

//Create Context
const GlobalContext = createContext();

//Create Provider
export function GlobalProvider({children}) {
    const [unreadMessageCount, setUnreadMessageCount] = useState(0);
    return (
        <GlobalContext.Provider value={{
            unreadMessageCount, 
            setUnreadMessageCount
        }}>
            {children}
        </GlobalContext.Provider>
    );
}


//create a custom hook to access context
export function useGlobalContext() {
    return useContext(GlobalContext);
}