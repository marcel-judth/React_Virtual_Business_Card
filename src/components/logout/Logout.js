import { useHistory } from "react-router-dom";

function Logout() {
  localStorage.clear(); // already clearing
  useHistory().push("/");
}

export default Logout;
