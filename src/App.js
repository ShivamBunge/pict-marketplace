import "./Styles/App.css";
import React, { useEffect, useState, useLayoutEffect } from "react";
import Layer from "./Layer";
import ThirdPg from "./Components/Third_pg/Top/ThirdPg";
import Dashboard from "./Components/Dashboard/Dashboard";
import SupportExp from "./Components/Dashboard/SupportExp";
import AppointmentsExp from "./Components/Dashboard/AppointmentsExp";
import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Second_p from "./Components/Second_page/Second_p/Second_p";
import Navb from "./Components/Global/Navbar/Navbar";
import Footer from "./Components/Global/Footer/Footer";
import Explore_trending_data from "./Components/Landing_Page/Explore_trending_services/Explore_trending_data";

import Login from "./Components/auth/Login/Login";
import Signup from "./Components/auth/Signup/Signup";
import CustomerDb from "./Components/CustomerDb/CustomerDb";
import Appointments from "./Components/CustomerDb/Appointments";
import Support from "./Components/CustomerDb/Support";
import { auth } from "./firebase";
function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
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
        <Route path="/trendin_service/:title" element={<Second_p data={Explore_trending_data} />} />
        <Route path="/expertprofile" element={<Dashboard />}>
          <Route path="eappointments" element={< AppointmentsExp/>}/>
          <Route path='esupport' element={< SupportExp />}/>
        </Route>
        <Route path="Thirdpg" element={<ThirdPg />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/profile/*" element={<CustomerDb />}>
          <Route path='appointments' element={< Appointments />}></Route>
          <Route path='support' element={< Support />}></Route>
        </Route>


      </Routes>
      <Footer />
    </div>
  );
}

export default App;



