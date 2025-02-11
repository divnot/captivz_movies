import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import React from "react";

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
                if(allPages.length < 1){
                    return allPages.length +1;
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

            <h1>...loaidng</h1>
            
            </>
        )
    }


    return(
        <>

        <ul style={{listStyleType:"none"}}>
            {
                data?.pages?.map((curr)=>{
                    return curr?.Search?.map((burr)=>{
                        return(
                            <li key={burr.imdbID}>
                                <figure >
                                    <img   src={burr.Poster} alt="no image avai" />
                                </figure>
                                <h1>{burr.Title}</h1>

                            </li>
                        )
                    })

                })
            }

        </ul>

        <button  style={{ boxShadow:"0px 0px 3px 2px green", position:"relative", left:"60rem"}}onClick={fetchNextPage}>load</button>

        <h1>its gallery</h1>
        
        
        </>
    )
}

export default Gallery;