import React, { useState, useEffect, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SERVER_URL from "../../Constants";

const AddPatient = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    name: "",
    age: "",
    image: null,
    blood_type: "",
    emergency_contact: "",
    pre_conditions: "",
    current_condition: "",
    treatment: "",
    medicine: "",
    comments: "",
  });

  // const [image1, setImage1] = useState();

  // useEffect(() => {
  //   setInputValue({
  //     ...inputValue,
  //     image: image1,
  //   });
  // }, [image1]);

  // useEffect(() => {
  //   console.log("image changed", image1);
  //   if (image1) {
  //     const fileReader = new FileReader();
  //     fileReader.onload = () => {
  //       setPreview(fileReader.result);
  //     };
  //     //reader.readAsArrayBuffer <-  arraybuffer
  //     fileReader.readAsDataURL(image1); //represented as a base64string
  //   } else {
  //     setPreview(null);
  //   }
  // }, [image1]);

  const {
    name,
    age,
    blood_type,
    emergency_contact,
    pre_conditions,
    current_condition,
    treatment,
    medicine,
    comments,
  } = inputValue;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputValue);
    axios
      .post(
        SERVER_URL + `api/patients/new/${auth.userId}`,
        { ...inputValue },
        {
          headers: {
            Authorization: "Bearer " + auth.token,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(() => {
        // handleSuccess("Successfully added patient!");
        navigate("/");
      })
      .catch((err) => {
        handleError(err);
      });
  };

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: toast.POSITION.TOP_RIGHT,
    });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: toast.POSITION.TOP_RIGHT,
    });

  const handlePhotoUpload = (e) => {
    let pickedFile;
    if (e.target.files && e.target.files.length === 1) {
      pickedFile = e.target.files[0];
      // setImage1(pickedFile);
      setInputValue({
        ...inputValue,
        image: pickedFile,
      });
    }
  };

  return (
    <Container className="justify-content-center">
      <h1>Add New Patient</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            value={name}
            placeholder="Enter name"
            onChange={handleOnChange}
          />
          <Form.Label htmlFor="age">Age</Form.Label>
          <Form.Control
            required
            name="age"
            value={age}
            type="number"
            placeholder="Enter age"
            onChange={handleOnChange}
          />
          <Form.Label htmlFor="photo">Profile Photo</Form.Label>
          <Form.Control
            name="photo"
            type="file"
            accept=".jpg,.png,.jpeg"
            onChange={handlePhotoUpload}
          />
          <Form.Label htmlFor="blood_type">Blood Type</Form.Label>
          <Form.Select
            required
            name="blood_type"
            defaultValue={blood_type}
            onChange={handleOnChange}
          >
            <option>Choose Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </Form.Select>
          <Form.Label htmlFor="emergency_contact">
            Emergency Contact Tel.
          </Form.Label>
          <Form.Control
            name="emergency_contact"
            value={emergency_contact}
            type="text"
            placeholder="Enter telephone number"
            onChange={handleOnChange}
          />
          <Form.Label htmlFor="pre_conditions">
            Pre-existing Conditions
          </Form.Label>
          <Form.Control
            name="pre_conditions"
            value={pre_conditions}
            type="text"
            placeholder="Describe any conditions"
            onChange={handleOnChange}
          />
          <Form.Label htmlFor="current_condition">Current Condition</Form.Label>
          <Form.Select
            required
            name="current_condition"
            value={current_condition}
            onChange={handleOnChange}
          >
            <option>Choose condition</option>
            <option value="stable">stable</option>
            <option value="serious">serious</option>
            <option value="critical">critical</option>
            <option value="discharged">discharged</option>
          </Form.Select>
          <Form.Label htmlFor="treatment">Treatment</Form.Label>
          <Form.Control
            name="treatment"
            value={treatment}
            type="text"
            placeholder="Describe treatment plan"
            onChange={handleOnChange}
          />
          <Form.Label htmlFor="medicine">Medicine</Form.Label>
          <Form.Control
            name="medicine"
            value={medicine}
            type="text"
            placeholder="Describe the medication"
            onChange={handleOnChange}
          />
          <Form.Label htmlFor="comments">Comments</Form.Label>
          <Form.Control
            name="comments"
            value={comments}
            type="text"
            placeholder="Describe comments"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Button className="my-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <ToastContainer />
    </Container>
  );
};

export default AddPatient;
