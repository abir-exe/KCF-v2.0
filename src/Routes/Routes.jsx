import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Distributors from "../Pages/Distributors/Distributors";
import Main from "../Layout/Main";
import Contact from "../Pages/Contact/Contact";
import WhoWeAre from "../Pages/WhoWeAre/WhoWeAre";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/distributors",
            element: <Distributors></Distributors>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path: "/whoweare",
          element: <WhoWeAre></WhoWeAre>
        }
      ]
    },

    
  ]);

  export default router