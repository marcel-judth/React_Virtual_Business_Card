import { FaUserAlt } from 'react-icons/fa';
import styled from 'styled-components';
import CustomButton from '../../shared/CustomButton';
import IconImage from '../../shared/IconImage';
import { useState } from 'react';
import { Colors } from '../../../styles/Colors';
import Loading from '../../shared/Loading';
import { deleteAccount } from '../../../api';
import CancelButton from '../../shared/CancelButton';
import { HashLink as Link } from 'react-router-hash-link';

function ChangeEmail() {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [successMessage, setSuccessMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage('Successfully deleted your account!');
    deleteAccount(setSuccess, setIsLoading, setError);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ChangeEmailWrapper>
          <div className='content-wrapper'>
            {success ? (
              <>
                <IconImage>
                  <FaUserAlt />
                </IconImage>
                <p className='info-message'>{successMessage}</p>
                <span className='error-label'>{error}</span>
                <Link to='/'>
                  <CustomButton>Return</CustomButton>
                </Link>
              </>
            ) : (
              <>
                <div className='logo'>
                  <IconImage>
                    <FaUserAlt />
                  </IconImage>
                </div>
                <p>Are your sure you want to delete your account?</p>
                <span className='error-label'>{error}</span>
                <div className='btn-wrapper'>
                  <CancelButton className='warning-btn' onClick={handleSubmit}>
                    Yes
                  </CancelButton>
                  <Link to='/mypage'>
                    <CustomButton>No</CustomButton>
                  </Link>
                </div>
              </>
            )}
          </div>
        </ChangeEmailWrapper>
      )}
    </>
  );
}

const ChangeEmailWrapper = styled.form`
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
    text-align: center;

    p {
      margin: 1rem 0rem;
    }

    .btn-wrapper {
      display: flex;
      > * {
        margin: 0 0.5rem;
      }
    }
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
      min-width: 90%;
      max-width: 90%;
    }
  }
`;

export default ChangeEmail;
