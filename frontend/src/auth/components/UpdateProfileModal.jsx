import { useState, useEffect, useContext } from "react";
import Container from "../../shared/components/Container";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import handleSuccess, { handleError } from "../../shared/components/toast";
import SERVER_URL from "../../Constants";
import axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";
import { ToastContainer } from "react-toastify";

const UpdateProfileModal = (props) => {
  const { show, handleClose, triggerRefresh } = props;
  const auth = useContext(AuthContext);

  const [profileValue, setProfileValue] = useState({
    first_name: "",
    last_name: "",
    phone: "",
  });

  const { first_name, last_name, phone } = profileValue;

  useEffect(() => {
    if (auth.token) {
      axios
        .get(`${SERVER_URL}api/users/profile`, {
          headers: {
            Authorization: "Bearer " + auth.token,
          },
        })
        .then((resp) => {
          // console.log(resp.data.result);
          const first_name = resp.data.profile.first_name;
          const last_name = resp.data.profile.last_name;
          const phone = resp.data.profile.phone;
          const email = resp.data.email;
          setProfileValue({ ...{ first_name, last_name, phone, email } });
        })
        .catch((err) => {
          handleError(err);
        });
    }
  }, [auth.token]);

  const handleSubmitProf = async (e) => {
    e.preventDefault();
    axios
      .patch(
        `${SERVER_URL}api/users/updateprofile`,
        { ...profileValue },
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

  const handleOnProfChange = (e) => {
    const { name, value } = e.target;
    setProfileValue({
      ...profileValue,
      [name]: value,
    });
  };

  return (
    <Container>
      <div className="prose">
        <h2 className="pb-6">Profile</h2>
      </div>

      <form onSubmit={handleSubmitProf}>
        <Input
          label="first_name"
          label_txt="First Name"
          type="text"
          id="first_name"
          name="first_name"
          placeholder="First Name"
          value={first_name}
          onChange={handleOnProfChange}
        />
        <Input
          label="last_name"
          label_txt="Last Name"
          type="text"
          id="last_name"
          name="last_name"
          placeholder="Last Name"
          value={last_name}
          onChange={handleOnProfChange}
        />
        <Input
          label="phone"
          label_txt="Phone"
          type="text"
          id="phone"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={handleOnProfChange}
        />

        <br />
        <Button variant="primary" type="submit">
          Update Profile
        </Button>
      </form>
      <ToastContainer />
    </Container>
  );
};
export default UpdateProfileModal;
