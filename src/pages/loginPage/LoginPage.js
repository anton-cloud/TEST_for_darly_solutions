import React from "react";
import { Link } from "react-router-dom";
import Login from "../../components/Login";
import { AuthPageStyled } from "./AuthPageStyled";

const LoginPage = () => {
  return (
    <AuthPageStyled>
      <h1 className="title">Sing Up</h1>
      <Login />

      <p className="description">
        Do you want to register ? <Link to="/register">Sing In</Link>
      </p>
    </AuthPageStyled>
  );
};

export default LoginPage;
