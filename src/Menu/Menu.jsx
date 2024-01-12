import { Helmet } from "react-helmet-async";
import Menucover from "../shared/Menucover/Menucover";
import menuBg from "../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Menucover
        img={menuBg}
        title={"Our Menu"}
        paragraph={"Would you like to try a dish?"}
      ></Menucover>
    </>
  );
};

export default Menu;