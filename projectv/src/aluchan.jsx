import React, { createContext } from "react";

export const context1 = createContext();

 function Paw({children}){
    const first="alex";
    return (
        <>
        <context1.Provider value={first} >
            {children}
        </context1.Provider>  
        </>
    )
}
export default Paw;