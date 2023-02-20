import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

export default function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const authenticateAdmin = (event) => {
    event.preventDefault();
    console.log(email, password);
    if (email === "admin@gmail.com" && password === "admin") {
      alert("login successfull");
      navigate("../adminHome");
      dispatch(uiActions.logoutShow());

    } else if (email === "arathi@gmail.com" && password === "arathi") {
      alert("login successfull");
      navigate("../home");
      dispatch(uiActions.logoutShow());
      dispatch(uiActions.userLog());
    }
  };
  return (
    <div>
      <form className={classes.form}>
        <h1>Login</h1>
        <p>
          <label>Email</label>
          <input type="email" name="email" onChange={emailHandler} />
        </p>
        <p>
          <label>Password</label>
          <input type="password" name="password" onChange={passwordHandler} />
        </p>
        <div className={classes.actions}>
          <Button color="primary" onClick={authenticateAdmin}>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
