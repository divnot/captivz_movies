import React from "react";

function About(){


  /*  function second (){

         
        const valuess= "123456789abcdef";
        var goodness="#";
        for(let i=0;i<6;i++){
            goodness=goodness + valuess[Math.trunc(Math.random()*16 )]
           
        }   
        return goodness;

    }

    let got;
    let got1;

    function changeme(){
       got= second();

      document.body.style.backgroundImage= `linear-gradient(to right , ${got}, rgb(152,63,198))`;
    }

    function changed(){
        got1= second();
 
       document.body.style.backgroundImage= `linear-gradient(to right , ${got}, ${got1})`; 
       
} 
       */


    return (
        <>
           { /*    <div style={{display:"flex" , justifyContent:"center"}}>
            <button style={{color:"black"}}  onClick={changeme}>change1</button>
            <button style={{color:"black"}} onClick={changed}>change2</button>
        </div> */}

      
      <header>

      <div id="about" >

        <h1  id="taken">Centering the data </h1>

</div>

      </header>

     



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

      
     
      
        </>
        
    )
}
export default About;