import React from "react";
import ReactDOM from "react-dom/client";
//! aws amplify
import { Amplify } from "aws-amplify";
import amplifyconfig from "./amplifyconfiguration.json";
Amplify.configure(amplifyconfig);

import "./index.css";
import { RouterProvider } from "react-router-dom";

import { HomeRoutes } from "@/home/routes/HomeRoutes.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={HomeRoutes} />
  </React.StrictMode>,
);
