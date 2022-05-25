import React from "react";
import Banner from "../../Components/Banner";
import Contact from "../../Components/Contact";
import Offers from "../../Components/Offers";
import Parts from "../../Components/Parts";
import Review from "../../Components/Review";
import Services from "../../Components/Services";
import Special from "../../Components/Special";

const Home = () => {
  return (
    <div className=" grid grid-cols-1 gap-y-20">
      <Banner />
      <Parts />

      <Review />
      <Special />
      <Offers />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
