import { useState, useContext } from "react";
import Container from "../../shared/components/Container";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";
import handleSuccess, { handleError } from "../../shared/components/toast";
import PatientForm from "../forms/PatientForm";
import LoadingSpinner from "../../shared/components/LoadingSpinner";

const AddPatient = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [patient, setPatient] = useState({
    first_name: "",
    last_name: "",
    age: "",
    contact: "",
    emergency_contact: "",
    pre_existing_conditions: "",
    symptoms: "",
    diagnosis: "",
    treatment: "",
    medication: "",
    comments: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}api/patients/new`,
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
        }, 2000);
      })
      .catch((err) => {
        setLoading(false);
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

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Container>
      <div className="prose">
        <h2 className="pb-6">Add Patient</h2>
      </div>
      <PatientForm
        patient={patient}
        handleSubmit={handleSubmit}
        handleOnChange={handleOnChange}
      />
    </Container>
  );
};
export default AddPatient;
