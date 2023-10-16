import React, { useState, useContext } from "react";
import Container from "../../shared/components/Container";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../../shared/context/auth-context";
import { useNavigate } from "react-router-dom";
import { handleError } from "../../shared/components/toast";
import axios from "axios";
import SERVER_URL from "../../Constants";

const Login = () => {
  const LOGIN_URL = SERVER_URL + "api/users/login";

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
          resp.data.userId,
          resp.data.userName,
          resp.data.token,
          resp.data.expire
        );
        // console.log(resp.data.expire);
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

  return (
    <Container>
      <div className="prose">
        <h2 className="pb-6">Login</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <Input
          label="email"
          label_txt="Email"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleOnChange}
        />
        <Input
          label="password"
          label_txt="Password"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleOnChange}
        />
        <Button variant="primary" type="submit">
          Login
        </Button>
      </form>
      <ToastContainer />
    </Container>
  );
};

export default Login;
