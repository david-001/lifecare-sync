import { useState } from "react";
import Container from "../../shared/components/Container";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import { ToastContainer } from "react-toastify";
import handleSuccess, { handleError } from "../../shared/components/toast";
import { useNavigate } from "react-router-dom";
import SERVER_URL from "../../Constants";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const REGISTER_URL = SERVER_URL + "api/users/register";
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    image: null,
    email: "",
    password: "",
    password_confirmation: "",
  });

  const {
    first_name,
    last_name,
    phone,
    email,
    password,
    password_confirmation,
  } = inputValue;

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(
        REGISTER_URL,
        { role: "doctor", ...inputValue },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(() => {
        handleSuccess("Successfully created account.");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      })
      .catch((err) => {
        if (err.response.data.message) {
          handleError(err.response.data.message);
        } else {
          handleError(err.response.data);
        }
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
      <div className="prose">
        <h2 className="pb-6">Registration</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <Input
          label="first_name"
          label_txt="First Name"
          type="text"
          id="first_name"
          name="first_name"
          placeholder="First Name"
          value={first_name}
          onChange={handleOnChange}
        />
        <Input
          label="last_name"
          label_txt="Last Name"
          type="text"
          id="last_name"
          name="last_name"
          placeholder="Last Name"
          value={last_name}
          onChange={handleOnChange}
        />
        <Input
          label="phone"
          label_txt="Phone"
          type="text"
          id="phone"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={handleOnChange}
        />
        <Input
          type="file"
          label="image"
          label_txt="Upload profile photo"
          accept=".jpg,.png,.jpeg"
          onChange={handlePhotoUpload}
        />
        <Input
          label="email"
          label_txt="Email"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleOnChange}
        />
        <Input
          label="password"
          label_txt="Password"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleOnChange}
        />
        <Input
          label="password_confirmation"
          label_txt="Password Confirmation"
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          placeholder="Password Confirmation"
          value={password_confirmation}
          onChange={handleOnChange}
        />
        <br />
        <Button variant="primary" type="submit">
          Register
        </Button>
      </form>
      <ToastContainer />
    </Container>
  );
};

export default Register;
