import { Link, NavLink } from 'react-router-dom';
import { BiSolidUser } from "react-icons/bi";
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const Navbar = () => {
  const {user, logoutUser} = useContext(AuthContext);
  const handleLogOut = () => {
    logoutUser()
    .then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Logged Out successful",
        showConfirmButton: false,
        timer: 1500
      });
    })
  }
  console.log(user);
  const li = <>
         <li  className='hover:border-b-2 py-3 rounded-sm transition-all border-yellow-500'>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "text-white bg-amber-400 font-bold "
                  : ""
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li className='hover:border-b-2 py-3 rounded-sm transition-all border-yellow-500' >
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "text-white bg-amber-400 font-bold"
                  : ""
              }
              to={"/menu"}
            >
              Menus
            </NavLink>
          </li >
          <li className='hover:border-b-2 py-3 rounded-sm transition-all border-yellow-500'>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "text-white bg-amber-400  font-bold"
                  : " "
              }
              to={"/order/salad"}
            >
              Order
            </NavLink>
          </li>
  </>
    return (
      <div className='md:sticky bg-black opacity-70 top-0 z-[999] text-white'>
        <div className="  text-white navbar px-2 md:px-5 h-[80px] lg:px-10 border-b-2">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm flex justify-start items-start dropdown-content mt-3 z-[1] px-5 shadow bg-slate-50 rounded-box w-40">
          {li}
        </ul>
      </div>
      <Link>
      <h2 className='text-2xl font-bold'>Bistro-Boss</h2>
      </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 flex justify-center items-center gap-5">
        {li}        
      </ul>
    </div>
    <div className="navbar-end">
    <div className='flex justify-center items-center'>
      <div>
      </div>
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
      </div>
      </div>
      <ul tabIndex={0} className="flex flex-col text-slate-600 justify-center z-[99] px-4 py-5 bg-slate-50 items-start font-semibold gap-y-5 menu menu-sm dropdown-content mt-3  p-2 shadow rounded-box w-40">
      <Link to={'/'} className="hover:text-yellow-500">
      My added food
      </Link>
      <Link className='hover:text-yellow-500 ' to={'/'}>Add a food</Link>
      <Link className='hover:text-yellow-500 ' to={'/'}>My orderd food</Link>
      <Link  className='hover:text-yellow-500'>Logout</Link>
      </ul>
      </div>
    </div> 
    {user ? <Link onClick={handleLogOut} className="btn glass"><BiSolidUser className='text-2xl text-yellow-500' />Log out</Link>
    :
    <Link to={'/login'} className="btn glass"><BiSolidUser className='text-2xl text-yellow-500' />Login</Link>}
    </div>
        </div>
     </div>
    );
};

export default Navbar;