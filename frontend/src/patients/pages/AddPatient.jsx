import { useState, useContext } from "react";
import Container from "../../shared/components/Container";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";
import { ToastContainer } from "react-toastify";
import handleSuccess, { handleError } from "../../shared/components/toast";
import SERVER_URL from "../../Constants";
import PatientForm from "../forms/PatientForm";

const AddPatient = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    first_name: "",
    last_name: "",
    age: "",
    image: null,
    contact: "",
    emergency_contact: "",
    pre_existing_conditions: "",
    diagnosis: "",
    treatment: "",
    medication: "",
    comments: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(
        SERVER_URL + `api/patients/new`,
        { role: "patient", ...patient },
        {
          headers: {
            Authorization: "Bearer " + auth.token,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(() => {
        handleSuccess("Successfully added patient!");
        setTimeout(() => {
          navigate("/patients");
        }, 3000);
      })
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
    <Container>
      <div className="prose">
        <h2 className="pb-6">Add Patient</h2>
      </div>
      <PatientForm
        patient={patient}
        handleSubmit={handleSubmit}
        handleOnChange={handleOnChange}
        handlePhotoUpload={handlePhotoUpload}
      />
      <ToastContainer />
    </Container>
  );
};
export default AddPatient;
