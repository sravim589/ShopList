import React, { useState } from "react";
import "./style.css";
import Shop from "./shopApi.js";
import ShopList from "./ShopList";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Shop.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const Home = () => {
  const [shopData, setMenuData] = useState(Shop);
  const [shopList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Shop);
      return;
    }

    const updatedList = Shop.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} shopList={shopList} />
      <ShopList shopData={shopData} />
    </>
  );
};

export default Home;
