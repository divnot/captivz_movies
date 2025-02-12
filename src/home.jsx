import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { NavLink } from "react-router";
//import { Ins } from "./axiouss";
//import { Data } from "./axiouss";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Home(){

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


</div>
<div class="custom-shape-divider-bottom-1739098156">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
    </svg>
</div>

       </main>

      {/*   <section>
    <div  className="search" style={{margin:"0.5rem"}} >
      <span >    <input type="text" value={ser} onChange={handled}  id="enter" style={{position:"relative" , bottom:"4rem" , left:"50em", height:"3rem", width:"25rem", boxShadow:"0px 0px 1rem red"}}  placeholder="search"  />                                                                                               </span>
      <span> <button  style={{position:"relative" , bottom:"4rem" , left:"50rem", height:"3rem", width:"5rem", boxShadow:"0px 0px 1rem red"}}  onClick={speak}><img src="src\images\mic.png" alt="no voice" /></button></span>

      </div>
      </section> */}

       
       
      

       <ul  className="respon" >
       
       {
       taking?.map((curr)=>{
           return(
             <li  data-aos="zoom-in"  data-aos-duration="4000" className="t1 img-thumbnail" key={curr.imdbID}>
               <figure>
                 <img style={{width:"30rem", height:"30rem"}} src={curr.Poster} alt="not found" />
               </figure>
               <h1 id="ok">{curr.Title}</h1>
         <NavLink  id="down" to={`/${curr.imdbID}`} ><button className="btn btn-success ">Detail</button></NavLink>
             </li>        
           )

         })
       }
     </ul>





       
     
      {/* <ul  >
       
          {
          taking?.map((curr)=>{
              return(
                <li className="t1" key={curr.imdbID}>
                  <figure>
                    <img style={{width:"30rem", height:"30rem"}} src={curr.Poster} alt="not found" />
                  </figure>
                  <h1 id="ok">{curr.Title}</h1>
            <NavLink  id="down" to={`/${curr.imdbID}`} ><button className="btn btn-success ">Detail</button></NavLink>
                </li>        
              )

            })
          }
        </ul>*/}


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

          
          <div className="threehome">
          
            <div   data-aos="zoom-in"  data-aos-duration="4000" className="homeprice">
              <img className="homesmall"     src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/premium-quality-logo-design-template-45b0208ecd5d0291b3679b581b7b999c_screen.jpg?ts=1660200227" alt="nohting" />
               <h1 style={{color:"green", margin:"1rem" , fontSize:"2.5rem"}}>$299</h1>
            </div     >
            <div  data-aos="zoom-in"  className="homeprice">
            <img  className="homesmall" src="https://img.freepik.com/free-vector/gold-color-editable-text-luxury-black-background_331749-351.jpg?semt=ais_hybrid" alt="nohting" />
            <h1 style={{color:"green",margin:"1rem"  , fontSize:"2.5rem"}} >$199</h1>
            </div>
            <div  data-aos="zoom-in" className="homeprice" >
            <img  className="homesmall" src="https://img.freepik.com/premium-photo/silver-chrome-logo-with-word-silver-it_1151350-27813.jpg" alt="nohting" />
            <h1  style={{color:"green",margin:"1rem"  , fontSize:"2.5rem"}}>$99</h1>
            </div>
          </div>

         
        </section>     
      

        </>
    )
}
export default Home;