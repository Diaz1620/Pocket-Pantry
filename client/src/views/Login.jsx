import "./Login.css";
import Axios from "axios";
import { useEffect, useState } from "react";
// import LoginPage from "../components/loginPage";
import { navigate } from "@reach/router";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:8000/api/login", user)
      // .then(res => console.log(user))
      .then((res) => navigate("/list"))
      .catch((err) => {
        console.log(err.response.data.errors);
      });
  };

  return (
    <div class="row login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} class="col s12 container">
        <div class="row">
          <div class="input-field col s6 push-s3">
            <i class="material-icons prefix">email</i>
            <input
              id="icon_prefix"
              type="text"
              name="email"
              className="validate"
              onChange={handleInputChange}
            />
            <label for="icon_prefix">Email</label>
          </div>
        </div>
        <div className="row">
          <div class="input-field col s6 push-s3">
            <i class="material-icons prefix">lock</i>
            <input
              id="icon_telephone"
              type="text"
              name="password"
              className="validate"
              onChange={handleInputChange}
            />
            <label for="icon_telephone">Password</label>
          </div>
        </div>
        <input
          type="submit"
          value="Login"
          className="btn waves-effect loginBtn"
        />
      </form>
      <a className="registerLink" href="/register">
        Not a member? Click here to register!
      </a>
      {/* <button type="submit" className="btn waves-effect">
        Test
      </button> */}
    </div>
  );
};

export default Login;

//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleLogin = (validation) => {
//     setLoggedIn(validation);
//   };

//   return loggedIn ? (
//     <>
//       <h2>You're loggin in!</h2>
//       <p>Insert Profile Page Here</p>
//     </>
//   ) : (
//     <>
//       <LoginPage/>
//     </>
//   );
// };
