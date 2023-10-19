import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import { handleError } from "../../shared/components/toast";
import Card from "../../shared/components/Card";
import LoadingSpinner from "../../shared/components/LoadingSpinner";
import profile_photo from "../../imgs/profile_photo.jpeg";
import Input from "../../shared/components/Input";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Patients = () => {
  const auth = useContext(AuthContext);
  const [patients, setPatients] = useState(null);
  const [filteredPatients, setFilteredPatients] = useState(null);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (auth.token) {
      axios
        .get(`${process.env.REACT_APP_SERVER_URL}api/patients/fetchall`, {
          headers: {
            Authorization: "Bearer " + auth.token,
          },
        })
        .then((resp) => {
          setPatients(resp.data.patients);
          setFilteredPatients(resp.data.patients);
        })
        .catch((err) => {
          handleError(err);
        });
    } else {
      navigate("/login");
    }
  }, [auth.token, navigate]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearch(value);
    setFilteredPatients(
      patients.filter(
        (patient) =>
          patient.first_name.toLowerCase().includes(value.toLowerCase()) ||
          patient.last_name.toLowerCase().includes(value.toLowerCase())
      )
    );

    // setInputValue({
    //   ...inputValue,
    //   [name]: value,
    // });
  };

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

  const patientCards = filteredPatients.map((patient) => (
    <div className="m-3" key={patient._id}>
      <Card
        title={`${patient.first_name} ${patient.last_name}`}
        imgsrc={
          patient.image
            ? process.env.REACT_APP_SERVER_URL + patient.image
            : profile_photo
        }
        imgalt={patient.name}
        link={`/patientdetail/${patient._id}`}
      />
    </div>
  ));

  return (
    <div className="w-3/4">
      <div className="flex justify-center">
        <div className="w-96 pb-3">
          <Input
            label="search"
            type="text"
            id="search"
            name="search"
            placeholder="Search"
            value={search}
            onChange={handleOnChange}
          />
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center">{patientCards}</div>
    </div>
  );
};

export default Patients;
