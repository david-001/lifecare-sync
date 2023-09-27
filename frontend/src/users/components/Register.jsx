import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import SERVER_URL from "../../Constants";
import axios from "axios";
import Form from "react-bootstrap/Form";
import "react-toastify/dist/ReactToastify.css";

const REGISTER_URL = SERVER_URL + "api/users/register";

const Register = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const {
    first_name,
    last_name,
    phone,
    email,
    password,
    password_confirmation,
  } = inputValue;

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(REGISTER_URL, { ...inputValue })
      .then(() => {
        handleSuccess("Successfully created account.");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((err) => {
        if (err.response.data.message) {
          handleError(err.response.data.message);
        } else {
          handleError(err.response.data);
        }
      });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: toast.POSITION.TOP_RIGHT,
    });

  const handleError = (err) =>
    toast.error(err, {
      position: toast.POSITION.TOP_RIGHT,
    });

  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Register</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="first_name">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              name="first_name"
              type="text"
              value={first_name}
              onChange={handleOnChange}
              placeholder="First Name"
            />
          </Form.Group>
          <Form.Group controlId="last_name">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              name="last_name"
              type="text"
              value={last_name}
              onChange={handleOnChange}
              placeholder="Last Name"
            />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              required
              name="phone"
              type="text"
              value={phone}
              onChange={handleOnChange}
              placeholder="Enter phone"
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              name="email"
              type="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name="password"
              type="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group controlId="password_confirmation">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              required
              name="password_confirmation"
              type="password"
              value={password_confirmation}
              onChange={handleOnChange}
              placeholder="Confirm Password"
            />
          </Form.Group>
          <Button className="my-2" variant="primary" type="submit">
            Create Account
          </Button>
        </Form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
