import React, { useState, useEffect, useContext } from "react";
import Container from "../../shared/components/Container";
import axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";
import { useParams, useNavigate } from "react-router-dom";
import { handleError } from "../../shared/components/toast";
import SERVER_URL from "../../Constants";
import profile_photo from "../../imgs/profile_photo.jpeg";
import LoadingSpinner from "../../shared/components/LoadingSpinner";
import Button from "../../shared/components/Button";
import UpdatePatientModal from "../components/UpdatePatientModal";
import DeletePatientModal from "../components/DeletePatientModal";

const PatientDetail = () => {
  const auth = useContext(AuthContext);
  const [patient, setPatient] = useState(null);
  const [updatePatientModal, setUpdatePatientModal] = useState(false);
  const [deletePatientModal, setDeletePatientModal] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [userName, setUserName] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.token) {
      axios
        .get(SERVER_URL + `api/patients/fetch/${id}`, {
          headers: {
            Authorization: "Bearer " + auth.token,
          },
        })
        .then((resp) => {
          setPatient(resp.data.patient);
          setUserName(auth.userName);
        })
        .catch((err) => {
          handleError(err);
        });
    } else {
      navigate("/login");
    }
  }, [auth, id, navigate, updated]);

  if (!patient) {
    return <LoadingSpinner />;
  }

  return (
    <Container>
      <div className="prose">
        <h2 className="pb-6">Patient Profile</h2>
      </div>
      <hr />
      <br />
      <div>
        <div className="flex flex-wrap">
          <div className="pb-10 flex justify-center items-center lg:w-52">
            <img
              src={patient.image ? SERVER_URL + patient.image : profile_photo}
              alt={`${patient.first_name} ${patient.last_name}`}
            />
          </div>

          <div className="w-2/3 lg:pl-8">
            <table>
              <tbody>
                <tr>
                  <td className="font-bold">First Name</td>
                  <td className="py-2 pl-4">{patient.first_name}</td>
                </tr>
                <tr>
                  <td className="font-bold">Last Name</td>
                  <td className="py-2 pl-4">{patient.last_name}</td>
                </tr>
                <tr>
                  <td className="font-bold">Age</td>
                  <td className="py-2 pl-4">{patient.age}</td>
                </tr>
                <tr>
                  <td className="font-bold">Contact</td>
                  <td className="py-2 pl-4">{patient.contact}</td>
                </tr>
                <tr>
                  <td className="font-bold">Emergency Contact</td>
                  <td className="py-2 pl-4">{patient.emergency_contact}</td>
                </tr>
                <tr>
                  <td className="font-bold">Doctor</td>
                  <td className="py-2 pl-4">{patient.owner.userId}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <p className="font-bold">Pre-Existing Conditions</p>
        <p>
          {patient.pre_existing_conditions
            ? patient.pre_existing_conditions
            : "No Pre-Existing Conditions"}
        </p>
        <br />
        <p className="font-bold">Diagnosis</p>
        <p>{patient.diagnosis ? patient.diagnosis : "No diagnosis assigned"}</p>
        <br />
        <p className="font-bold">Treatment</p>
        <p>{patient.treatment ? patient.treatment : "No treatment assigned"}</p>
        <br />
        <p className="font-bold">Medication</p>
        <p>
          {patient.medication ? patient.medication : "No medication assigned"}
        </p>
        <br />
        <p className="font-bold">Comments</p>
        <p>{patient.comments ? patient.comments : "No comments."}</p>
        <br />
        <div className="flex justify-between">
          <Button
            variant="warning"
            onClick={() => {
              setUpdatePatientModal(true);
            }}
          >
            Update
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setDeletePatientModal(true);
            }}
          >
            Delete
          </Button>
        </div>
      </div>

      <div>
        <UpdatePatientModal
          show={updatePatientModal}
          handleClose={() => setUpdatePatientModal(false)}
          patient={patient}
          triggerRefresh={() => setUpdated((prev) => !prev)}
        />
      </div>
      <div>
        <DeletePatientModal
          show={deletePatientModal}
          handleClose={() => setDeletePatientModal(false)}
          patient={patient}
          triggerRefresh={() => setUpdated((prev) => !prev)}
        />
      </div>
    </Container>
  );
};
export default PatientDetail;
