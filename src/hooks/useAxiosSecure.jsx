import axios from "axios";
// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProviders";
// import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    // const {logoutUser} = useContext(AuthContext);
    // const navigate = useNavigate();

    axiosInstance.interceptors.request.use(function(config) {
        const token = localStorage.getItem('accessToken')
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function(error){
        return Promise.reject(error)
    })


    // error status with 401 and 403;
    axiosInstance.interceptors.response.use(function (response) {
        return response;
      }, function (error) {
        console.log(error);
        // const statusCode = error.response.status;
        // for 401 or 403 status code . Logout the user and redirect user to the login page;
        // if(statusCode === 401 || statusCode === 403){
        //     // logoutUser()
        //     // .then(() => {})
        //     // .catch(err => console.log(err));
        //     navigate('/')

        // }
        // return Promise.reject(error);
      });
    return axiosInstance;
};

export default useAxiosSecure;
