import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import {
    NostrosPage,
} from "@/home/pages/NostrosPage";
import { Agtech } from "../pages/Agtech";
import { Control } from "../pages/Control";
export const HomeRoutes = createBrowserRouter([
    {
      path: "/",
      children: [
        {path:"nosotros",element:<NostrosPage/>}, 
        {path: "agtech", element:<Agtech/>},
        {path: "control", element:<Control/>},
      ],

    },
    
  ]);
