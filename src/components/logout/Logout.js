import { useHistory } from "react-router-dom";
import styled from "styled-components";

import CustomButton from "../shared/CustomButton";
import CancelButton from "../shared/CancelButton";
import logo from "../../img/logo.png";
import { Colors } from "../../styles/Colors";

function Logout() {
  const history = useHistory();

  function handleLogout() {
    localStorage.clear();
    redirectToHome();
  }

  function redirectToHome() {
    history.push("/");
  }

  return (
    <LogoutWrapper>
      <div className="content-wrapper">
        <img src={logo} alt="logo" className="logo" />

        <h2>Logout</h2>
        <p>Are you sure you want to logout?</p>
        <CustomButton onClick={handleLogout}>Logout</CustomButton>
        <br />
        <CancelButton onClick={redirectToHome}>Cancel</CancelButton>
      </div>
    </LogoutWrapper>
  );
}

const LogoutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 1rem 0rem;
  }

  p {
    margin-bottom: 1rem;
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

export default Logout;
