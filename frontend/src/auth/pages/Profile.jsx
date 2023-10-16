import { useState, useEffect, useContext } from "react";
import Container from "../../shared/components/Container";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import handleSuccess, { handleError } from "../../shared/components/toast";
import SERVER_URL from "../../Constants";
import axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";
import { ToastContainer } from "react-toastify";

const Profile = () => {
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
          setProfileValue({ ...{ first_name, last_name, phone } });
        })
        .catch((err) => {
          handleError(err);
        });
    }
  }, [auth.token]);

  return (
    <div className="w-full">
      <Container>
        <div className="prose">
          <h2 className="pb-6">My Profile</h2>
          {/* {`${first_name} ${last_name}`} */}
        </div>
        <hr />
        <div className="py-4">
          <table>
            <tbody>
              <tr>
                <td className="font-bold">First Name</td>
                <td className="py-2 pl-4">{`${first_name}`}</td>
              </tr>
              <tr>
                <td className="font-bold">Last Name</td>
                <td className="py-2 pl-4">{`${last_name}`}</td>
              </tr>
              <tr>
                <td className="font-bold">Contact</td>
                <td className="py-2 pl-4">{`${phone}`}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Button variant="primary">Update Profile</Button>
        <Button variant="primary">Update Password</Button>
      </Container>
    </div>
  );
};
export default Profile;
