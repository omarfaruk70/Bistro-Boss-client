import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoutes = (children) => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading || isAdminLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <span className="loading loading-bars"></span>
      </div>
    );
  }
  if(user && isAdmin){
    return children ;
  }
  return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default AdminRoutes;
