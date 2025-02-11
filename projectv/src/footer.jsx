import React, { useContext } from "react";
import { context1 } from "./aluchan";

function Footer(){
    const hell = useContext(context1);

    return(
        <>
        <h1>its my first footer {hell} </h1>

        
        
        </>
    )
}

export default Footer;