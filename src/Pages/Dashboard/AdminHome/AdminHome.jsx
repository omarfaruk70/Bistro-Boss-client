import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProviders";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-3xl text-center my-8 font-bold">
        <span> Hi welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
    </div>
  );
};

export default AdminHome;
