import { useState, useContext } from "react";
import Container from "../../shared/components/Container";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";
import Input from "../../shared/components/Input";
import { ToastContainer } from "react-toastify";
import handleSuccess, { handleError } from "../../shared/components/toast";
import SERVER_URL from "../../Constants";
import Button from "../../shared/components/Button";

const AddPatient = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    name: "",
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

  const {
    name,
    age,
    contact,
    emergency_contact,
    pre_existing_conditions,
    diagnosis,
    treatment,
    medication,
    comments,
  } = inputValue;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputValue);
    axios
      .post(
        SERVER_URL + `api/patients/new`,
        { ...inputValue },
        {
          headers: {
            Authorization: "Bearer " + auth.token,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(() => {
        handleSuccess("Successfully added patient!");
        navigate("/");
      })
      .catch((err) => {
        handleError(err);
      });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handlePhotoUpload = (e) => {
    let pickedFile;
    if (e.target.files && e.target.files.length === 1) {
      pickedFile = e.target.files[0];
      setInputValue({
        ...inputValue,
        image: pickedFile,
      });
    }
  };

  return (
    <Container>
      <h3>Add Patient</h3>
      <form onSubmit={handleSubmit}>
        <Input
          label="name"
          label_txt="Name"
          type="text"
          id="name"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={handleOnChange}
        />
        <Input
          label="age"
          label_txt="Age"
          type="number"
          id="age"
          name="age"
          placeholder="Enter age"
          value={age}
          onChange={handleOnChange}
        />
        <Input
          type="file"
          label="image"
          label_txt="Upload profile photo"
          // id="image"
          // name="image"
          accept=".jpg,.png,.jpeg"
          onChange={handlePhotoUpload}
        />
        <Input
          label="contact"
          label_txt="Contact Tel."
          type="text"
          id="contact"
          name="contact"
          placeholder="Enter telephone number"
          value={contact}
          onChange={handleOnChange}
        />
        <Input
          label="emergency_contact"
          label_txt="Emergency Contact Tel."
          type="text"
          id="emergency_contact"
          name="emergency_contact"
          placeholder="Enter telephone number"
          value={emergency_contact}
          onChange={handleOnChange}
        />
        <Input
          label="pre_existing_conditions"
          label_txt="Pre-existing Conditions"
          type="textarea"
          id="pre_existing_conditions"
          name="pre_existing_conditions"
          placeholder="Enter Pre-existing conditions"
          value={pre_existing_conditions}
          onChange={handleOnChange}
        />
        <Input
          label="diagnosis"
          label_txt="Diagnosis"
          type="textarea"
          id="diagnosis"
          name="diagnosis"
          placeholder="Enter Diagnosis"
          value={diagnosis}
          onChange={handleOnChange}
        />
        <Input
          label="treatment"
          label_txt="Treatment"
          type="textarea"
          id="treatment"
          name="treatment"
          placeholder="Enter Treatment"
          value={treatment}
          onChange={handleOnChange}
        />
        <Input
          label="medication"
          label_txt="Medication"
          type="textarea"
          id="medication"
          name="medication"
          placeholder="Enter Medication"
          value={medication}
          onChange={handleOnChange}
        />
        <Input
          label="comments"
          label_txt="Comments"
          type="textarea"
          id="comments"
          name="comments"
          placeholder="Enter Comments"
          value={comments}
          onChange={handleOnChange}
        />
        <Button type="submit">Add Patient</Button>
        <ToastContainer />
      </form>
    </Container>
  );
};
export default AddPatient;
