import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  RouterProvider,
} from "react-router-dom";

import {HomeRoutes} from "@/home/routes/HomeRoutes.tsx"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={HomeRoutes}/>
  </React.StrictMode>,
);
