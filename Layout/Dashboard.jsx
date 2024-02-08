import { NavLink, Outlet } from "react-router-dom";
import {
  FaBook,
  FaCalendar,
  FaCartShopping,
  FaList,
  FaMoneyCheckDollar,
  FaUsers,
} from "react-icons/fa6";
import { FaHome, FaSearch } from "react-icons/fa";
import { BsListCheck } from "react-icons/bs";
import { BiSolidStarHalf } from "react-icons/bi";
import useAdmin from "../src/hooks/useAdmin";
import useCart from "../src/hooks/useCart";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [allcartItem] = useCart();
  return (
    <div>
      <div className="flex">
        {/* Dashboard navigation  */}

        <div className="w-80 min-h-screen bg-yellow-500">
          <ul className="menu flex gap-5 py-10">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to={"/dashboard/adminhome"}>
                    <FaHome className="text-2xl"></FaHome>
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/additems"}>
                    <FaList className="text-2xl"></FaList>
                    Add items
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/manageitems"}>
                    <FaMoneyCheckDollar className="text-2xl"></FaMoneyCheckDollar>
                    Manage items
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/managebookings"}>
                    <FaBook className="text-2xl"></FaBook>
                    Manage Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/allusers"}>
                    <FaUsers className="text-2xl"></FaUsers>
                    All users
                  </NavLink>
                </li>
                
              </>
            ) : (
              <>
                <li>
                  <NavLink to={"/dashboard/userhome"}>
                    <FaHome className="text-2xl"></FaHome>
                    User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/reservation"}>
                    <FaCalendar className="text-2xl"></FaCalendar>
                    Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/cart"}>
                    <FaCartShopping className="text-2xl"></FaCartShopping>
                    My Cart({allcartItem.length})
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/paymenthistory"}>
                    <FaMoneyCheckDollar className="text-2xl"></FaMoneyCheckDollar>
                    Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/addreview"}>
                    <BiSolidStarHalf className="text-2xl"></BiSolidStarHalf>
                    Add a Review
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard/bookings"}>
                    <BsListCheck className="text-2xl"></BsListCheck>
                    My Bookings
                  </NavLink>
                </li>
              </>
            )}
            <hr />
            <li>
              <NavLink to={"/"}>
                <FaHome className="text-2xl"></FaHome>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/order/salad"}>
                <FaSearch className="text-2xl"></FaSearch>
                Explore More
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Dashboard Dynamic Content */}
        <div className="flex-1 w-full px-10">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
