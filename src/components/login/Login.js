import { FaLock, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";
import CustomButton from "../shared/CustomButton";
import TextInput from "../shared/TextInput";
import logo from "../../img/logo.png";
import { login } from "../../api";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Colors } from "../../styles/Colors";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password, setError, history);
  };

  return (
    <LoginWrapper onSubmit={handleSubmit}>
      <div className="content-wrapper">
        <img src={logo} alt="logo" className="logo" />

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
        <CustomButton>Login</CustomButton>
        <a href="/forgotpassword" className="forgot-password">
          Forgot Password?
        </a>
      </div>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.form`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
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
  .forgot-password {
    margin-top: 1rem;
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

export default Login;
