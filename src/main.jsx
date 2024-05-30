import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home/Home.jsx";
import { About } from "./components/About/About.jsx";
import { AllProducts } from "./components/AllProducts/AllProducts.jsx";
import { ServicesPage } from "./components/Services-page/ServicesPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/products",
    element: <AllProducts />,
  },

  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/services",
    element: <ServicesPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
