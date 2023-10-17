import { useState, useEffect, useContext } from "react";
import axios from "axios";
import SERVER_URL from "../../Constants";
import { useNavigate } from "react-router-dom";
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
      <div className="bg-white p-10 h-80 shadow md:w-3/4 lg:w-1/2 mx-auto">
        <div className="prose">
          <h2 className="pb-6">No Patients</h2>
        </div>
        <p>You have no patients.</p>
      </div>
    );
  }

  const patientCards = patients.map((patient) => (
    <div className="m-3" key={patient._id}>
      <Card
        title={`${patient.first_name} ${patient.last_name}`}
        imgsrc={patient.image ? SERVER_URL + patient.image : profile_photo}
        imgalt={patient.name}
        link={`/patientdetail/${patient._id}`}
      />
    </div>
  ));

  return (
    <div className="w-3/4 flex flex-wrap justify-center">{patientCards}</div>
  );
};

export default Patients;
