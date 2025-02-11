import React, { useState } from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Contact(){


    const [know,setknow ]=useState({
        name:"",
        email:"",
        comment:"",
    })



    const handlechange = (event)=>{
        
            const name= event.target.name;
            const value = event.target.value;

            setknow((prev)=> ({...prev , [name]:value}));

        
    }
//console.log(know)


function handlesub(event){
    event.preventDefault();
   
   console.log(know);

}

    return(
        <>

        <div className="twores1">
            <div className="two">
            <h1 className="form1" style={{fontSize:"6rem"}}>Contact Form</h1>    
                <form onSubmit={handlesub}>

                <label forHTML="name">Name:</label>
                <input type="text" class="form-control" id="name" placeholder="Enter your name"  value={know.name} name="name" onChange={handlechange}/>
                <br/>
                
                <label forHtml="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"  value={know.email} onChange={handlechange}></input>
        <br/>
      <label forHTML="name">Pakges:</label>
                <select class="form-select" id="sel1" name="sellist">
                <option>Premium</option>
                <option>Gold</option>
                <option>Silver</option>
                <option>Basic</option>
                 </select> <br/>


      <label forHtml="comment">Comment:</label>
      <textarea class="form-control" id="comment" name="comment" placeholder="Comment " value={know.comment} onChange={handlechange}></textarea>

    <button style={{boxShadow:"0rem 0rem 0.3rem 0.3rem green"}} type="submit" class="btn btn-success  mt-3">Submit</button>


                </form>
               
                </div>
            <div className="two">
                <img src="src\images\contact us.png" alt="contact us" style={{height: "45rem", width:"50rem"}}  />

                
                </div>
            

        </div>
       
        
        </>
    )
}

export default Contact;