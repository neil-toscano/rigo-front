import { createBrowserRouter } from "react-router-dom";
import { NostrosPage } from "@/home/pages/NostrosPage";
import { Agtech } from "../pages/Agtech";
import AmplifyForm from "../pages/AmplifyForm";

export const HomeRoutes = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "nosotros", element: <NostrosPage /> },
      { path: "agtech", element: <Agtech /> },
      { path: "amplify", element: <AmplifyForm /> },
    ],
  },
]);
