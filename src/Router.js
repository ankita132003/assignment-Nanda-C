import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Register from "../src/Components/Register";
import HomePage from "../src/Components/HomePage";
import Edit from "../src/Components/Edit"
const router = createBrowserRouter([
    {
        path: "/",
        element: <Register/>,
      },
      {
        path: "/HomePage",
        element: <HomePage/>,
      },
      {
        path: '/Edit/:id',
        element: <Edit/>,
      }

]);
export default router;
