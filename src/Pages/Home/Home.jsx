import Banner from "../../Banner/Banner";
import Category from "../../Category/Category";
import Checkout from "../../Checkout/Checkout";
import Menus from "../Menus/Menus";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Menus></Menus>
            <Checkout></Checkout>
        </div>
    );
};

export default Home;