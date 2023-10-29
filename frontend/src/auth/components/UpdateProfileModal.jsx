import { useState, useContext } from "react";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import handleSuccess, { handleError } from "../../shared/components/toast";
import axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const UpdateProfileModal = (props) => {
  const { show, handleClose, triggerRefresh } = props;
  const auth = useContext(AuthContext);

  const [profile, setProfile] = useState(props.profile);
  const { first_name, last_name, phone } = profile;

  const handleSubmitProf = async (e) => {
    e.preventDefault();
    axios
      .patch(
        `${process.env.REACT_APP_SERVER_URL}api/users/updateprofile`,
        { role: "doctor", old_image: props.profile.image, ...profile },
        {
          headers: {
            Authorization: "Bearer " + auth.token,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((resp) => {
        handleSuccess(resp.data.response);
        handleClose();
      })
      .then(() => triggerRefresh())
      .catch((err) => {
        handleError(err);
      });
  };

  const handleOnProfChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handlePhotoUpload = (e) => {
    let pickedFile;
    if (e.target.files && e.target.files.length === 1) {
      pickedFile = e.target.files[0];
      setProfile({
        ...profile,
        image: pickedFile,
      });
    }
  };

  return (
    <div>
      {show ? (
        <div className="bg-black bg-opacity-80 w-full h-full fixed top-0 left-0 flex justify-center items-center">
          <div className="bg-white overflow-y-auto w-full h-fit max-w-sm md:max-w-lg lg:max-w-3xl pl-10 pb-10">
            <div className="bg-white overflow-auto flex justify-end">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={handleClose}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="pr-10">
              <div className="prose">
                <h2 className="pb-6">Update My Profile</h2>
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
                {/* <Input
                  type="file"
                  label="image"
                  label_txt="Upload profile photo"
                  accept=".jpg,.png,.jpeg"
                  onChange={handlePhotoUpload}
                /> */}

                <br />
                <Button variant="primary" type="submit">
                  Update Profile
                </Button>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden"></div>
      )}
    </div>
  );
};
export default UpdateProfileModal;
