import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
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


            <div>

            <figure>
            <img  className="mostinner img-thumbnail" src={data.Poster} alt="no image" />
        </figure>

            </div>
            <div>
                <h1 style={{textDecoration:"underline", textShadow:"0px 0px 5px green"}} className="text-success">{data.Title}</h1>
                <h2>Release:   {data.Year}</h2>
                <p>{data.Actors}</p>
                <h3>{data.imdbRating}</h3>
                <p>{data.Runtime} <span>{data.Language}</span></p>
                <button className="btn btn-success">Watch Now</button>

            </div>


       


        </div>
       
        
        
        
        </>
    )
}
export default Innerhome;