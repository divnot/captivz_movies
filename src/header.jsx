import React, { useState } from "react";
import { NavLink } from "react-router";
import { IoReorderThree } from "react-icons/io5";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";


function Header(){

    const [type , settype]= useState(false);

    console.log(type);

  const handletoggle=()=>{
   const tog = document.getElementById("handlenav1");
   tog.style.display="flex";
   
   
  }

function handleclose(){
    const tog1 = document.getElementById("handlenav1");
    tog1.style.display="none"

}


function handlemal(){
    settype(!type);
}


    return (
        <>
     
     <header className="head">

      <div  className="mainnav">

      <div  className="innernav">
        <h1>divyansh</h1>

      </div>

<nav id="innernav2" className={type ? "show": "close"} >
{/*  <ul  id="handlenav1" className="secondnav"  >
<li  onClick={handleclose}  style={{ color:"white", width:"5rem" , height:"5rem"}}><img src="src\images\close.png" alt="close" /></li>
<NavLink className={"btn btn-outline-success"} to={"/"}><li style={{ color:"white", fontWeight:"20px"}}>Home</li></NavLink>
<NavLink  className={"btn btn-outline-success"}to={"/about"}> <li style={{ color:"white"}}>Kids</li> </NavLink> 
<NavLink className={"btn btn-outline-success"} to={"/contact"}> <li style={{ color:"white"}}>Contact</li> </NavLink> 
<NavLink className={"btn btn-outline-success"} to={"/gallery"}> <li style={{ color:"white"}}>Gallery</li> </NavLink> 
<NavLink  className={"btn btn-outline-success"}to={"/feedback"}> <li style={{ color:"white"}}>Feedback</li> </NavLink> 
</ul> */}

<ul   >

<NavLink   to={"/"}><li >Home</li></NavLink>
<NavLink   to={"/about"}> <li >Kids</li> </NavLink> 
<NavLink to={"/contact"}> <li >Contact</li> </NavLink> 
<NavLink to={"/gallery"}> <li >Gallery</li> </NavLink> 
<NavLink  to={"/feedback"}> <li>Feedback</li> </NavLink> 


</ul>
</nav>

<div className="pop">
    <button  onClick={handlemal} style={{color:"black"}}>click</button>
</div>



      </div>
       



     </header>
        
     
       
       
       
        </>
    )
}
export default Header;