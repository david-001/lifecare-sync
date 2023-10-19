import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";
import Button from "../../shared/components/Button";
import handleSuccess, { handleError } from "../../shared/components/toast";
import "react-toastify/dist/ReactToastify.css";

const DeletePatientModal = (props) => {
  const { show, handleClose, triggerRefresh } = props;
  const { id } = useParams();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();

    axios
      .delete(process.env.REACT_APP_SERVER_URL + `api/patients/delete/${id}`, {
        headers: {
          Authorization: "Bearer " + auth.token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((resp) => {
        handleSuccess(resp.data.response);
        navigate("/patients");
        handleClose();
      })
      .then(() => triggerRefresh())
      .catch((err) => {
        handleError(err.response.data.message);
      });
  };

  return (
    <div>
      {show ? (
        <div className="bg-black bg-opacity-80 w-full h-full fixed top-0 left-0 flex justify-center items-center">
          <div>
            <div className="bg-white flex justify-end">
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
            <div className="bg-white h-56 w-full max-w-sm md:max-w-lg lg:max-w-3xl px-10">
              <div className="prose">
                <h2 className="pb-6">
                  Are you sure you want to delete this patient?
                </h2>
                <p>
                  <b>Note:</b> This action cannot be undone.
                </p>
                <div className="flex justify-center w-full">
                  <Button variant="danger" onClick={handleDelete}>
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden"></div>
      )}
    </div>
  );
};
export default DeletePatientModal;
