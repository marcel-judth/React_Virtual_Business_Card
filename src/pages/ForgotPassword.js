import { FaEnvelope, FaLock, FaUserAlt } from 'react-icons/fa';
import styled from 'styled-components';
import CustomButton from '../components/shared/CustomButton';
import IconImage from '../components/shared/IconImage';
import TextInput from '../components/shared/TextInput';
import { forgotPassword, resetPassword } from '../api';
import { useState } from 'react';
import { Colors } from '../styles/Colors';
import { useParams } from 'react-router-dom';
import Loading from '../components/shared/Loading';

function ForgotPassword() {
  let { token } = useParams();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [success, setSuccess] = useState();
  const [successMessage, setSuccessMessage] = useState();

  const handlePwdChange = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage('Successfully changed password!');
    resetPassword(token, password, setSuccess, setIsLoading, setError);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage('You will receive an email to change your password!');
    forgotPassword(email, setSuccess, setIsLoading, setError);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ForgotWrapper onSubmit={handleSubmit}>
          <div className='content-wrapper'>
            {success ? (
              <>
                <div className='logo'>
                  <IconImage>
                    <FaUserAlt />
                  </IconImage>
                </div>
                <p className='info-message'>{successMessage}</p>
                <span className='error-label'>{error}</span>
                <CustomButton
                  isSubmit={false}
                  onClick={() => (window.location.href = '/')}
                >
                  Return
                </CustomButton>
              </>
            ) : (
              <>
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
                    <span className='error-label'>{error}</span>

                    <CustomButton onClick={handlePwdChange}>
                      Change Password
                    </CustomButton>
                  </>
                ) : (
                  <>
                    <div className='logo'>
                      <IconImage>
                        <FaUserAlt />
                      </IconImage>
                    </div>
                    <br />
                    <TextInput
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder='email'
                      required
                      Icon={FaEnvelope}
                    />
                    <span className='error-label'>{error}</span>
                    <CustomButton onClick={handleSubmit}>
                      Change Password
                    </CustomButton>
                  </>
                )}
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

export default ForgotPassword;
