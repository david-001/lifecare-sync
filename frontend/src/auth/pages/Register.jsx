import { useState } from "react";
import Container from "../../shared/components/Container";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import handleSuccess, { handleError } from "../../shared/components/toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import LoadingSpinner from "../../shared/components/LoadingSpinner";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}api/users/register`,
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
        }, 2000);
      })
      .catch((err) => {
        setLoading(false);
        handleError(err.response.data.message);
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

  if (loading) {
    return <LoadingSpinner />;
  }

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
          placeholder="[Optional] Phone Number"
          value={phone}
          onChange={handleOnChange}
        />
        {/* <Input
          type="file"
          label="image"
          label_txt="Upload profile photo"
          accept=".jpg,.png,.jpeg"
          onChange={handlePhotoUpload}
        /> */}
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
