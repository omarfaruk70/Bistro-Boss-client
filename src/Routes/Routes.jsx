import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Menu/Menu";
import Order from "../Order/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element: <Menu></Menu>
        },
        {
          path: '/order/:category',
          element: <Order></Order>
        }
    ]
  },
]);
export default router;
