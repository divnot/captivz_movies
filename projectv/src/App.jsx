import React from "react"
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import Center1 from "./center.jsx";
import About from "./about.jsx"
import Home from "./home.jsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Center1/>,
      children:
      [
        {
          path:'/',
          element:<Home/>,
      
        },
        {
        
          path:'/about',
          element:<About/>,
      
        },
       
      ],
    }
  ]
)

function App() {


  const queryclint = new QueryClient();

  
  return (

    <>
    <QueryClientProvider client={queryclint} >

    <RouterProvider router={router} />

    </QueryClientProvider>
    
   
    </>

  )
  

}

export default App