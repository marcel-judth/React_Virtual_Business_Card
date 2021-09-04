import axios from 'axios';
import _ from 'lodash';
import { API_BaseURL } from './utils/constants';

function reloggin() {
  localStorage.clear();
  window.location.href = '/login';
}

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

async function urltoFile(url, filename) {
  const mimeType = url.split(';')[0].split('/')[1];

  return fetch(url)
    .then(function (res) {
      return res.arrayBuffer();
    })
    .then(function (buf) {
      return new File([buf], filename, { type: mimeType });
    });
}

const getUserByID = async (id, setUser, setLoading, setTheme) => {
  try {
    const res = await axios.get(API_BaseURL + '/users/' + id);

    if (res.data.image)
      res.data.image = await urltoFile(res.data.image, 'profile-picture');

    if (res.data.companies)
      for (let i = 0; i < res.data.companies.length; i++)
        if (res.data.companies[i].logo) {
          res.data.companies[i].logo = await urltoFile(
            res.data.companies[i].logo,
            'company-logo' + i
          );
        }

    if (res.data.color) setTheme({ userColor: res.data.color });
    setUser(res.data);
    setLoading(false);
  } catch (error) {
    console.log(error);
    if (error.response.status === 404)
      return (window.location.href = '/notfound');

    window.location.href = '/';
  }
};

async function parseCompanyImages(user) {
  for (let i = 0; i < user.companies.length; i++)
    if (user.companies[i].logo)
      user.companies[i].logo = await getBase64(user.companies[i].logo);
}

async function parseImages(user) {
  user.image = await getBase64(user.image);
  await parseCompanyImages(user);
}

const update = async (user, setError, setLoading) => {
  const copy = _.cloneDeep(user);

  await parseImages(copy);

  axios
    .put(API_BaseURL + '/users/' + user.email, copy, {
      headers: {
        'x-auth-token': JSON.parse(localStorage.getItem('user'))?.token,
      },
    })
    .then(() => window.location.reload())
    .catch((error) => {
      if (error.response.status === 401) reloggin();
      else {
        displayError(error, setError, setLoading);
      }
    });
};

const login = async (email, password, setError, setLoading, history) => {
  axios
    .post(API_BaseURL + '/users/login', {
      email,
      password,
    })
    .then((res) => {
      localStorage.setItem('user', JSON.stringify(res.data));
      history.push('/details/' + res.data.email);
    })
    .catch((err) => {
      console.log(err);
      displayError(err, setError, setLoading);
    });
};

const register = async (
  firstname,
  lastname,
  email,
  password,
  setError,
  history
) => {
  axios
    .post(API_BaseURL + '/users/register', {
      firstname,
      lastname,
      email,
      password,
    })
    .then((res) => {
      localStorage.setItem('user', JSON.stringify(res.data));
      history.push('/');
    })
    .catch((err) => {
      setError(err.response.data);
      setTimeout(() => setError(''), 3000);
    });
};

const forgotPassword = async (email, setSuccess, setIsLoading, setError) => {
  axios
    .post(API_BaseURL + '/users/forgotPassword', {
      email,
    })
    .then(() => {
      setSuccess(true);
      setIsLoading(false);
    })
    .catch((err) => {
      displayError(err, setError, setIsLoading);
    });
};

const resetPassword = async (
  token,
  password,
  setSuccess,
  setIsLoading,
  setError
) => {
  axios
    .post(API_BaseURL + '/users/resetPassword', {
      token,
      password,
    })
    .then(() => {
      setSuccess(true);
      setIsLoading(false);
    })
    .catch((err) => {
      displayError(err, setError, setIsLoading);
    });
};

const changePassword = async (
  email,
  currentPassword,
  newPassword,
  setSuccess,
  setIsLoading,
  setError
) => {
  axios
    .post(
      API_BaseURL + '/users/changePassword',
      {
        newPassword,
        currentPassword,
        email,
      },
      {
        headers: {
          'x-auth-token': JSON.parse(localStorage.getItem('user'))?.token,
        },
      }
    )
    .then(() => {
      setSuccess(true);
      setIsLoading(false);
    })
    .catch((err) => {
      displayError(err, setError, setIsLoading);
    });
};

function displayError(httpError, setError, setIsLoading) {
  if (httpError.response?.data) setError(httpError.response.data);
  else setError('An unexpected error happened!');
  setIsLoading(false);
  setTimeout(() => {
    setError(undefined);
  }, 4000);
}

export {
  getUserByID,
  login,
  register,
  update,
  forgotPassword,
  changePassword,
  resetPassword,
};
