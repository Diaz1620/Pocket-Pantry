import "./Login.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import LoginPage from "../components/loginPage";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (validation) => {
    setLoggedIn(validation);
  };

  return loggedIn ? (
    <>
      <h2>You're loggin in!</h2>
      <p>Insert Profile Page Here</p>
    </>
  ) : (
    <>
      <LoginPage valid={handleLogin} />
    </>
  );
};

export default Login;
