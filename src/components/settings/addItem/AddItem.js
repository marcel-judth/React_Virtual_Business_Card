import { FaLock, FaUserAlt } from 'react-icons/fa';
import styled from 'styled-components';
import CustomButton from '../../shared/CustomButton';
import IconImage from '../../shared/IconImage';
import TextInput from '../../shared/TextInput';
import { changePassword } from '../../../api';
import { useState } from 'react';
import { Colors } from '../../../styles/Colors';
import Loading from '../../shared/Loading';

function AddItem() {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const [tagID, setTagID] = useState();
  const [success, setSuccess] = useState();
  const [successMessage, setSuccessMessage] = useState();
  const currentUsername = JSON.parse(localStorage.getItem('user'))?.username;

  const handlePwdChange = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage('Successfully added! Please try it out!');
    changePassword(currentUsername, tagID, setSuccess, setIsLoading, setError);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <AddItemWrapper>
          <div className='content-wrapper'>
            {success ? (
              <>
                <IconImage>
                  <FaUserAlt />
                </IconImage>
                <p className='info-message'>{successMessage}</p>
                <span className='error-label'>{error}</span>
                <CustomButton
                  onClick={() => {
                    window.location.href = '/';
                  }}
                >
                  Return
                </CustomButton>
              </>
            ) : (
              <>
                <h2>Add NFC Item</h2>
                <TextInput
                  onChange={(event) => {
                    setTagID(event.target.value);
                  }}
                  required
                  placeholder='Tag ID'
                  Icon={FaLock}
                />
                <span className='error-label'>{error}</span>

                <CustomButton onClick={handlePwdChange}>Add</CustomButton>
              </>
            )}
          </div>
        </AddItemWrapper>
      )}
    </>
  );
}

const AddItemWrapper = styled.form`
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

export default AddItem;
