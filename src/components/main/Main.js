import React from "react";
import { MainStyled } from "./MainStyled";
import { Switch, Route } from "react-router-dom";
import HomePage from "../../pages/homePage/HomePage";
import LoginPage from "../../pages/loginPage/LoginPage";
import RegisterPage from "../../pages/registerPage/RegisterPage";
import OtherPage from "../../pages/otherPage/OtherPage";

const Main = () => {
  return (
    <MainStyled>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route component={OtherPage} />
      </Switch>
    </MainStyled>
  );
};

export default Main;
