import { useState } from "react";
import Container from "../../shared/components/Container";
import Input from "../../shared/components/Input";
import Button from "../../shared/components/Button";
import handleSuccess, { handleError } from "../../shared/components/toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../../shared/components/LoadingSpinner";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const {
    name,
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
        { ...inputValue }
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
          label="name"
          label_txt="Name"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
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
    </Container>
  );
};

export default Register;
