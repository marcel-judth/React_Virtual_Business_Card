import axios from "axios";
import { API_BaseURL } from "./utils/constants";

const authHeader = {
  "x-auth-token": localStorage.getItem("jwt"),
};

const getUserByID = async (id, setUser, setLoading) => {
  const res = await axios.get(API_BaseURL + "/users/" + id);
  console.log(res.data);
  setUser(res.data);
  setLoading(false);
};

const update = async (user, setError, history, setLoading) => {
  axios
    .put(API_BaseURL + "/users/" + user.email, user, {
      headers: authHeader,
    })
    .then(() => {
      history.push("/details/" + user.email);
    })
    .catch((err) => {
      setError(err.response.data);
      setLoading(false);
      setTimeout(() => setError(""), 3000);
    });
};

const login = async (email, password, setError, history) => {
  console.log("im here");
  axios
    .post(API_BaseURL + "/users/login", {
      email,
      password,
    })
    .then((res) => {
      console.log("im here success");

      localStorage.setItem("jwt", res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
      history.push("/");
    })
    .catch((err) => {
      console.log("im here fail");
      setError(err.response.data);
      setTimeout(() => setError(""), 3000);
    });

  console.log("im go");
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
    .post(API_BaseURL + "/users/register", {
      firstname,
      lastname,
      email,
      password,
    })
    .then((res) => {
      localStorage.setItem("jwt", res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
      history.push("/");
    })
    .catch((err) => {
      setError(err.response.data);
      setTimeout(() => setError(""), 3000);
    });
};

export { getUserByID, login, register, update };
