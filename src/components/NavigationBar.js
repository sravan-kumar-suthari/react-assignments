import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const NavigationBar = (props) => {
  const navLinksStyle = {
    color: "white",
    fontWeight: "bold",
    padding: "0px 8px 0px 8px",
  };
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "#03506f" }} variant="dark">
        <Navbar.Brand>
          <Link to="/" style={{ color: "white" }}>
            User Details
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavLink
              to="/"
              exact
              style={navLinksStyle}
             activeStyle={{color:"red"}}
            >
              Home
            </NavLink>

            <NavLink
              to="/register"
              style={navLinksStyle}
              activeStyle={{color:"red"}}
            >
              SignUp
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavigationBar;
