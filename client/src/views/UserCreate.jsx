import { useState } from "react";
import { Axios } from "axios";
import { navigate } from "@reach/router";

const UserCreate = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:8000/api/register", user)
      .then((res) => navigate("/list"))
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div class="row">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} class="col s12 container">
        <div className="row">
          <div class="input-field col s6 push-s3">
            <i class="material-icons prefix">account_circle</i>
            <input
              id="icon_telephone"
              type="text"
              name="firstName"
              className="validate"
              onChange={handleInputChange}
            />
            <label for="icon_telephone">First Name:</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6 push-s3">
            <i class="material-icons prefix">account_circle</i>
            <input
              id="icon_prefix"
              type="text"
              name="lastName"
              className="validate"
              onChange={handleInputChange}
            />
            <label for="icon_prefix">Last Name:</label>
          </div>
        </div>
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
        <div className="row">
          <div class="input-field col s6 push-s3">
            <i class="material-icons prefix">lock</i>
            <input
              id="icon_telephone"
              type="text"
              name="confirmPassword"
              className="validate"
              onChange={handleInputChange}
            />
            <label for="icon_telephone">Confirm Password</label>
          </div>
        </div>
        <input type="submit" value="Login" className="btn waves-effect" />
      </form>
      {/* <button type="submit" className="btn waves-effect">
                Test
            </button> */}
    </div>
  );
};

export default UserCreate;
