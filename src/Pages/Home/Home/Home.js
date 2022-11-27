import React from "react";
import Slider from "../Banner/Slider";
import useTitle from "../../../hooks/Title";
import HomeCategories from "./HomeCategories";
import ContactUs from "../ContactUs/ContactUs";

const Home = () => {
  useTitle("Home");
  return (
    <div className="mx-5">
      <div>
        <Slider />
        <HomeCategories />
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
