import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Nav, Navbar } from "react-bootstrap";
import "./navbar.css";
import mentor from "../../../Assets/mentor.png"
import { auth } from "../../../firebase"

const Navb = () => {
  const [signedup, changeSignupstate] = useState(false);
  const [name, setName] = useState("");
  const [msg, setMsg]=useState("");
  const navigate= useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // ...
        changeSignupstate(true);
        setName(user.displayName);
      }
    });
  });

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);
  function logout() {
    auth.signOut().then(() => {
      // Sign-out successful.
      console.log("signed out");
      changeSignupstate(false);
      navigate("/");
    }).catch((error) => {
      // An error happened.
      setMsg("An error occured. Try again")
    });
  }
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
            <img src={mentor} alt="Example1" width="30" height="35" />entorNow
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse style={{ paddingLeft: "20px", textAlign: "center" }}>
          <Nav className="justify-content-end mr-auto my-2 my-lg-0" style={{ width: "100%", paddingRight: "30px" }} >
            {/* add name after successful signin */}
            {signedup ? 
            <Link className="links" to="/">Hello, {name} !</Link> : ""}
            <Link className="links" to="/">Explore</Link>
            {/* display if logged in */}
            {signedup ? <> <Link className="links " to='/expertprofile'>Become A Consultant</Link>
              <Link className="links" to='/profile'>Profile</Link>
              <Button className="Buttons"  onClick={logout} >Logout</Button>
            </> :
              <>
                <Link className="links " to='/login'>Sign In</Link>
                <Link className="links" to='/signup'> Join </Link>
              </>}

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navb;

