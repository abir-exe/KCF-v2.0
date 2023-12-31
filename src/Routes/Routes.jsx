import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Distributors from "../Pages/Distributors/Distributors";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
        path: "/distributors",
        element: <Distributors></Distributors>
    }
  ]);

  export default router