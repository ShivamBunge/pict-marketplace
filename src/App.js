import "./Styles/App.css";
import React, { useEffect, useState, useLayoutEffect } from "react";
import Layer from "./Layer";
import ThirdPg from "./Components/Third_pg/Top/ThirdPg";
import Dashboard from "./Components/Dashboard/Dashboard";
import SupportExp from "./Components/Dashboard/SupportExp";
import AppointmentsExp from "./Components/Dashboard/AppointmentsExp";
import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navb from "./Components/Global/Navbar/Navbar";
import Footer from "./Components/Global/Footer/Footer";

import Login from "./Components/auth/Login/Login";
import Signup from "./Components/auth/Signup/Signup";
import { auth } from "./firebase";
import Marketplace from "./Components/Marketplace/TopServices";
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
        <Route path="/marketplace" element={<Marketplace/>} />
        <Route path="/expertprofile" element={<Dashboard />}>
          <Route path="eappointments" element={< AppointmentsExp/>}/>
          <Route path='esupport' element={< SupportExp />}/>
        </Route>
        <Route path="Thirdpg" element={<ThirdPg />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;



