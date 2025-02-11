import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useParams } from "react-router";

function Innerhome(){

    const {id}=useParams();
    console.log(id);

const inner = async()=>{
       try{
        const data = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=f909d2a4`);
        const data1= await data.json();
        console.log(data1)
        return data1;
       }
       catch(error){

        console.log(error);

       }

    } 

   const {data , isLoading} = useQuery({
    queryKey:["/posts"],
    queryFn:inner,
   })
   if(isLoading){
    return(
        <h1>....loading</h1>
    )
   }

   console.log(data);


    return(
        <>
        <div className="innerd">

        <figure>
            <img  className="mostinner" src={data.Poster} alt="no image" />
        </figure>



        </div>
       
        
        
        
        </>
    )
}
export default Innerhome;