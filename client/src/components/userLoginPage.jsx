import "./userLoginPage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Login from "./login";

const UserLoginPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return loggedIn ? (
    <>
      <h2>You're loggin in!</h2>
    </>
  ) : (
    <>
      <Login></Login>
    </>
  );
};

export default UserLoginPage;
