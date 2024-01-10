import { Helmet } from "react-helmet-async";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
           <h2 className="text-3xl font-bold">Men Men Menu</h2> 
        </div>
    );
};

export default Menu;