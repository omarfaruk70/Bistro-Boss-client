import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center h-screen">
          <span className="loading loading-bars w-32  font-bold"></span>
        </div>
        ;
      </div>
    );
  }
  if (user) {
    return children;
  }
  // console.log(user);
  return <Navigate state={{ from: location }} to={"/login"}></Navigate>;
};

export default PrivateRoutes;
