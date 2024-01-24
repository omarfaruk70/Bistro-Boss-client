import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../../Providers/AuthProviders";
import useAxiosPublic from '../hooks/useAxiosPublic';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const {googleLogin} = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => {
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName
      }
      axiosPublic.post('/users', userInfo)
      .then((result) => {
        console.log(result.data);
        if(result.data.insertedId){
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
        }
        navigate('/')
      })

    })
  }
    return (
        <button onClick={handleGoogleLogin} className="btn text-xl">
        <FaGoogle className="text-blue-800 "></FaGoogle>
        Google
      </button>
    );
};

export default SocialLogin;