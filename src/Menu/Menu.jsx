import { Helmet } from "react-helmet-async";
import Menucover from "../shared/Menucover/Menucover";
import menuBg from "../assets/menu/banner3.jpg";
import desertBg from "../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../assets/menu/pizza-bg.jpg";
import saladBg from "../assets/menu/salad-bg.jpg";
import soupBg from "../assets/menu/soup-bg.jpg";
import Sectiontitle from "../components/SectionTitle/SectionTitle";
import useMenu from "../hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
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
      <Sectiontitle
        subheading="Don't Miss"
        heading="Today's Offer"
      ></Sectiontitle>
      {/* offered items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desert menu items */}
      <MenuCategory
      items={dessert}
        title="deserts"
        paragraph="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        coverImg={desertBg}
      ></MenuCategory>
      {/* pizza menu item */}
      <MenuCategory
      items={pizza}
        title="Pizza"
        paragraph="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        coverImg={pizzaBg}
      ></MenuCategory>
      {/* salad menu item */}
      <MenuCategory
      items={salad}
        title="Salad"
        paragraph="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        coverImg={saladBg}
      ></MenuCategory>
      {/* soup menu item */}
      <MenuCategory
      items={soup}
        title="Soup"
        paragraph="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        coverImg={soupBg}
      ></MenuCategory>

    </>
  );
};

export default Menu;
