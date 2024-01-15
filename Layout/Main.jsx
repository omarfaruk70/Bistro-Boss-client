import { Outlet, useLocation } from "react-router-dom";
import Footer from "../src/shared/Footer/Footer";
import Navbar from "../src/shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation();
    const loginRegisterPage = location.pathname.includes('login') || location.pathname.includes('register');
    return (    
        <div>
            { loginRegisterPage || <Navbar></Navbar>}
            <Outlet></Outlet>
            {loginRegisterPage || <Footer></Footer>}
        </div>
    );
};

export default Main;