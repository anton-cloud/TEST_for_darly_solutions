import React from "react";
import Form from "./form/Form";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import { useHistory } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({ email: user.email, id: user.uid, token: user.accessToken })
        );
        history.push("/");
      })
      .catch(() => alert("ERROR LOGIN!"));
  };
  return <Form title="login" handleClick={handleLogin} />;
};

export default Login;
