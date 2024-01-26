import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    <div className="flex flex-col justify-center items-center h-screen">
      <span className="loading bg-gradient-to-r from-pink-500 from-10% via-yellow-500 via-30% to-red-500 to-90 w-16 md:w-24"></span>
      ;
    </div>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
