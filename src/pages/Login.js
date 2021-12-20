import { FaUserAlt } from 'react-icons/fa';
import IconImage from '../components/shared/IconImage';
import { login } from '../api';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from '../components/shared/Loading';
import Form from 'react-bootstrap/Form';

function Login({ setTheme }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

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
          <div className='text-center login-wrapper'>
            <div className='form-signin'>
              <form onSubmit={handleSubmit}>
                <div className='text-center mb-4 ml-auto mr-auto'>
                  <IconImage>
                    <FaUserAlt />
                  </IconImage>
                </div>
                <h1 class='h3 mb-3 fw-normal'>Please sign in</h1>

                <div class='form-floating'>
                  <input
                    type='text'
                    class='form-control'
                    id='floatingInput'
                    placeholder='name@example.com'
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                  <label for='floatingInput'>Email or Username</label>
                </div>
                <div class='form-floating mb-3'>
                  <input
                    type='password'
                    class='form-control'
                    id='floatingPassword'
                    placeholder='Password'
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                  <label for='floatingPassword'>Password</label>
                </div>
                <div class='checkbox mb-3'>
                  <label>
                    <Form.Check
                      type='switch'
                      id='custom-switch'
                      label='Remember me'
                    />
                  </label>
                </div>
                <span className='mb-3 d-block text-danger'>{error}</span>
                <button class='w-100 btn btn-lg btn-primary' type='submit'>
                  Sign in
                </button>
                <div className='mt-2'>
                  <a
                    href='/register'
                    className='text-muted small mb-2 d-block text-decoration-none'
                  >
                    No account yet? Register here
                  </a>

                  <a
                    href='/forgotpassword'
                    className='text-muted small text-decoration-none'
                  >
                    Forgot Password?
                  </a>
                </div>

                <p class='mt-5 mb-3 text-muted small'>
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

export default Login;
