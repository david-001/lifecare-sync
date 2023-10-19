import React, { useContext } from "react";
import Container from "../../shared/components/Container";
import { useNavigate } from "react-router-dom";
import Button from "../../shared/components/Button";
import { AuthContext } from "../../shared/context/auth-context";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const Logout = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const onLogout = () => {
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}api/users/logout`,
        {},
        {
          headers: {
            Authorization: "Bearer " + auth.token,
          },
        }
      )
      .then(() => {
        auth.logout();
        navigate("/");
      })
      .catch((err) => {
        if (err.response.data.message) {
          // handleError(err.response.data.message);
        } else {
          // handleError(err.response.data);
        }
      });
  };

  const onCancel = () => {
    navigate("/patients");
  };

  return (
    <Container>
      <h3>Are you sure you want to logout?</h3>
      <br />
      <div className="flex flex-row flex-wrap justify-between w-3/4 md:w-1/2 lg:w-1/2">
        <Button variant="danger" type="submit" onClick={onLogout}>
          Logout
        </Button>
        <Button variant="warning" type="submit" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </Container>
  );
};

export default Logout;
