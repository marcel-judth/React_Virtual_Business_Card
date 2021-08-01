import axios from "axios";
import { API_BaseURL } from "./utils/constants";

const getUserByID = async (id, setUser, setLoading) => {
  const res = await axios.get(API_BaseURL + "/users/" + id);
  setUser(res.data);
  setLoading(false);
};

const login = async (email, password, setError, history) => {
  axios
    .post(API_BaseURL + "/users/login", {
      email,
      password,
    })
    .then((res) => {
      localStorage.setItem("jwt", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));
      console.log("saved to storage");
      history.push("/");
    })
    .catch((err) => {
      setError(err.response.data);
      setTimeout(() => setError(""), 3000);
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
    .post(API_BaseURL + "/users/register", {
      firstname,
      lastname,
      email,
      password,
    })
    .then((res) => {
      localStorage.setItem("jwt", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));
      history.push("/");
    })
    .catch((err) => {
      setError(err.response.data);
      setTimeout(() => setError(""), 3000);
    });
};

export { getUserByID, login, register };
