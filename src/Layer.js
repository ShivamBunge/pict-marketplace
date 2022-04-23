import React from "react";
import Trending from "./Components/page1/Trending/Trending";
import Navbar from "./Components/Global/Navbar/Navbar";
import Hero from "./Components/page1/Hero/Hero";
import Whyus from "./Components/page1/Whyus/Whyus";
import Footer from "./Components/Global/Footer/Footer";
import TopServices from "./Components/page1/Top_service/TopServices";

const Layer = () => {
  return (
    <div>
      <Navbar />
      <Hero />      
      <Trending/>
      <Whyus/>   
      <TopServices/>   
      <Footer/>
    </div>
  );
};

export default Layer;
