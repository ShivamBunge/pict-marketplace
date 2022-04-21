import React from "react";
import Trending from "./Components/page1/Trending/Trending";
import Navbar from "./Components/Global/Navbar/Navbar";
import Hero from "./Components/page1/Hero/Hero";
import Whyus from "./Components/page1/Whyus/Whyus";
import Footer from "./Components/Global/Footer/Footer";
import Top_services from "./Components/page1/Top_service/Top_service";

const Layer = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      
      <Trending/>
      <Whyus/>   
      <Top_services/>   
      <Footer/>
    </div>
  );
};

export default Layer;
