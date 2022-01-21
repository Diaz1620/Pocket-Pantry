import "./userLoginPage.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import Login from "./login";

const UserLoginPage = () => {
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
      <Login valid={handleLogin} />
    </>
  );
};

export default UserLoginPage;
