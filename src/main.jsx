import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Main from "./Root/Main.jsx";
import Home from "./components/Home/Home.jsx";
import AllPlants from "./Pages/AllPlants.jsx";
import AddPlant from "./Pages/AddPlant.jsx";
import MyPlants from "./Pages/MyPlants.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import Error from "./Error/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/*",
        element: <Error></Error>,
      },
      {
        path: "/allPlants",
        element: <AllPlants></AllPlants>,
      },
      {
        path: "/addPlant",
        element: <AddPlant></AddPlant>,
      },
      {
        path: "/myPlants",
        element: <MyPlants></MyPlants>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
