import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Home from "../pages/Home.jsx";
import Main from '../layouts/Main.jsx'
import Plain from "../layouts/Plain.jsx";
import ProdcutView from "../pages/ProdcutView.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path:`/product/:_id`,
          element:<ProdcutView/>
        }
        
      ],
    },
    {
      path: "/welcome",
      element: <Plain />,
      children: [
        {
          path: "/welcome/login",
          element: <Login />
        }
      ]
    }
   
  ]);
  
  export default router;