import React, { useState, useEffect, useContext } from "react";
import { Container, Card, Button } from "react-bootstrap";
import LoadingScreen from "../../shared/components/LoadingScreen";
import axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SERVER_URL from "../../Constants";

const PatientDetail = () => {
  const auth = useContext(AuthContext);
  const [patient, setPatient] = useState(null);
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.userId) {
      axios
        .get(SERVER_URL + `api/patients/fetch/${auth.userId}/${id}`, {
          headers: {
            Authorization: "Bearer " + auth.token,
          },
        })
        .then((resp) => {
          setPatient(resp.data.patient);
        })
        .catch((err) => {
          handleError(err);
        });
      axios
        .get(SERVER_URL + `api/users/profile/${auth.userId}`, {
          headers: {
            Authorization: "Bearer " + auth.token,
          },
        })
        .then((resp) => {
          setUser(resp.data.result);
        })
        .catch((err) => {
          handleError(err);
        });
    } else {
      navigate("/login");
    }
  }, [auth.token, auth.userId, id, navigate]);

  const handleError = (err) =>
    toast.error(err, {
      position: toast.POSITION.TOP_RIGHT,
    });

  if (!patient) {
    return <LoadingScreen />;
  }

  return (
    <>
      {/*Patient CARD  */}
      <Container>
        <div className="row">
          <div
            className="col-md-5"
            style={{ textAlign: "center", marginTop: 10 }}
          >
            <Card style={{ margin: 5 }}>
              <div>
                {/* <img className='image' style={{maxWidth: '45%',margin: "5"}} src={imgProfile} alt="the patient's face"/> */}
              </div>

              <Card.Header>
                <h2>{patient.name}</h2>
              </Card.Header>
              <Card.Body>
                <p className="p-info">Age:</p>
                <p>{patient.age}</p>
                <p className="p-info">Blood Type:</p>
                <p>{patient.blood_type}</p>
                <p className="p-info">Emergency Contact:</p>
                <p>{patient.emergency_contact}</p>
                <p className="p-info">Pre-existing Conditions:</p>
                <p>{patient.pre_conditions}</p>
                <p className="p-info">Current Condition:</p>
                <p>{patient.current_condition}</p>
                <p className="p-info">Doctor:</p>
                <p>{`${user.first_name} ${user.last_name}`}</p>
              </Card.Body>
              <Card.Footer>
                {/* <Button
                  size="sm"
                  className="mx-2"
                  variant="info"
                  onClick={() => setEditModalShow(true)}
                >
                  Edit Patient
                </Button>
                <Button
                  size="sm"
                  className="mx-2"
                  variant="outline-danger"
                  onClick={() => setDeleteModalShow(true)}
                >
                  Discharge Patient
                </Button> */}
              </Card.Footer>
            </Card>
          </div>
          <div
            className="col-md-7"
            style={{ textAlign: "center", marginTop: 10 }}
          >
            <Card
              className="cards-patient-treat treatment-card"
              style={{ margin: 5 }}
            >
              <Card.Header>
                <h4>Treatment</h4>
              </Card.Header>
              <Card.Body>
                <p className="p-info">Treatment:</p>
                <p>{patient.treatment}</p>
                <p className="p-info">Medicine:</p>
                <p>{patient.medicine}</p>
                <p className="p-info">Comments:</p>
                <p>{patient.comments}</p>
              </Card.Body>
              <Card.Footer>
                {/* <Button
                  size="sm"
                  className="mx-2"
                  variant="primary"
                  onClick={() => setNewMedicinesModalShow(true)}
                >
                  Prescribe
                </Button>
                <Button
                  size="sm"
                  className="mx-2"
                  variant="info"
                  onClick={() => {
                    setEditModalShow(true);
                    setTreatmentModalShow(true);
                  }}
                >
                  Set Treatment
                </Button>
                <Button
                  size="sm"
                  className="mx-2"
                  variant="success"
                  onClick={toggleDoctor}
                >
                  Set attending status
                </Button> */}
              </Card.Footer>
            </Card>
          </div>
        </div>
        <ToastContainer />
      </Container>

      {/* </div> */}
      {/* <EditPatientModal
        // modal needs patient info to populate fields
        patient={patient}
        // send state of treatmentModalShow so the modal knows which form to render
        treatmentModalShow={treatmentModalShow}
        // needs user in order to validate in the backend update function
        user={user}
        // msgAlert shows the success/fail messages
        msgAlert={msgAlert}
        // this sets the visibility of the modal when the relevant button is clicked
        show={editModalShow}
        // this is a function passed in from props that will run the patch route
        updatePatient={updatePatient}
        // this updates the state to trigger another useEvent pull of data
        triggerRefresh={() => setUpdated((prev) => !prev)}
        // this closes the modal when the submit button is pressed
        handleClose={() => {
          setEditModalShow(false);
          setTreatmentModalShow(false);
        }}
      /> */}
      {/* Modal that appears to confirm deletion of a patient */}
      {/* <DeletePatientModal
        // pass patient to delete modal to run the route
        patient={patient}
        // pass user for the same reason since deletePatient requires both
        user={user}
        msgAlert={msgAlert}
        // send state for visibility
        show={deleteModalShow}
        // send function to close manually
        handleClose={() => setDeleteModalShow(false)}
      />
      <NewMedicineModal
        patient={patient}
        user={user}
        msgAlert={msgAlert}
        show={newMedicinesModalShow}
        handleClose={() => setNewMedicinesModalShow(false)}
        triggerRefresh={() => setUpdated((prev) => !prev)}
      /> */}
    </>
  );
};

export default PatientDetail;
