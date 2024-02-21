import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import {
    NostrosPage,
} from "@/home/pages/NostrosPage";
import { Agtech } from "../pages/Agtech";
export const HomeRoutes = createBrowserRouter([
    {
      path: "/",
      children: [
        {path:"nosotros",element:<NostrosPage/>}, 
        {path: "agtech", element:<Agtech/>},
      ],

    },
    
  ]);
