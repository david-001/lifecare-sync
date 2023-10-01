import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../shared/components/Button";
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
    <div className="bg-white p-10 shadow md:w-3/4 lg:w-1/2 mx-auto">
      <h3>Are you sure you want to logout?</h3>
      <br />
      <div className="flex flex-row flex-wrap justify-between w-3/4 md:w-1/2 lg:w-1/2">
        <Button
          variant="danger"
          label_txt="Logout"
          type="submit"
          onClick={onLogout}
        />
        <Button
          variant="warning"
          label_txt="Cancel"
          type="submit"
          onClick={onCancel}
        />
      </div>
    </div>
  );
};

export default Logout;
