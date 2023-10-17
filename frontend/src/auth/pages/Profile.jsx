import { useState, useEffect, useContext } from "react";
import Container from "../../shared/components/Container";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import handleSuccess, { handleError } from "../../shared/components/toast";
import SERVER_URL from "../../Constants";
import profile_photo from "../../imgs/profile_photo.jpeg";
import axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";
import { ToastContainer } from "react-toastify";
import LoadingSpinner from "../../shared/components/LoadingSpinner";
import UpdateProfileModal from "../components/UpdateProfileModal";

const Profile = () => {
  const auth = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [updateProfileModal, setUpdateProfileModal] = useState(false);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    if (auth.token) {
      axios
        .get(`${SERVER_URL}api/users/profile`, {
          headers: {
            Authorization: "Bearer " + auth.token,
          },
        })
        .then((resp) => {
          const first_name = resp.data.profile.first_name;
          const last_name = resp.data.profile.last_name;
          const phone = resp.data.profile.phone;
          const image = resp.data.profile.image;
          const email = resp.data.email;
          setProfile({
            first_name,
            last_name,
            phone,
            image,
            email,
          });
        })
        .catch((err) => {
          handleError(err);
        });
    }
  }, [auth, updated]);

  if (!profile) {
    return <LoadingSpinner />;
  }

  return (
    <Container>
      <div className="prose">
        <h2 className="pb-6">My Profile</h2>
      </div>
      <hr />
      <br />
      <div>
        <div className="flex flex-wrap">
          <div className="pb-10 flex justify-center items-center lg:w-52">
            <img
              src={profile.image ? SERVER_URL + profile.image : profile_photo}
              alt={`${profile.first_name} ${profile.last_name}`}
            />
          </div>

          <div className="w-2/3 lg:pl-8">
            <table>
              <tbody>
                <tr>
                  <td className="font-bold">First Name</td>
                  <td className="py-2 pl-4">{profile.first_name}</td>
                </tr>
                <tr>
                  <td className="font-bold">Last Name</td>
                  <td className="py-2 pl-4">{profile.last_name}</td>
                </tr>
                <tr>
                  <td className="font-bold">Phone</td>
                  <td className="py-2 pl-4">{profile.phone}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <Button
          variant="warning"
          onClick={() => {
            setUpdateProfileModal(true);
          }}
        >
          Update Profile
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            // setDeletePatientModal(true);
          }}
        >
          Update Password
        </Button>
      </div>
      <div>
        <UpdateProfileModal
          show={updateProfileModal}
          handleClose={() => setUpdateProfileModal(false)}
          profile={profile}
          triggerRefresh={() => setUpdated((prev) => !prev)}
        />
      </div>
      <ToastContainer />
    </Container>
  );
};
export default Profile;
