import Axios from "axios";
import { useEffect, useState } from "react";
import "./login.css";

const Login = (props) => {
  const [usersList, setUsersList] = useState([]);
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

  const handleSubmit = () => {
    let guy = { ...user };
    let list = [...usersList];

    for (let i = 0; i < list.length; i++) {
      let u = list[i];
      if (guy.email == u.email) {
        props.valid(true);
        console.log("Correct Login");
      } else {
        console.log("Wrong Login");
      }
    }
  };

  const test = () => {
    console.log(user);
  };

  useEffect(() => {
    Axios.get("http://localhost:8000/api/users")
      .then((res) => setUsersList(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div class="row">
      <h1>Login</h1>
      <form class="col s12 container">
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
      </form>
      <button onClick={handleSubmit} className="btn waves-effect">
        Test
      </button>
    </div>
  );
};

export default Login;
