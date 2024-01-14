import { useState } from "react";
import orderCover from "../assets/shop/banner2.jpg";
import Menucover from "../shared/Menucover/Menucover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [menu] = useMenu();
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  const tabs = (
    <>
      <Tab className="text-xl font-bold text-yellow-500 uppercase outline-none">
        Salad
      </Tab>
      <Tab className="text-xl font-bold text-yellow-500 uppercase outline-none">
        Pizza
      </Tab>
      <Tab className="text-xl font-bold text-yellow-500 uppercase outline-none">
        Soup
      </Tab>
      <Tab className="text-xl font-bold text-yellow-500 uppercase outline-none">
        Dessert
      </Tab>
      <Tab className="text-xl font-bold text-yellow-500 uppercase outline-none">
        Drinks
      </Tab>
    </>
  );
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <Menucover
        img={orderCover}
        title="our shop"
        paragraph="Would you like to try a dish?"
      ></Menucover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex justify-center items-center gap-8 cursor-pointer px-5 py-3">
          {tabs}
        </TabList>

        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
