import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import SERVER_URL from "../../Constants";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../shared/context/auth-context";
import "react-toastify/dist/ReactToastify.css";
const LOGIN_URL = SERVER_URL + "api/users/login";

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(LOGIN_URL, { ...inputValue })
      .then((resp) => {
        auth.login(
          resp.data.result.id,
          resp.data.result.token,
          resp.data.expire
        );
        navigate("/patients");
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

  const handleError = (err) =>
    toast.error(err, {
      position: toast.POSITION.TOP_RIGHT,
    });

  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Login</h3>
        <Form onSubmit={handleSubmit}>
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
          <Button className="my-2" variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
