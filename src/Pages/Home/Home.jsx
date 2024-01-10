import { Helmet } from "react-helmet-async";
import Banner from "../../Banner/Banner";
import Category from "../../Category/Category";
import Checkout from "../../Checkout/Checkout";
import Testimonials from "../../Testimonials/Testimonials";
import Menus from "../Menus/Menus";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro-Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Menus></Menus>
            <Checkout></Checkout>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;