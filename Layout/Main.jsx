import { Outlet } from "react-router-dom";
import Footer from "../src/shared/Footer/Footer";
import Navbar from "../src/shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;