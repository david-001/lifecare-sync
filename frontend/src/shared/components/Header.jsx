import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

const Header = () => {
  const auth = useContext(AuthContext);
  let options;
  if (auth.token) {
    options = (
      <>
        <Nav.Item className="m-2">
          <Link to="patients" style={linkStyle}>
            Patient Intake
          </Link>
        </Nav.Item>
        <Nav.Item className="m-2">
          <Link to="updatepassword" style={linkStyle}>
            Update Password
          </Link>
        </Nav.Item>
        <Nav.Item className="m-2">
          <Link to="logout" style={linkStyle}>
            Logout
          </Link>
        </Nav.Item>
      </>
    );
  } else {
    options = (
      <>
        <Nav.Item className="m-2">
          <Link to="register" style={linkStyle}>
            Register
          </Link>
        </Nav.Item>
        <Nav.Item className="m-2">
          <Link to="login" style={linkStyle}>
            Login
          </Link>
        </Nav.Item>
      </>
    );
  }

  return (
    <Navbar className="navbar-main" variant="dark" expand="md">
      <Navbar.Brand className="mx-2">
        <Link to="/" style={linkStyle}>
          Lifecare Sync App
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {/* {auth.token && <span className="navbar-text mr-2">Welcome</span>}
          {auth.token ? authenticatedOptions : unauthenticatedOptions} */}
          {options}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
