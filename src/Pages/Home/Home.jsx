import { Helmet } from "react-helmet-async";
import Banner from "../../Banner/Banner";
import Category from "../../Category/Category";
import Checkout from "../../Checkout/Checkout";
import Testimonials from "../../Testimonials/Testimonials";
import Menus from "../Menus/Menus";
import Sectiontitle from "../../components/SectionTitle/SectionTitle";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
        <Sectiontitle
          heading="From Our Menus"
          subheading="Popular item"
        ></Sectiontitle>
        <Menus></Menus>
      <Checkout></Checkout>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;