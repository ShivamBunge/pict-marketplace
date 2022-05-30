import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Image,Nav, Navbar } from "react-bootstrap";
import "./navbar.css";
import mentor from "../../../Assets/mentor.png"
const Navb = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div className="App nav">
      <Navbar
        variant="dark"
        expand="sm"
        fixed="top"
        collapseOnSelect
        id=""
        className={colorChange ? "navbar colorChange" : "navbar"}
      >
        <Navbar.Brand className="nav-media" style={{ color: "green" }}>
          <Link className="logo" to="/">
          <img src={mentor} alt="Example1" width="30" height="35"/>entorNow
        </Link>
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse style={{ paddingLeft: "20px", textAlign: "center" }}>
          <Nav className="justify-content-end mr-auto my-2 my-lg-0" style={{ width: "100%", paddingRight: "30px" }} >
            <Link className="links" to="/">Explore</Link>
            <Link className="links "  to='/expertprofile'>Become A Consultant</Link>
            <Link className="links "  to='/login'>Sign In</Link>
            <Link className="links"  to='/signup'> Join </Link>
            <Link className="links"  to='/profile'>Profile</Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navb;
