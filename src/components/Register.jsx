import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./form/Form";
import { setUser } from "../store/slices/userSlice";

const Register = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({ email: user.email, id: user.uid, token: user.accessToken })
        );
        push("/");
      })
      .catch(() => alert("ERROR REGISTER!"));
  };

  return <Form title="registration" handleClick={handleRegister} />;
};

export default Register;
