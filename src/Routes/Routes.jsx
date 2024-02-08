import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Menu/Menu";
import Order from "../Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Register/Register";
import Dashboard from "../../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Allusers from "../Allusers/Allusers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "../PrivateRoutes/AdminRoutes";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";

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
    element: <PrivateRoutes><Dashboard ></Dashboard></PrivateRoutes>,
    children: [
      // normal users routes
      {
        path: '/dashboard/cart',
        element: <PrivateRoutes><Cart></Cart></PrivateRoutes>
      }, 
      // admin only routes
      {
        path: '/dashboard/additems',
        element:<AdminRoutes><AddItems></AddItems></AdminRoutes>
      },
      {
        path: '/dashboard/payment',
        element: <Payment></Payment>
      },
      {
        path: '/dashboard/paymenthistory',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: '/dashboard/manageitems',
        element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
      },
      {
        path: '/dashboard/updateitem/:id',
        element: <AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path: 'allusers',
        element:<AdminRoutes><Allusers></Allusers></AdminRoutes>
      }
    ]
  }
]);
export default router;
