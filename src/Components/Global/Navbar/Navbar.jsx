import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Button } from "react-bootstrap";
import "./navbar.css";
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
          <span>M</span>enter
          <span>N</span>ow
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse style={{ paddingLeft: "20px", textAlign: "center" }}>
          <Nav
            className="justify-content-end mr-auto my-2 my-lg-0"
            style={{ width: "100%", paddingRight: "30px" }}
          >
            <Link to='/expertprofile'>Explore</Link>
            <Link style={{color:"white",textDecoration:"None"}}  to='/expertprofile'>Become A Consultant</Link>
            <Link style={{color:"white",textDecoration:"None"}}  to='/login'>Sign In</Link>

            <Link to='/signup'>
              <Button
                variant='secondary'
                size='sm'
                style={{ backgroundColor: '#60d394' }}
              >
                Join
              </Button>{' '}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navb;
