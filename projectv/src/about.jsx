import {  useInfiniteQuery, useQuery } from "@tanstack/react-query";
import React from "react";



function About(){
   const apidata = async({pageparam})=>{
    try{
        const id3=await  fetch(`https://jsonplaceholder.typicode.com/posts?.limit=10&&page=${pageparam}`)
         const id4=await id3.json();
        return id4;


    }
    catch(error){
        console.log(error.message);
    }
    
}
    

    const {data , isLoading, fetchNextPage }= useInfiniteQuery(
        {
            queryKey:["posts"],
            queryFn:apidata,
            initialPageParam:1,
            getNextPageParam:(_lastpage,allpage)=>{
                if(allpage.length < 10){
                    return allpage.length +1;
                }
                else{
                    return undefined;
                }


            }

            
        }
    )

    if(isLoading){
        return(
            <h1>loading....</h1>
        )
    }

 
   console.log(data);
return(
        <>

        <ul>
            {
                data?.pages?.map((currele)=>{
                    return(
                        currele?.map((cur3)=>{
                            return(
                                <li key={cur3.id}>
                                    <h1>{cur3.title}</h1>

                                </li>
                            )
                        })
                    )

                })
            }
        </ul>
        <load onClick={fetchNextPage}>load</load>

        <h1>its about  page</h1>  
        </>
    )
}

export default About;