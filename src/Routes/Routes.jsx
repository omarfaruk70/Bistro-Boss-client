import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Menu/Menu";
import Order from "../Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Register/Register";
import Dashboard from "../../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Allusers from "../Allusers/Allusers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "../PrivateRoutes/AdminRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <div className="flex justify-center items-center h-screen">SOrry ! There is no time for creating attractive error page</div>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element:<Menu></Menu>
        },
        {
          path: '/order/:category',
          element: <Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      // normal users routes
      {
        path: '/dashboard/cart',
        element: <Cart></Cart>
      }, 
      // admin only routes
      {
        path: 'allusers',
        element: <AdminRoutes><Allusers></Allusers></AdminRoutes>
      },
      {
        path: 'additems',
        element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
      }
    ]
  }
]);
export default router;
