import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Register from "../src/Components/Register";
import HomePage from "../src/Components/HomePage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Register/>,
      },
      {
        path: "/HomePage",
        element: <HomePage/>,
      },
]);
export default router;
