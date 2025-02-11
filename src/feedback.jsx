import React, { useState } from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Feed(){
    const [feed, setfeed]=useState("");
    const[reci , setreci]=useState([]);

   /* ()=>{
        const item = localStorage.getItem("tdo");
        if(!item) return [];
        return JSON.parse(item);
    }*/

    const feedgot=(event)=>{
        setfeed(event.target.value)

    }
    console.log(feed);
    const dataadd=(event)=>{

        event.preventDefault();

        if(!reci) return ;
        setreci((prev)=> [...prev, feed] );

    }


    const handledel =(value)=>{
        const del= reci.filter((curr1)=>{
            return curr1 !== value;
        })
        setreci(del);
    }
    console.log(reci);

   // localStorage.setItem("tdo", JSON.stringify(reci));

    const handleclear=()=>{
        setreci([]);

    }
    

    return(
        <>

        <section>
            <div className="feedback">
                <div  className="Robo">
                    <figure>
                        <img src="src\images\feedback robo.png" alt="feedback " />
                    </figure>

                </div>
                <div  style={{textAlign:"center"}}>
                    <h1 className="text-success"  style={{textShadow:"0px 0px 1rem green", margin:"2rem"}}>Feedback</h1>
                    <form onSubmit={dataadd} >
                    <input  style={{border:"2px solid green " , borderRadius:"5px", boxShadow:"0px 0px 3px 3px white"}} type="text" placeholder="Enter your Feedback"  value={feed} onChange={feedgot}/>
                    <button  type="submit"  className="btn btn-success"  style={{border:"2px solid green " , borderRadius:"5px", boxShadow:"0px 0px 1px 1px green",margin:"0.1rem" }}  >Add</button>

                    </form>

                    <ul style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center"  }}>
                        {
                            reci?.map((curr, index)=>{
                                return(
                                    <li  style={{margin:"2rem", display:"flex", backgroundColor:"green" , borderRadius:"5px", width:"auto" , height:"auto", boxShadow:"0px 0px 1rem black inset"}}key={index}>

                                        <h1 style={{padding:"0.5rem"}}>{curr}</h1>
                                        <button  style={{margin:"1rem", height:"2rem"}}   onClick={()=> handledel(curr)} className="btn btn-danger">Delete</button>

                                    </li>
                                );

                            })
                        }
                        
                        <button style={{position:"relative", right:"1.5rem"}} onClick={handleclear} className="btn btn-danger">clear all</button>

                        
                        
                    </ul>
                   

                    

                </div>
              { /*  <div className="Robo">

                <figure>
                        <img id=" insv"  src="src\images\feedback robo.png" alt="feedback " />
                    </figure>


                </div>*/}
            </div>  
        </section>

      
        
        </>
    )
}

export default Feed;