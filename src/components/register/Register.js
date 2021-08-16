import { FaLock, FaUser, FaEnvelope, FaUserAlt } from 'react-icons/fa';
import styled from 'styled-components';
import CustomButton from '../shared/CustomButton';
import TextInput from '../shared/TextInput';
import { register } from '../../api';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Colors } from '../../styles/Colors';
import IconImage from '../shared/IconImage';

function Register() {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(firstname, lastname, email, password, setError, history);
  };

  return (
    <RegisterWrapper onSubmit={handleSubmit}>
      <div className='content-wrapper'>
        <IconImage>
          <FaUserAlt />
        </IconImage>
        <br />

        <TextInput
          onChange={(event) => setFirstname(event.target.value)}
          placeholder='First Name'
          Icon={FaUser}
        />
        <TextInput
          onChange={(event) => setLastname(event.target.value)}
          placeholder='Last Name'
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
        <span className='error-label'>{error}</span>
        <CustomButton>Register</CustomButton>
      </div>
    </RegisterWrapper>
  );
}

const RegisterWrapper = styled.form`
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

export default Register;
