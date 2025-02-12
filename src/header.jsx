import React from "react";
import { NavLink } from "react-router";
import { IoReorderThree } from "react-icons/io5";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";


function Header(){

  const handletoggle=()=>{
   const tog = document.getElementById("handlenav1");
   tog.style.display="flex";
   
   
  }

function handleclose(){
    const tog1 = document.getElementById("handlenav1");
    tog1.style.display="none"

}


    return (
        <>
    
        
       <nav  >

       <ul  id="handlenav1" className="secondnav"  >
       <li  onClick={handleclose}  style={{ color:"white", width:"5rem" , height:"5rem"}}><img src="src\images\close.png" alt="close" /></li>
        <NavLink className={"btn btn-outline-success"} to={"/"}><li style={{ color:"white", fontWeight:"20px"}}>Home</li></NavLink>
       <NavLink  className={"btn btn-outline-success"}to={"/about"}> <li style={{ color:"white"}}>Kids</li> </NavLink> 
       <NavLink className={"btn btn-outline-success"} to={"/contact"}> <li style={{ color:"white"}}>Contact</li> </NavLink> 
       <NavLink className={"btn btn-outline-success"} to={"/gallery"}> <li style={{ color:"white"}}>Gallery</li> </NavLink> 
       <NavLink  className={"btn btn-outline-success"}to={"/feedback"}> <li style={{ color:"white"}}>Feedback</li> </NavLink> 
       </ul>
      
       <ul id="wow"  className="fixed-top "  style={{display:"flex" , backgroundColor:"rgba(0,0,0,0.8)"  }}>
        <li  style={{ color:"white", height:"4rem" , width:"4rem"}}> <img src="src\images\titledino.png" alt="noimage" /></li>
        <NavLink  className={"btn btn-outline-success "} id="hide"to={"/"}><li style={{ color:"white", fontWeight:"20px"}}>Home</li></NavLink>
       <NavLink   className={"btn btn-outline-success"} id="hide1"to={"/about"}> <li style={{ color:"white"}}>Kids</li> </NavLink> 
       <NavLink  className={"btn btn-outline-success "}id="hide2"to={"/contact"}> <li style={{ color:"white"}}>Contact</li> </NavLink> 
       <NavLink className={"btn btn-outline-success "}id="hide3"to={"/gallery"}> <li style={{ color:"white"}}>Gallery</li> </NavLink> 
       <NavLink  className={"btn btn-outline-success "}id="hide4"to={"/feedback"}> <li style={{ color:"white"}}>Feedback</li> </NavLink> 
       <li id="bar" onClick={handletoggle}  style={{ color:"white" }}><IoReorderThree /></li>
       
       </ul>

    
      
       </nav>
       
       
       
        </>
    )
}
export default Header;