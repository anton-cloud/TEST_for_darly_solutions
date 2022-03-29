import React from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import { HomePageStyled } from "./HomePageStyled";

const HomePage = () => {
  const { isAuth } = useAuth();

  return isAuth ? (
    <HomePageStyled>
      <h1 className="title">Anton Sharudylo</h1>
      <p className="description">Junior Front-End developer</p>
      <h2 className="subTitle">Contacts:</h2>
      <p className="description">
        <a href="tel:+380964087199">+38-096-408-7199</a>
      </p>
      <p className="description">
        <a href="mailto:a.sharudylo@gmail.com">a.sharudylo.gmail.com</a>
      </p>
      <p className="description">
        <a href="https://www.linkedin.com/in/anton-sharudylo-196093194/">
          Linkedin
        </a>
      </p>
      <p className="description">
        <a href="https://github.com/anton-cloud">GitHub</a>
      </p>
      <p className="description">Telegram: anton_sh94</p>
    </HomePageStyled>
  ) : (
    <Redirect to="/login" />
  );
};

export default HomePage;
