import { FaEnvelope, FaLock, FaUserAlt } from 'react-icons/fa';
import styled from 'styled-components';
import CustomButton from '../shared/CustomButton';
import IconImage from '../shared/IconImage';
import TextInput from '../shared/TextInput';
import { forgotPassword, changePassword } from '../../api';
import { useState } from 'react';
import { Colors } from '../../styles/Colors';
import { useParams } from 'react-router-dom';

function ForgotPassword() {
  let { token } = useParams();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [success, setSuccess] = useState();

  const handlePwdChange = (e) => {
    e.preventDefault();

    changePassword(token, password, setSuccess);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    forgotPassword(email, setSuccess);
  };

  return (
    <ForgotWrapper onSubmit={handleSubmit}>
      <div className='content-wrapper'>
        {token ? (
          <>
            <h2>Reset Password</h2>
            <TextInput
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              required
              placeholder='New Password'
              isPassword
              Icon={FaLock}
            />
            <CustomButton onClick={handlePwdChange}>
              Change Password
            </CustomButton>
          </>
        ) : (
          <>
            {success ? (
              <>
                <p>You will receive an email to change your password!</p>
                <CustomButton onClick={() => (window.location.href = '/')}>
                  Return
                </CustomButton>
              </>
            ) : (
              <>
                <IconImage>
                  <FaUserAlt />
                </IconImage>
                <br />
                <TextInput
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder='email'
                  required
                  Icon={FaEnvelope}
                />
                <CustomButton onClick={handleSubmit}>
                  Change Password
                </CustomButton>
              </>
            )}
          </>
        )}
      </div>
    </ForgotWrapper>
  );
}

const ForgotWrapper = styled.form`
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

  @media (max-width: 600px) {
    .content-wrapper {
      border: none;
    }
  }
`;

export default ForgotPassword;
