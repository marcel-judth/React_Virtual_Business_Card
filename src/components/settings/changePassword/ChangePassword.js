import { FaLock, FaUserAlt } from 'react-icons/fa';
import styled from 'styled-components';
import CustomButton from '../../shared/CustomButton';
import IconImage from '../../shared/IconImage';
import TextInput from '../../shared/TextInput';
import { changePassword } from '../../../api';
import { useState } from 'react';
import { Colors } from '../../../styles/Colors';
import Loading from '../../shared/Loading';

function ChangePassword() {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const [password, setPassword] = useState();
  const [currentPassword, setCurrentPassword] = useState();
  const [success, setSuccess] = useState();
  const [successMessage, setSuccessMessage] = useState();
  const currentUserEmail = JSON.parse(localStorage.getItem('user'))?.email;

  const handlePwdChange = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage('Successfully changed password!');
    changePassword(
      currentUserEmail,
      currentPassword,
      password,
      setSuccess,
      setIsLoading,
      setError
    );
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ForgotWrapper>
          <div className='content-wrapper'>
            {success ? (
              <>
                <IconImage>
                  <FaUserAlt />
                </IconImage>
                <p className='info-message'>{successMessage}</p>
                <span className='error-label'>{error}</span>
                <CustomButton onClick={() => (window.location.href = '/')}>
                  Return
                </CustomButton>
              </>
            ) : (
              <>
                <h2>Change Password</h2>
                <TextInput
                  onChange={(event) => {
                    setCurrentPassword(event.target.value);
                  }}
                  required
                  placeholder='Current Password'
                  isPassword
                  Icon={FaLock}
                />
                <TextInput
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  required
                  placeholder='New Password'
                  isPassword
                  Icon={FaLock}
                />
                <span className='error-label'>{error}</span>

                <CustomButton onClick={handlePwdChange}>
                  Change Password
                </CustomButton>
              </>
            )}
          </div>
        </ForgotWrapper>
      )}
    </>
  );
}

const ForgotWrapper = styled.form`
  width: 100%;
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
    border-radius: 5%;
    border: 1px solid lightgrey;
    min-width: 25rem;
  }

  .error-label {
    color: ${Colors.warningColor};
    font-size: 0.8rem;
    max-width: 100%;
    margin-bottom: 1rem;
  }

  .info-message {
    margin: 2rem 0rem;
  }

  @media (max-width: 600px) {
    .content-wrapper {
      border: none;
    }
  }
`;

export default ChangePassword;
