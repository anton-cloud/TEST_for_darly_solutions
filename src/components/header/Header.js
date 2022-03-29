import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import { removeUser } from "../../store/slices/userSlice";
import { NavigationStyled } from "./HeaderStyled";

const Header = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();

  return (
    <NavigationStyled>
      <a href="/">
        <img
          src="https://darly.solutions/wp-content/uploads/2019/11/logo.svg"
          alt="logo"
        />
      </a>
      <nav className="nav">
        <ul className="navList">
          {!isAuth && (
            <li className="navItem">
              <NavLink
                to="/login"
                className="navLink"
                activeClassName="navLinkActive"
              >
                Login
              </NavLink>
            </li>
          )}
          {!isAuth && (
            <li>
              <NavLink
                to="/register"
                className="navLink"
                activeClassName="navLinkActive"
              >
                Registration
              </NavLink>
            </li>
          )}

          {isAuth && (
            <li className="navItem">
              <div className="userTextWrapper">
                <p className="userText">Hello, {email} </p>
                <button
                  className="navButton"
                  onClick={() => dispatch(removeUser())}
                >
                  Log Out
                </button>
              </div>
            </li>
          )}
        </ul>
      </nav>
    </NavigationStyled>
  );
};

export default Header;
