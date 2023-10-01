import { useState, useEffect, useContext } from "react";
import axios from "axios";
import SERVER_URL from "../../Constants";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import { handleError } from "../../shared/components/toast";
import Card from "../../shared/components/Card";
import LoadingSpinner from "../../shared/components/LoadingSpinner";
import profile_photo from "../../imgs/profile_photo.jpeg";

const Patients = () => {
  const auth = useContext(AuthContext);
  const [patients, setPatients] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.token) {
      axios
        .get(SERVER_URL + `api/patients/fetchall`, {
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
  }, [auth.token, navigate]);

  if (patients == null) {
    return <LoadingSpinner />;
  } else if (patients.length === 0 && auth.token) {
    return (
      <div className="bg-white p-10 shadow md:w-3/4 lg:w-1/2 mx-auto">
        <h3>No Patients</h3>
        <p>You have no patients.</p>
      </div>
    );
  }

  const patientCards = patients.map((patient) => (
    <div className="columns-sm m-2" key={patient._id}>
      <Card title={patient.name} imgsrc={profile_photo} />
    </div>
  ));

  return (
    <div className="container-md">
      <div className="flex flex-row flex-wrap justify-center">
        {patientCards}
      </div>
    </div>
  );
};

export default Patients;
