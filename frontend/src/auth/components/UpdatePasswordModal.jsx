import { useState, useContext } from "react";
import Container from "../../shared/components/Container";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import handleSuccess, { handleError } from "../../shared/components/toast";
import SERVER_URL from "../../Constants";
import axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";
import { ToastContainer } from "react-toastify";

const UpdatePasswordModal = (props) => {
  const { show, handleClose, triggerRefresh } = props;
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
        handleClose();
      })
      .then(() => triggerRefresh())
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
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden"></div>
      )}
    </div>
  );
};
export default UpdatePasswordModal;
