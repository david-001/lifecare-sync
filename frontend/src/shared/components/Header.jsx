import React, { useContext, useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SERVER_URL from "../../Constants";
import axios from "axios";

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

const Header = () => {
  const auth = useContext(AuthContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (auth.userId) {
      axios
        .get(SERVER_URL + `api/users/profile/${auth.userId}`, {
          headers: {
            Authorization: "Bearer " + auth.token,
          },
        })
        .then((resp) => {
          const first_name = resp.data.result.first_name;
          const last_name = resp.data.result.last_name;
          setUser(
            <>
              <span className="navbar-text mr-2">
                Welcome, {first_name} {last_name}
              </span>
            </>
          );
        })
        .catch((err) => {
          handleError(err);
        });
    } else {
      setUser(null);
    }
  }, [auth.token, auth.userId]);

  const handleError = (err) =>
    toast.error(err, {
      position: toast.POSITION.TOP_RIGHT,
    });

  let options;
  if (auth.token) {
    options = (
      <>
        <Nav.Item className="m-2">
          <Link to="addpatient" style={linkStyle}>
            Add Patient
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
          {user}
          {options}
        </Nav>
      </Navbar.Collapse>
      <ToastContainer />
    </Navbar>
  );
};

export default Header;
