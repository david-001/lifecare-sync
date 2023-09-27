import React, { useState, useEffect, useContext } from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import LoadingScreen from "../../shared/components/LoadingScreen";
import axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";
import SERVER_URL from "../../Constants";
import profile_photo from "../../imgs/profile_photo.jpeg";

const cardContainerStyle = {
  display: "flex",
  flexFlow: "row wrap",
};

const Patients = () => {
  const auth = useContext(AuthContext);
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.userId) {
      axios
        .get(SERVER_URL + `api/patients/fetchall/${auth.userId}`, {
          headers: {
            Authorization: "Bearer " + auth.token,
          },
        })
        .then((resp) => {
          setPatients(resp.data.patients);
        })
        .catch((err) => {
          handleError(err);
        });
    } else {
      navigate("/login");
    }
  }, [auth.token, auth.userId, navigate]);

  const handleError = (err) =>
    toast.error(err, {
      position: toast.POSITION.TOP_RIGHT,
    });

  // this is fine as the loading screen condition
  if (!patients) {
    return <LoadingScreen />;
    // if the patient list is 0, but a user exists, show them that they have the ability to add patients
  } else if (patients.length === 0 && auth.userId) {
    return <p>No patients yet...Lets add some.</p>;
  }

  const patientCards = patients.map((patient) => (
    <Col md="4">
      <Card
        style={{
          width: "100%",
          margin: 5,
          borderRadius: "20px",
          backgroundColor: "#0062ffff",
          color: "white",
        }}
        key={patient._id}
      >
        <Card.Header>{patient.name}</Card.Header>
        <Link to={`/patients/${patient._id}`}>
          <Image
            fluid={true}
            src={
              patient.image
                ? `http://localhost:8000/${patient.image}`
                : `${profile_photo}`
            }
            alt="Patient photo"
          />
        </Link>
        <Card.Body>
          <Card.Text>
            <Link
              style={{ color: "white" }}
              to={`/patientdetail/${patient._id}`}
            >
              View
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <Container>
      <Row style={cardContainerStyle} className="justify-content-center">
        {patientCards}
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default Patients;
