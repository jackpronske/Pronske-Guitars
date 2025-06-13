import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./Components/App";
import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/Home";
import Instruments from "./Components/Instruments";
import Media from "./Components/Media";
import Order from "./Components/Order";
import AboutUs from "./Components/AboutUs";

import "./Styles/App.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "instruments", element: <Instruments /> },
      { path: "media", element: <Media /> },
      { path: "order", element: <Order /> },
      { path: "about", element: <AboutUs /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
