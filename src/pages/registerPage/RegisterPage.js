import React from "react";
import { Link } from "react-router-dom";
import Register from "../../components/Register";
import { AuthPageStyled } from "../loginPage/AuthPageStyled";

const RegisterPage = () => {
  return (
    <AuthPageStyled>
      <h1 className="title">Sing In</h1>
      <Register />
      <p className="description">
        Are you already registered? <Link to="/login">Sing Up</Link>
      </p>
    </AuthPageStyled>
  );
};

export default RegisterPage;
