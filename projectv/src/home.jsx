import React, { useEffect, useState } from "react";
import {api, dataposting} from "./axious.jsx"
import { datadel } from "./axious.jsx";


function Home(){

    const [ok, setok]= useState([]);
    const [load1,setload1]=useState(true);
    const [formdata , setformdata]=useState({
      title:"", 
       body:"",

 });
    const [updatedata, setupdatedata]=useState({});
    const [count, setcount]=useState(0);
   // const[error,seterror]=useState(false);
    const  Data= async (count)=>{
        try{
           const get= await api(count);
          // const redd= await getting.json();
          // console.log(get.data);
           setok(get.data);
           setload1(false);


        }
        catch(error){
            console.log(error.message);
            setload1(false)
         //   seterror(error.message);

        }

    }
    //console.log(data1);

    useEffect(()=>{
        Data();
    },[])

    if(load1){
        return <h1>loaddingl....</h1>
    }
     
   // if(error){
   //     return <h1>{error.message}</h1>
   // }

   const handledel= async (id)=>{
    const del= await datadel(id);
  // console.log(del);
   if( del.status === 200 ){
    const dol = ok.filter((curr1)=>{
        return curr1.id !== id 
    } )
    
    setok(dol);

   }
 

   }

   const handleform=(e)=>{
   const name= e.target.name;
    const title=e.target.value;

    setformdata((prev)=>( { ...prev, [name]:title}) )


  }

const handlesub= async (e)=>{
    e.preventDefault();
    const val= await dataposting(formdata);
  // console.log(val);
   if(val.status === 201){
    setok((prev)=> [...prev,  formdata]);
   }
  }

  const handleedit= (ele)=>{
    setupdatedata(ele);

  }


// useEffect(()=>{
 //  updatedata && setformdata({
 //   title:updatedata.title,
 //   body:updatedata.body,
//  } )
//} , [])

 //seEffect((updatedata)=>{
  //pdatedata && setformdata({
 //    title:updatedata.title,
   //     body:updatedata.body,
  //)
    
 //, [updatedata])
  console.log(updatedata);

const handleinc=()=>{
    setcount((count)=> count+5)
}
const handledec=()=>{
    setcount((count)=> count-5)
}
    
    return(
        <>
         <form onSubmit={handlesub} >
                            <input type="text" name="title"  value={formdata.title} onChange={handleform} /> 
                            <input type="text" name="body" value={formdata.body}  onChange={handleform} />
                            <button  type="submit">add</button>
                           
                            </form>
        <ul>
            {
                ok.map((ele)=>{
                    return(
                        
                        <li key={ele.id}>
                            <h1>{ele.id}</h1>
                         
                            <h1>{ele.title}</h1>
                            <h2 >  {ele.body }  </h2>
                            
                            <button onClick={()=> handledel(ele.id)}>delete</button>
                            <button onClick={()=>handleedit(ele)}>edit</button>
                        </li>

            
                    )
                })
            }
        </ul>

<button onClick={handleinc}>next</button>
<h1>{count}</h1>
<button onClick={handledec}>previous</button>
  
        
        </>
    )
}

export default Home;