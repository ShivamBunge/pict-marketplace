import "./Styles/App.css";
import React, { useLayoutEffect } from "react";
import Layer from "./Layer";
import ThirdPg from "./Components/Third_pg/Top/ThirdPg";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Second_p from "./Components/Second_page/Second_p/Second_p";
import Navb from "./Components/Global/Navbar/Navbar";
import Footer from "./Components/Global/Footer/Footer";
import Explore_trending_data from "./Components/Landing_Page/Explore_trending_services/Explore_trending_data";

function App() {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="App">
      <Navb />
      <Routes>
        <Route path="/" element={<Layer />} />
        <Route
          path="/trendin_service/:title"
          element={<Second_p data={Explore_trending_data} />}
        />
        <Route path="/expertprofile" element={<Dashboard/>}/>
        <Route path="/Thirdpg" element={<ThirdPg/>}/>

        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
