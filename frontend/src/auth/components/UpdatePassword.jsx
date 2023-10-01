import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SERVER_URL from "../../Constants";
import axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";
const UPDATEPASSWORD_URL = SERVER_URL + "api/users/updatepassword";

const UpdatePassword = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    token: auth.token,
    password_initial: "",
    new_password: "",
  });

  const { password_initial, password_update } = inputValue;

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .patch(
        UPDATEPASSWORD_URL,
        { ...inputValue },
        {
          headers: {
            Authorization: "Bearer " + auth.token,
          },
        }
      )
      .then(() => {
        handleSuccess("Successfully updated password!");
        setTimeout(() => {
          navigate("/");
        }, 1000);
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
        <h3>Update Password</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="oldPassword">
            <Form.Label>Old password</Form.Label>
            <Form.Control
              required
              name="password_initial"
              value={password_initial}
              type="password"
              placeholder="Old Password"
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group controlId="newPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              required
              name="password_update"
              value={password_update}
              type="password"
              placeholder="New Password"
              onChange={handleOnChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default UpdatePassword;
