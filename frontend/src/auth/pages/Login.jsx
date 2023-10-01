import React, { useState, useContext } from "react";
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
        auth.login(resp.data.userId, resp.data.token, resp.data.expire);
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
    <div className="bg-white p-10 shadow md:w-3/4 lg:w-1/2 mx-auto">
      <h3>Login</h3>
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
        <Button variant="primary" label_txt="Login" type="submit" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
