import React from "react";
import { LoginStyled } from "./Login.styled";

const Login = () => {
  return (
    <LoginStyled>
      <div className="login">
        <form>
          <div className="loginGroups">
            <div className="loginGroup">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" required />
            </div>
            <div className="loginGroup">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required />
            </div>
            <div className="loginGroup">
              <button type="submit">Login as Admin</button>
            </div>
          </div>
        </form>
      </div>
    </LoginStyled>
  );
};

export default Login;
