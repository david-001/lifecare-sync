import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";
import handleSuccess, { handleError } from "../../shared/components/toast";
import PatientForm from "../forms/PatientForm";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const UpdatePatientModal = (props) => {
  const { show, handleClose, triggerRefresh } = props;
  const { id } = useParams();
  const auth = useContext(AuthContext);
  const [patient, setPatient] = useState(props.patient);

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .patch(
        process.env.REACT_APP_SERVER_URL + `api/patients/update/${id}`,
        { role: "patient", ...patient },
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
        handleError(err.response.data.message);
      });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPatient({
      ...patient,
      [name]: value,
    });
  };

  const handlePhotoUpload = (e) => {
    let pickedFile;
    if (e.target.files && e.target.files.length === 1) {
      pickedFile = e.target.files[0];
      setPatient({
        ...patient,
        image: pickedFile,
      });
    }
  };

  return (
    <div>
      {show ? (
        <div className="bg-black bg-opacity-80 w-full h-full fixed top-0 left-0 flex justify-center">
          <div className="bg-white overflow-y-auto w-full max-w-sm md:max-w-lg lg:max-w-3xl pl-10 pb-10">
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
                <h2 className="pb-6">Update Patient</h2>
              </div>
              <hr />
              <br />
              <PatientForm
                patient={patient}
                handleSubmit={handleSubmit}
                handleOnChange={handleOnChange}
                handlePhotoUpload={handlePhotoUpload}
              />
            </div>
            <ToastContainer />
          </div>
        </div>
      ) : (
        <div className="hidden"></div>
      )}
    </div>
  );
};

export default UpdatePatientModal;
