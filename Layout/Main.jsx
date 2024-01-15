import { Outlet, useLocation } from "react-router-dom";
import Footer from "../src/shared/Footer/Footer";
import Navbar from "../src/shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation();
    const loginPage = location.pathname.includes('login');
    const registerPage = location.pathname.includes('register');
    
    return (
        <div>
            {(loginPage || registerPage) || <Navbar></Navbar>}
            <Outlet></Outlet>
            {(loginPage || registerPage) || <Footer></Footer>}
        </div>
    );
};

export default Main;