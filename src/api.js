import axios from 'axios';
import { API_BaseURL } from './utils/constants';

function reloggin() {
  localStorage.clear();
  window.location.href = '/login';
}

const getUserByID = async (id, setUser, setLoading, setTheme) => {
  try {
    const res = await axios.get(API_BaseURL + '/users/details/' + id);

    if (res.data.color) setTheme({ userColor: res.data.color });
    setUser(res.data);
    setLoading(false);
  } catch (error) {
    console.log(error);
    if (error.response?.status === 404)
      return (window.location.href = '/notfound');

    if (error.response?.status === 400)
      return (window.location.href = '/activation/' + id);

    if (error.response?.status === 403)
      return (window.location.href = '/invalidlicense');

    window.location.href = '/';
  }
};

const getMyAccount = async (setUser, setLoading, setTheme) => {
  try {
    const res = await axios.get(API_BaseURL + '/users/myaccount', {
      headers: {
        'x-auth-token': JSON.parse(localStorage.getItem('user'))?.token,
      },
    });

    if (res.data.color) setTheme({ userColor: res.data.color });
    setUser(res.data);
    setLoading(false);
  } catch (error) {
    if (error.response?.status === 401) return reloggin();

    if (error.response?.status === 404)
      return (window.location.href = '/notfound');

    if (error.response?.status === 403)
      return (window.location.href = '/plancheckout');

    // window.location.href = '/';
    console.log(error);
  }
};

const update = async (user, setError, setLoading) => {
  axios
    .put(API_BaseURL + '/users/' + user.username, user, {
      headers: {
        'x-auth-token': JSON.parse(localStorage.getItem('user'))?.token,
      },
    })
    .then(() => (window.location.href = '/mypage'))
    .catch((error) => {
      if (error.response?.status === 401) reloggin();
      else {
        // displayError(error, setError, setLoading);
        // setError(error.response.data);
        // setIsLoading(false);
        if (error.response?.data) setError(error.response.data);
        else setError('An unexpected error happened!');
        setLoading(false);
      }
    });
};

const getScans = async (setLoading, setData) => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    const res = await axios.get(
      API_BaseURL + '/users/getscans/' + user?.username,
      {
        headers: {
          'x-auth-token': user?.token,
        },
      }
    );
    setLoading(false);
    setData(res.data);
    console.log(res.data);
  } catch (error) {
    console.log(error);
    if (error.response?.status === 401) return reloggin();

    if (error.response?.status === 404)
      return (window.location.href = '/notfound');

    if (error.response?.status === 403)
      return (window.location.href = '/invalidlicense');

    window.location.href = '/';
  }
};

const login = async (email, password, setError, setLoading, history) => {
  axios
    .post(API_BaseURL + '/users/login', {
      email,
      password,
    })
    .then((res) => {
      localStorage.setItem('user', JSON.stringify(res.data));
      if (res.data.token !== undefined) history.push('/mypage');
      else history.push('/plancheckout');
    })
    .catch((err) => {
      console.log(err);

      if (err.response?.status === 403) {
        if (!err.response?.data) return displayError('Invalid Error happened');
        localStorage.setItem('user', JSON.stringify(err.response?.data));
        return (window.location.href = '/plancheckout');
      }

      displayError(err, setError, setLoading);
    });
};

const activate = async (
  id,
  email,
  password,
  setError,
  setLoading,
  setSuccess
) => {
  axios
    .post(API_BaseURL + '/users/activate', {
      id,
      email,
      password,
    })
    .then((res) => {
      setLoading(false);
      setSuccess(true);
      return;
    })
    .catch((err) => {
      console.log(err);
      displayError(err, setError, setLoading);
      setLoading(false);
    });
};

const register = async (
  username,
  email,
  password,
  isPublic,
  setLoading,
  setError,
  history
) => {
  axios
    .post(API_BaseURL + '/users/register', {
      username,
      email,
      password,
      public: isPublic,
    })
    .then((res) => {
      localStorage.setItem('user', JSON.stringify(res.data));
      history.push('/plancheckout');
    })
    .catch((err) => {
      console.log(err);
      displayError(err, setError, setLoading);
    });
};

