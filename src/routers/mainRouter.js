import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Edit from "../pages/Edit";
import MainLayout from '../layouts/MainLayout'
import Protected from "./Protected";
import Login from "../pages/Login";

const router=createBrowserRouter([
    {
      path:"/" ,
      element:<MainLayout/>,
   
       children:[
        {
            index:true,
            element:<Home/>
        },

        { path:"about",
        element:<About/>
    },
    {
        path:"contact",
        element:<Contact/>
    },
    {
        path:"login",
        element:<Login/>
    },
    {
        path:"edit",
        element:<Protected/>,
        children:[
            {
                index:true,
                element:<Edit/>
            }
        ]
    }

       ]
    },
    {
       
    },
   
])

export default router;