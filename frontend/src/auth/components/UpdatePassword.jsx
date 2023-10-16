import { useState, useEffect, useContext } from "react";
import Container from "../../shared/components/Container";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import handleSuccess, { handleError } from "../../shared/components/toast";
import SERVER_URL from "../../Constants";
import axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";
import { ToastContainer } from "react-toastify";

const UpdatePassword = () => {
  const auth = useContext(AuthContext);

  const [password, setPassword] = useState({
    password_initial: "",
    password_update: "",
  });

  const { password_initial, password_update } = password;

  const handleSubmitPass = async (e) => {
    e.preventDefault();
    axios
      .patch(
        `${SERVER_URL}api/users/updatepassword`,
        { ...password },
        {
          headers: {
            Authorization: "Bearer " + auth.token,
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        handleSuccess(resp.data.response);
      })
      .catch((err) => {
        handleError(err);
      });
  };

  const handleOnPassChange = (e) => {
    const { name, value } = e.target;
    setPassword({
      ...password,
      [name]: value,
    });
  };
  return (
    <Container>
      <div className="prose">
        <h2 className="pb-6">Update Password</h2>
      </div>
      <form onSubmit={handleSubmitPass}>
        <Input
          label="password_initial"
          label_txt="Initial Password"
          type="password"
          id="password_initial"
          name="password_initial"
          placeholder="Initial Password"
          value={password_initial}
          onChange={handleOnPassChange}
        />
        <Input
          label="password_update"
          label_txt="Updated Password"
          type="password"
          id="password_update"
          name="password_update"
          placeholder="Update Password"
          value={password_update}
          onChange={handleOnPassChange}
        />
        <Button variant="primary" type="submit">
          Update Password
        </Button>
      </form>
    </Container>
  );
};
export default UpdatePassword;