const finalizePlanCheckout = async (email, username) => {
  axios
    .post(API_BaseURL + '/stripe/finalizePlanCheckout', {
      email,
    })
    .then((res) => {
      if (res.status === 200) {
        localStorage.setItem('user', JSON.stringify(res.data));
        window.location.href = '/mypage';
      } else window.location.href = '/';
    })
    .catch((err) => {
      console.log(err);
      // window.location.href = '/';
    });
};

const deactivateSubscription = async (email) => {
  const user = JSON.parse(localStorage.getItem('user'));
  axios
    .post(
      API_BaseURL + '/stripe/deactivateSubscription',
      {
        username: user.username,
      },
      {
        headers: {
          'x-auth-token': user?.token,
        },
      }
    )
    .then((res) => {
      if (res.status === 200) {
        localStorage.setItem('user', JSON.stringify(res.data));
        window.location.href = '/mypage';
      } else window.location.href = '/';
    })
    .catch((err) => {
      console.log(err);
      // window.location.href = '/';
    });
};

const activateAccount = async (username) => {
  axios
    .post(
      API_BaseURL + '/users/activateaccount',
      {
        username,
      },
      {
        headers: {
          'x-auth-token': JSON.parse(localStorage.getItem('user'))?.token,
        },
      }
    )
    .then((res) => {
      if (res.status === 200) {
        localStorage.setItem('user', JSON.stringify(res.data));
        window.location.href = '/mypage';
      } else window.location.href = '/';
    })
    .catch((err) => {
      console.log(err);
      // window.location.href = '/';
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
  username,
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
        username,
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

const changeEmail = async (email, setSuccess, setIsLoading, setError) => {
  const user = JSON.parse(localStorage.getItem('user'));

  axios
    .post(
      API_BaseURL + '/users/changeEmail',
      {
        username: user.username,
        email,
      },
      {
        headers: {
          'x-auth-token': JSON.parse(localStorage.getItem('user'))?.token,
        },
      }
    )
    .then((res) => {
      if (res.status === 200) {
        localStorage.setItem('user', JSON.stringify(res.data));
        setSuccess(true);
        setIsLoading(false);
      } else window.location.href = '/';
    })
    .catch((err) => {
      displayError(err, setError, setIsLoading);
    });
};

const addItem = async (username, tagID, setSuccess, setIsLoading, setError) => {
  axios
    .post(
      API_BaseURL + '/tags',
      {
        username,
        tagID,
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

const uploadImage = async (file) => {
  const user = JSON.parse(localStorage.getItem('user'));
  let res = await axios.get(API_BaseURL + '/users/imagePostURL', {
    headers: {
      'x-auth-token': user?.token,
    },
  });

  await fetch(res.data.url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: file,
  });

  const url = res.data.url.split('?')[0];
  return url;
};

function displayError(httpError, setError, setIsLoading) {
  if (httpError.response?.data) setError(httpError.response.data);
  else setError('An unexpected error happened!');
  setIsLoading(false);
  setTimeout(() => {
    setError(undefined);
  }, 4000);
}

const deleteAccount = async (setSuccess, setIsLoading, setError) => {
  const user = JSON.parse(localStorage.getItem('user'));

  axios
    .delete(API_BaseURL + '/users/' + user.username, {
      headers: {
        'x-auth-token': user?.token,
      },
    })
    .then(() => {
      localStorage.clear();
      setSuccess(true);
      setIsLoading(false);
    })
    .catch((err) => {
      displayError(err, setError, setIsLoading);
    });
};

export {
  getUserByID,
  getMyAccount,
  login,
  register,
  update,
  forgotPassword,
  changePassword,
  changeEmail,
  resetPassword,
  finalizePlanCheckout,
  getScans,
  uploadImage,
  addItem,
  activate,
  deactivateSubscription,
  deleteAccount,
  activateAccount,
};
