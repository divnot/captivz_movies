import React from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router";
function Nopage(){

const negativ = useNavigate();

function handleclick(){
    negativ(-1);
}

  return(
        <>
        <section data-aos="flip-up"  data-aos-duration="4000" id="great">

        <img id="money"  className="img-thumbnail" src="https://cdn.svgator.com/images/2024/04/animated-turtle-in-trouble-error-page.gif" alt="404 error" />
        <button style={{width:"20rem", height:"10rem" , fontSize:"6rem" }}    onClick={handleclick} className="btn btn-success">Back</button>    
        </section>
      
        
        </>
    )
}
export default Nopage;