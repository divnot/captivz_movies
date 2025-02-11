import React from "react";
import { useLoaderData, useParams } from "react-router";

function Hen(){

    
const oops= useLoaderData();
console.log(oops);
   
    return(
        <>

      <h1>{oops.id}</h1>
      <h1>{oops.title}</h1>

      
        
        </>
    )
}
export default Hen;