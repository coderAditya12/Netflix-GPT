import React from 'react'
import Login from "./login";
import Browse from "./Browse";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
const Body = () => {

    const appRouter =createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])
  return (
    <div>
      <div>
        <RouterProvider router ={appRouter}/>
      </div>
    </div>
  )
}

export default Body
