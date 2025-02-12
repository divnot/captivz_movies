import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import React from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Gallery (){


    const Unlim=async ({PageParams})=>{

        const tim= await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=f909d2a4&s=titanic&page=${PageParams}`);
        const time1= tim.json();
        return time1;
    }

  const   {data, isloading , fetchNextPage}= useInfiniteQuery(
        {
            queryKey:["/posts"],
            queryFn:Unlim,
            initialPageParam:1,
            getNextPageParam:(_lastPage, allPages)=>{
                console.log(_lastPage, allPages);
                if(allPages.length < 1){
                    return allPages.length +1 ;
                }
                else{
                    return undefined;
                }

            }
        }
    )

   // console.log(data);


    if(isloading){
        return(
            <>

            <h1>...loading</h1>
            
            </>
        )
    }


    return(
        <>

        <ul className="respon" style={{listStyleType:"none"}}>
            {
                data?.pages?.map((curr)=>{
                    return curr?.Search?.map((burr)=>{
                        return(
                            <li  data-aos="zoom-in"  data-aos-duration="4000"  key={burr.imdbID}>
                                <figure >
                                    <img   className="img-thumbnail" style={{boxShadow:"0px 0px 2px 1px green", margin:"1rem" , height:"45rem" }}  src={burr.Poster} alt="no image avai" />
                                </figure>
                                <h1 style={{alignItems:"center",margin:"1rem" ,textShadow:"0px 0px 0.5rem green"}}>{burr.Title}</h1>

                            </li>
                        )
                    })

                })
            }

        </ul>

        <button  style={{ boxShadow:"0px 0px 3px 2px green", position:"relative", left:"60rem"}}onClick={fetchNextPage}>load</button>

       
        
        
        </>
    )
}

export default Gallery;