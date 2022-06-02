import React from "react";
import Explore_trending_services from "./Components/Landing_Page/Explore_trending_services/Explore_trending_services";
import Hero from "./Components/Landing_Page/Hero/Hero";
import TopServices from "./Components/Landing_Page/TopServices/TopServices";
import Whyus from "./Components/Landing_Page/Whyus/Whyus";


const Layer = () => {
  return (
    <div>
      <Hero />
      <Explore_trending_services />
      <Whyus />
      <TopServices />
    </div>
  );
};

export default Layer;
