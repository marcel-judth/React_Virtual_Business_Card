import { FaUserAlt } from 'react-icons/fa';
import IconImage from '../components/shared/IconImage';
import { register } from '../api';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from '../components/shared/Loading';
import Form from 'react-bootstrap/Form';

function Register({ setTheme }) {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [isPublic, setIsPublic] = useState(false);

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
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className='login-wrapper'>
            <div className='form-signin'>
              <form onSubmit={handleSubmit}>
                <div className='text-center mb-4 ml-auto mr-auto'>
                  <IconImage>
                    <FaUserAlt />
                  </IconImage>
                </div>
                <h1 class='h3 mb-3 fw-normal text-center'>Register</h1>

                <div class='form-floating'>
                  <input
                    type='text'
                    class='form-control'
                    id='floatingInput'
                    placeholder='username'
                    required
                    onChange={(event) => {
                      setUsername(event.target.value);
                    }}
                  />
                  <label for='floatingInput'>Username</label>
                </div>
                <div class='form-floating'>
                  <input
                    type='email'
                    class='form-control'
                    id='floatingInput'
                    placeholder='name@example.com'
                    required
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                  <label for='floatingInput'>Email</label>
                </div>
                <div class='form-floating mb-3'>
                  <input
                    type='password'
                    class='form-control'
                    id='floatingPassword'
                    placeholder='Password'
                    required
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                  <label for='floatingPassword'>Password</label>
                </div>
                <div class='checkbox mb-3 mr-auto d-block'>
                  <label className='text-left'>
                    <Form.Check
                      type='switch'
                      id='custom-switch'
                      label='public profile'
                      onChange={() => setIsPublic(!isPublic)}
                    />
                  </label>
                </div>
                <div class='checkbox mb-3'>
                  <label>
                    <Form.Check
                      type='switch'
                      required={true}
                      id='custom-switch'
                      label='I accept terms and conditions'
                    />
                  </label>
                </div>
                <span className='mb-3 d-block text-danger'>{error}</span>
                <button class='w-100 btn btn-lg btn-primary' type='submit'>
                  Sign in
                </button>

                <p class='mt-5 mb-3 text-muted small text-center'>
                  © x-ACT.me {new Date().getFullYear()}
                </p>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Register;

// function Register({ theme, setTheme }) {
//   const [loading, setLoading] = useState(false);
//   const [username, setUsername] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [isPublic, setIsPublic] = useState(false);
//   const [error, setError] = useState();
//   const history = useHistory();

//   useEffect(() => {
//     if (window.screen.width > 600) setTheme({ navWhiteColor: true });
//     else setTheme({ navWhiteColor: false });
//   }, [setTheme]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     register(
//       username,
//       email,
//       password,
//       isPublic,
//       setLoading,
//       setError,
//       history
//     );
//   };

//   return (
//     <RegisterWrapper onSubmit={handleSubmit}>
//       {loading ? (
//         <Loading />
//       ) : (
//         <div className='content-wrapper'>
//           <div className='logo'>
//             <IconImage>
//               <FaUserAlt />
//             </IconImage>
//           </div>
//           <br />
//           <TextInput
//             onChange={(event) => setUsername(event.target.value)}
//             placeholder='Username'
//             Icon={FaUser}
//           />
//           <TextInput
//             onChange={(event) => setEmail(event.target.value)}
//             placeholder='Email'
//             Icon={FaEnvelope}
//           />
//           <TextInput
//             onChange={(event) => {
//               setPassword(event.target.value);
//             }}
//             placeholder='Password'
//             isPassword
//             Icon={FaLock}
//           />
//           <div className='checkbox-wrapper'>
//             <input
//               type='checkbox'
//               id='cboxPhoneportal'
//               onChange={() => setIsPublic(!isPublic)}
//             />
//             <label htmlFor='subscribeNews'>
//               My profile should be visible in the networking portal
//             </label>
//           </div>
//           <div className='checkbox-wrapper'>
//             <input type='checkbox' id='cboxTerms' required />
//             <label htmlFor='subscribeNews'>
//               I agree to the <a href='/terms'>terms and conditions </a>
//             </label>
//           </div>
//           <span className='error-label'>{error}</span>
//           <CustomButton>Register</CustomButton>
//         </div>
//       )}
//     </RegisterWrapper>
//   );
// }

// export default Register;
