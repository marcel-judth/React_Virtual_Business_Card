import { FaLock, FaUser, FaEnvelope, FaUserAlt } from 'react-icons/fa';
import styled from 'styled-components';
import CustomButton from '../shared/CustomButton';
import TextInput from '../shared/TextInput';
import { register } from '../../api';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Colors } from '../../styles/Colors';
import IconImage from '../shared/IconImage';
import Loading from '../shared/Loading';
import { useEffect } from 'react';

function Register({ theme, setTheme }) {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isPublic, setIsPublic] = useState(false);
  const [error, setError] = useState();
  const history = useHistory();

  useEffect(() => {
    if (window.screen.width > 600) setTheme({ navWhiteColor: true });
    else setTheme({ navWhiteColor: false });
  }, [setTheme]);

  const handleSubmit = (e) => {
    e.preventDefault();
    register(
      username,
      email,
      password,
      isPublic,
      setLoading,
      setError,
      history
    );
  };

  return (
    <RegisterWrapper onSubmit={handleSubmit}>
      {loading ? (
        <Loading />
      ) : (
        <div className='content-wrapper'>
          <div className='logo'>
            <IconImage>
              <FaUserAlt />
            </IconImage>
          </div>
          <br />
          <TextInput
            onChange={(event) => setUsername(event.target.value)}
            placeholder='Username'
            Icon={FaUser}
          />
          <TextInput
            onChange={(event) => setEmail(event.target.value)}
            placeholder='Email'
            Icon={FaEnvelope}
          />
          <TextInput
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            placeholder='Password'
            isPassword
            Icon={FaLock}
          />
          <div className='checkbox-wrapper'>
            <input
              type='checkbox'
              id='cboxPhoneportal'
              onChange={() => setIsPublic(!isPublic)}
            />
            <label htmlFor='subscribeNews'>
              My profile should be visible in the networking portal
            </label>
          </div>
          <div className='checkbox-wrapper'>
            <input type='checkbox' id='cboxTerms' required />
            <label htmlFor='subscribeNews'>
              I agree to the <a href='/terms'>terms and conditions </a>
            </label>
          </div>
          <span className='error-label'>{error}</span>
          <CustomButton>Register</CustomButton>
        </div>
      )}
    </RegisterWrapper>
  );
}

const RegisterWrapper = styled.form`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Colors.primaryColor};

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

  .checkbox-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: start;
    padding-left: 1rem;

    input:checked {
      background-color: ${Colors.primaryColor};
      background-color: #41b883;
    }

    label {
      margin-left: 0.5rem;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 600px) {
    background: white;
    .content-wrapper {
      border: none;
    }

    margin-top: 2rem;
  }
`;

export default Register;
