import React, { useState, useEffect, useContext } from "react";
import Container from "../../shared/components/Container";
import axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError } from "../../shared/components/toast";
import SERVER_URL from "../../Constants";
import profile_photo from "../../imgs/profile_photo.jpeg";
import LoadingSpinner from "../../shared/components/LoadingSpinner";
import Button from "../../shared/components/Button";

const PatientDetail = () => {
  const auth = useContext(AuthContext);
  const [patient, setPatient] = useState(null);
  const [editModalShow, setEditModalShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [treatmentModalShow, setTreatmentModalShow] = useState(false);
  const [user, setUser] = useState(null);
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
          console.log(resp.data);
          setPatient(resp.data.patient);
        })
        .then(
          axios
            .get(SERVER_URL + `api/users/profile`, {
              headers: {
                Authorization: "Bearer " + auth.token,
              },
            })
            .then((resp) => {
              setUser(resp.data.result);
            })
            .catch((err) => {
              handleError(err);
            })
        )
        .catch((err) => {
          handleError(err);
        });
    } else {
      navigate("/login");
    }
  }, [auth.token, id, navigate]);

  if (!patient) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Container>
        <div>
          <div className="flex">
            <img
              className="w-64"
              src={patient.image ? SERVER_URL + patient.image : profile_photo}
              alt={patient.name}
            />
            <div className="px-6">
              <table>
                <tbody>
                  <tr>
                    <td className="font-bold">Name</td>
                    <td className="py-2 pl-4">{patient.name}</td>
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
                    <td className="font-bold ">Emergency Contact</td>
                    <td className="py-2 pl-4">{patient.emergency_contact}</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Doctor</td>
                    <td className="py-2 pl-4">{`${user.first_name} ${user.last_name}`}</td>
                  </tr>
                  <tr>
                    <td className="py-2">
                      <Button variant="warning" type="submit">
                        Edit
                      </Button>
                    </td>
                    <td className="py-2">
                      <Button variant="danger" type="submit">
                        Delete
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
      <div className="my-4">
        <Container>asdzf</Container>
      </div>
    </div>
  );
};
export default PatientDetail;
