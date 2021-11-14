import { FaLock, FaEnvelope, FaUserAlt } from 'react-icons/fa';
import styled from 'styled-components';
import CustomButton from '../shared/CustomButton';
import IconImage from '../shared/IconImage';
import TextInput from '../shared/TextInput';
import { login } from '../../api';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Colors } from '../../styles/Colors';
import Loading from '../shared/Loading';
import { useEffect } from 'react';

function Login({ setTheme }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (window.screen.width > 600) setTheme({ navWhiteColor: true });
    else setTheme({ navWhiteColor: false });
  }, [setTheme]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    login(email, password, setError, setLoading, history);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <LoginWrapper onSubmit={handleSubmit}>
            <div className='content-wrapper'>
              <div className='logo'>
                <IconImage>
                  <FaUserAlt />
                </IconImage>
              </div>
              <TextInput
                onChange={(event) => setEmail(event.target.value)}
                placeholder='Email or Username'
                required
                Icon={FaEnvelope}
              />
              <TextInput
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                required
                placeholder='Password'
                isPassword
                Icon={FaLock}
              />
              <span className='error-label'>{error}</span>
              <CustomButton>Login</CustomButton>
              <a href='/register' className='link'>
                No account yet? Click here for registration.
              </a>
              <a href='/forgotpassword' className='link'>
                Forgot Password?
              </a>
            </div>
          </LoginWrapper>
        </>
      )}
    </>
  );
}

const LoginWrapper = styled.form`
  max-width: 100vw;
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Colors.primaryColor};
  h2 {
    margin: 2rem 0rem;
  }

  .logo {
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  a {
    font-size: 0.8rem;
    text-decoration: none;
    margin-top: 0.5rem;

    &:hover {
      text-decoration: underline !important;
    }
  }

  .link {
    &:hover {
      text-decoration: underline !important;
    }
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
    border-radius: 5%;
    border: 1px solid lightgrey;
  }

  @media (max-width: 600px) {
    background: white;
    .content-wrapper {
      border: none;
    }
  }
`;

export default Login;
