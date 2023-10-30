import { useState, useEffect, useContext } from "react";
import Container from "../../shared/components/Container";
import Button from "../../shared/components/Button";
import { handleError } from "../../shared/components/toast";
import profile_photo from "../../imgs/profile_photo.jpeg";
import axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";
import LoadingSpinner from "../../shared/components/LoadingSpinner";
import UpdateProfileModal from "../components/UpdateProfileModal";
import UpdatePasswordModal from "../components/UpdatePasswordModal";

const Profile = () => {
  const auth = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [updateProfileModal, setUpdateProfileModal] = useState(false);
  const [updatePasswordModal, setUpdatePasswordModal] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState(false);
  const [updatedPassword, setUpdatedPassword] = useState(false);

  useEffect(() => {
    if (auth.token) {
      axios
        .get(`${process.env.REACT_APP_SERVER_URL}api/users/profile`, {
          headers: {
            Authorization: "Bearer " + auth.token,
          },
        })
        .then((resp) => {
          const first_name = resp.data.profile.first_name;
          const last_name = resp.data.profile.last_name;
          let phone;
          resp.data.profile.phone
            ? (phone = resp.data.profile.phone)
            : (phone = "");
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
  }, [auth, updatedProfile, updatedPassword]);

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
              src={
                profile.image
                  ? process.env.REACT_APP_SERVER_URL + profile.image
                  : profile_photo
              }
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
            setUpdatePasswordModal(true);
            console.log("password");
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
          triggerRefresh={() => setUpdatedProfile((prev) => !prev)}
        />
      </div>
      <div>
        <UpdatePasswordModal
          show={updatePasswordModal}
          handleClose={() => setUpdatePasswordModal(false)}
          triggerRefresh={() => setUpdatedPassword((prev) => !prev)}
        />
      </div>
    </Container>
  );
};
export default Profile;
