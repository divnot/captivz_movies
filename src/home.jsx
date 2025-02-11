import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { NavLink } from "react-router";
//import { Ins } from "./axiouss";
//import { Data } from "./axiouss";
//import Api from "./api.json"
function Home(){
//const[Search , setSearch]=useState("");
const [ser, setser]=useState("");

function handled(event){
  return setser(event.target.value);

}



  


const api= async()=>{
  try {
    const result = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=f909d2a4&s=titanic&page=1")
    const output = await result.json();
   return output;
    
   // console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

function speak(){
  var recognition = new webkitSpeechRecognition();
  recognition.lang="en-GB";
  recognition.onresult= function(event){
    console.log(event)
    document.getElementById("enter").value=event.results[0][0].transcript;
  }
  recognition.start();
}


  


const {data , isloading }= useQuery(
  {
    queryKey:["/posts"], 
    queryFn:api,
  }
)
const taking = data?.Search?.filter((upd)=>{
  return upd.Title.toLowerCase().includes(ser.toLowerCase());


})
//useEffect(()=>{
 // api();

//},[]) 
console.log(data);



   
//console.log(pots);
 //   const handleexe=(e)=>{
   //   const name=e.target.name;
  //    const value=e.target.value;
  //    setfate((prev)=> ({...prev, [name]:value}))
  //  }
    
//console.log(fate);
   // console.log(data);

 //  function good(event){
  //  const d1 = event.target.value;
    
   // setSearch(d1);
   //}

   //console.log(Api);

 /*  const find = Api.filter((timing)=> timing.title.toLowerCase().includes(Search.toLowerCase()));
  
  
console.log(Search);

function speak(){
  var recognition = new webkitSpeechRecognition();
  recognition.lang="en-GB";
  recognition.onresult= function(event){
    console.log(event)
    document.getElementById("enter").value=event.results[0][0].transcript;
  }
  recognition.start();
} */


if(isloading){
  return(
    <>

    <h1>loading.....</h1>
    
    
    </>
  )
}

   
    return (
        <>
{ /* backgorund image */}
       <main>
        <div id="imag" >

<h1  id="taken">Centering the data </h1>

</div>
<div class="custom-shape-divider-bottom-1739098156">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
    </svg>
</div>

       </main>

      {/* <input id="enter" type="text" placeholder="search" value={Search} onChange={good} />
       
      <button onClick={speak}>speak</button> */}


        <ul>
        <input type="text" value={ser} onChange={handled}  id="enter" style={{position:"absolute" , bottom:"4rem" , left:"55rem", height:"3rem", width:"25rem", boxShadow:"0px 0px 1rem red"}}  placeholder="search"  />
        <button  style={{position:"absolute" , bottom:"4rem" , left:"75rem", height:"3rem", width:"5rem", boxShadow:"0px 0px 1rem red"}}  onClick={speak}><img src="src\images\mic.png" alt="no voice" /></button>
          {
          taking?. map((curr)=>{
              return(
                <li key={curr.imdbID}>
                  <figure>
                    <img src={curr.Poster} alt="not found" />
                  </figure>
                  <h1 id="ok">{curr.Title}</h1>
            <NavLink to={`/${curr.imdbID}`} ><button className="btn btn-primary">click</button></NavLink>
                </li>
              )

            })
          }
        </ul>


        <section>
        <div  style={{height:"10rem"}}>
    
 <span  style={{fontSize:"4rem"  , display:"flex" , justifyContent:"center", alignItems:"center", flexDirection:"row"}} className="badge bg-danger">Premium</span>
  </div>

      <div className="gallery">
        <div className="innergall">
          <span ><img src="https://upload.wikimedia.org/wikipedia/en/3/3f/SD_Goblin_King.jpg" alt="scroller not available" /> </span>
          <span ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnKO-0Uy8XToijRbp8m_9QHlRtLI9VyQlZow&s" alt="scroller not available" /> </span>
          <span ><img src="https://m.media-amazon.com/images/M/MV5BMTkzOTQ4Mjk2Ml5BMl5BanBnXkFtZTgwMjMyMDA3MjE@._V1_FMjpg_UX1000_.jpg" alt="scroller not available" /> </span>

        </div>
        <div className="innergall">
          <span ><img src="https://m.media-amazon.com/images/M/MV5BZTI0MjA3M2ItY2QzMS00MzZiLWE5YTAtM2ZlODk1MjBhNjA0XkEyXkFqcGc@._V1_.jpg" alt="scroller not available" /> </span>
          <span ><img src="https://play-lh.googleusercontent.com/ntLkjMLVk6PN-qQZDF0bVnaCXBWw1vdojd1h2nl5RZrjwm6e5Kac96Go2pMiGuWVYBNdhSO9g2oarTdKJEAJ" alt="scroller not available" /> </span>
          <span ><img src="https://m.media-amazon.com/images/M/MV5BOWI2MzAyZmUtMTg2ZS00NjY3LTg1YzYtNzVhOGQ4YjJkMjI3XkEyXkFqcGc@._V1_.jpg" alt="scroller not available" /> </span>

        </div>
        </div>
       
      </section>

      <section className="kids" >
        <div className="gallery">
        <div className="innergall">
          <span ><img src="https://static0.srcdn.com/wordpress/wp-content/uploads/2023/05/big-hero-6-movie-poster.jpg" alt="scroller not available" /> </span>
          <span ><img src="https://qqcdnpictest.mxplay.com/pic/857e390237ec8d70d2501c503c5f74f6/en/2x3/312x468/test_pic1734435187265.webp" alt="scroller not available" /> </span>
          <span ><img src="https://cdn.marvel.com/content/1x/spidermannwh_hardcover.jpg" alt="scroller not available" /> </span>

        </div>
        <div className="innergall">
          <span ><img src="https://preview.redd.it/if-you-were-to-make-another-movie-what-would-the-plot-be-v0-zzx7jaff2aob1.png?width=640&crop=smart&auto=webp&s=1fed1883bfe45a0f9e97564264536810abc913a1" alt="scroller not available" /> </span>
          <span ><img src="https://m.media-amazon.com/images/M/MV5BYzhjNzNhNzAtNjMxOS00YTRmLTk2Y2EtOTQ3OGIwMTI1MmJkXkEyXkFqcGc@._V1_.jpg" alt="scroller not available" /> </span>
          <span ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLyDYkfvHT4V4upZqYaPFe1X5cLGrSNPiPUg&s" alt="scroller not available" /> </span>

        </div>
        </div>
        
      </section>



        <section>

        <div  style={{height:"10rem"}}class="alert alert-danger alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
   <span style={{fontSize:"3rem"  , display:"flex" , justifyContent:"center", alignItems:"center", flexDirection:"row"}} > <strong>Packeges</strong>   </span>  
  </div>

          
          <div className="three">
          
            <div className="homeprice">
              <img src="data:image/jpeg;base64,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" alt="nohting" />
               <h1 style={{color:"green" , fontSize:"2.5rem"}}>Premium pack</h1>
            </div     >
            <div className="homeprice">
            <img  src="data:image/jpeg;base64,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" alt="nohting" />
            <h1 style={{color:"green" , fontSize:"2.5rem"}} >Gold Pack</h1>
            </div>
            <div className="homeprice" >
            <img src="https://images-cdn.ubuy.co.in/634e658528d8e3740f672753-dc-comics-movie-the-dark-knight-the.jpg" alt="nohting" />
            <h1  style={{color:"green" , fontSize:"2.5rem"}}>Sliver pack</h1>
            </div>
          </div>

         
        </section>




      


      
      
      

        </>
    )
}
export default Home;