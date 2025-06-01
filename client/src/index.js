import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./Components/App";
import ErrorPage from "./Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <div>HOME</div> },
      { path: "instruments", element: <div>INSTRUMENTS</div> },
      { path: "media", element: <div>MEDIA</div> },
      { path: "order", element: <div>ORDER</div> },
      { path: "about", element: <div>ABOUT US</div> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
