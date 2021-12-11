import { FaLock, FaEnvelope, FaUserAlt } from 'react-icons/fa';
import styled from 'styled-components';
import CustomButton from '../components/shared/CustomButton';
import IconImage from '../components/shared/IconImage';
import TextInput from '../components/shared/TextInput';
import { useState } from 'react';
import { Colors } from '../styles/Colors';
import Loading from '../components/shared/Loading';
import { useEffect } from 'react';
import { activate } from '../api';
import { useParams } from 'react-router';
import { HashLink as Link } from 'react-router-hash-link';

function Activation({ setTheme }) {
  let { id } = useParams();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setTheme({ navWhiteColor: true });
    if (!id) window.location.href = '/notfound';
  }, [id, setTheme]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    activate(id, email, password, setError, setLoading, setSuccess);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <LoginWrapper onSubmit={handleSubmit}>
            <div className='content-wrapper'>
              <IconImage>
                <FaUserAlt />
              </IconImage>
              <br />
              {success ? (
                <>
                  <br />

                  <h4>Successfully activated!</h4>

                  <br />
                  <br />
                  <Link to='/home'>
                    <CustomButton>Back</CustomButton>
                  </Link>
                </>
              ) : (
                <>
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
                  <CustomButton>Activate</CustomButton>
                </>
              )}
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

  @media (max-width: 600px) {
    .content-wrapper {
      border: none;
    }
  }
`;

export default Activation;
