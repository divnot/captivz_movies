//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import React from "react"
import Together from "./together"
import Home from "./home"
import About from "./about"
import { createBrowserRouter, RouterProvider } from "react-router"
import Contact from './Contact'
import Gallery from './gallery'
import Feed from './feedback'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Innerhome from './innerhome'
const router = createBrowserRouter([
  {
    path:"/",
    element:<Together/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/:id",
        element:<Innerhome/>
      },
      {

        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/gallery",
        element:<Gallery/>,
      },

      {
        path:"/feedback",
        element:<Feed/>,
      }
     
    ]
  }
])


function App() {

  const queryclient = new QueryClient();

return(
  <>

    <QueryClientProvider client={queryclient} >

    <RouterProvider router={router} />

    </QueryClientProvider>
    
 
  
  
  </>

)
 
    
}

export default App;
