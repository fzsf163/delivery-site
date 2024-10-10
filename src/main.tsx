import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Copmany from "./routes/company.tsx";
import Contact from "./routes/contact.tsx";
import Home from "./routes/home.tsx";
import ErrorPage from "./routes/notfound.tsx";
import Service from "./routes/service.tsx";
import TrackingData from "./routes/trackinginfo.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "company",
        element: <Copmany></Copmany>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "service",
        element: <Service></Service>,
      },
      {
        path: "tracking",
        element: <TrackingData></TrackingData>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
