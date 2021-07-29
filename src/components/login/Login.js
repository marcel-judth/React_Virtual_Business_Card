import { FaLock, FaUser } from "react-icons/fa";
import styled from "styled-components";
import CustomButton from "../shared/CustomButton";
import TextInput from "../shared/TextInput";
import logo from "../../img/logo.png";

function Login() {
  return (
    <LoginWrapper>
      <div className="content-wrapper">
        <img src={logo} alt="logo" className="logo" />

        <TextInput placeholder="email" Icon={FaUser} />
        <TextInput placeholder="password" isPassword Icon={FaLock} />
        <CustomButton>Login</CustomButton>
      </div>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
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

  .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    padding: 3rem 4rem;
    border-radius: 1rem;
    border: 1px solid lightgrey;
  }
`;

export default Login;
