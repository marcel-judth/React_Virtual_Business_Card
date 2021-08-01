import { FaLock, FaUser, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";
import CustomButton from "../shared/CustomButton";
import TextInput from "../shared/TextInput";
import logo from "../../img/logo.png";
import { register } from "../../api";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Colors } from "../../styles/Colors";

function Register() {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const history = useHistory();

  const handleSubmit = () => {
    register(firstname, lastname, email, password, setError, history);
  };

  return (
    <RegisterWrapper onSubmit={handleSubmit}>
      <div className="content-wrapper">
        <img src={logo} alt="logo" className="logo" />

        <TextInput
          onChange={(event) => setFirstname(event.target.value)}
          placeholder="firstname"
          Icon={FaUser}
        />
        <TextInput
          onChange={(event) => setLastname(event.target.value)}
          placeholder="lastname"
          Icon={FaUser}
        />
        <TextInput
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email"
          Icon={FaEnvelope}
        />
        <TextInput
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="password"
          isPassword
          Icon={FaLock}
        />
        <span className="error-label">{error}</span>
        <CustomButton>Register</CustomButton>
      </div>
    </RegisterWrapper>
  );
}

const RegisterWrapper = styled.form`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 2rem 0rem;
  }

  .logo {
    width: 10rem;
    margin-bottom: 1rem;
  }

  .error-label {
    color: ${Colors.warningColor};
    font-size: 0.8rem;
    max-width: 100%;
    margin-bottom: 1rem;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    padding: 3rem 4rem;
    border-radius: 1rem;
    border: 1px solid lightgrey;
    min-width: 25rem;
  }
`;

export default Register;
