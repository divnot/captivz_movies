import React from "react";
import { NavLink } from "react-router-dom";

function Header(){
    return(
        <>
       <ul style={{display:"flex"}}>
      <NavLink to="/">  <li>Home </li></NavLink>  
    < NavLink to="/about"> <li>About</li> </NavLink> 
       </ul>
        
        
        </>
    )
}

export default Header;