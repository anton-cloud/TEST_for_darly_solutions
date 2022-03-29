import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { FormStyled } from "./FormStyled";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    handleClick(email, password);
  };

  return (
    <FormStyled onSubmit={onHandleSubmit} autoComplete="off">
      <TextField
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={onHandleSubmit} className="button">
        {title}
      </button>
    </FormStyled>
  );
};

export default Form;
