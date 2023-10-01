import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from "react-bootstrap";
import { AuthContext } from "../../shared/context/auth-context";

const Logout = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const onLogout = () => {
    auth.logout();
    navigate("/");
  };

  const onCancel = () => {
    navigate("/patients");
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h2>Are you sure you want to logout?</h2>
          <br />
          <ButtonGroup>
            <Button className="mx-2" variant="danger" onClick={onLogout}>
              Logout
            </Button>
            <Button className="mx-2" variant="warning" onClick={onCancel}>
              Cancel
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
};

export default Logout;
