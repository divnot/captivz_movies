import React from "react";
import { NavLink } from "react-router";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";


function Header(){
    return (
        <>
      

        
       <div  >

      
       <ul id="wow"  className="fixed-top "  style={{display:"flex" , backgroundColor:"rgba(0,0,0,0.8)"  }}>
        <NavLink className={"btn btn-outline-success"} to={"/"}><li style={{ color:"white", fontWeight:"20px"}}>Home</li></NavLink>
       <NavLink  className={"btn btn-outline-success"}to={"/about"}> <li style={{ color:"white"}}>About</li> </NavLink> 
       <NavLink className={"btn btn-outline-success"} to={"/contact"}> <li style={{ color:"white"}}>Contact</li> </NavLink> 
       <NavLink className={"btn btn-outline-success"} to={"/gallery"}> <li style={{ color:"white"}}>Gallery</li> </NavLink> 
       <NavLink  className={"btn btn-outline-success"}to={"/feedback"}> <li style={{ color:"white"}}>Feedback</li> </NavLink> 
       </ul>

    

       </div>
       
       
       
        </>
    )
}
export default Header;