import axios from "axios";
import { useEffect, useState } from "react";
import "./login.css";

const Login = () => {
  return (
    <div class="row">
      <h1>Login</h1>
      <form class="col s12 container">
        <div class="row">
          <div class="input-field col s6 push-s3">
            <i class="material-icons prefix">email</i>
            <input id="icon_prefix" type="text" class="validate" />
            <label for="icon_prefix">Email</label>
          </div>
        </div>
        <div className="row">
          <div class="input-field col s6 push-s3">
            <i class="material-icons prefix">lock</i>
            <input id="icon_telephone" type="tel" class="validate" />
            <label for="icon_telephone">Password</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
