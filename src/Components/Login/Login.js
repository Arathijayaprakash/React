/* eslint-disable no-lone-blocks */
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import classes from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

export default function Login({ auth }) {
  const loginVisible = useSelector((state) => state.ui.loginVisible);
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

  const authenticate = (event) => {
    event.preventDefault();
    if (email === "admin@gmail.com" && password === "admin") {
      window.alert("login successfull");
   
      localStorage.setItem("adminLogged", true);
      {
        loginVisible && dispatch(uiActions.loginShow());
      }
      dispatch(uiActions.logoutShow());
      dispatch(uiActions.cartIconShown());
      dispatch(uiActions.adminLog());
      navigate("../adminHome");
    } else {
      fetch("https://ebeautyapp-55c72-default-rtdb.firebaseio.com//users.json")
        .then((response) => response.json())
        .then((data) => {
          let flag = false;
          for (const key in data) {
            if (email === data[key].email) {
              if (password === data[key].password) {
                window.alert("login successfull");
              
                localStorage.setItem("userLogged", true);
                {
                  loginVisible && dispatch(uiActions.loginShow());
                }
                dispatch(uiActions.logoutShow());
                dispatch(uiActions.userLog());
                navigate("../home");
                localStorage.setItem("user", data[key].fname);
                localStorage.setItem("userEmail", data[key].email);
                flag = true;
                break;
              }
            }
          }
          if (!flag) {
            window.alert("Enter Valid username or password");
            setEmail("");
            setPassword("");
          }
        });
    }
  };

  return (
    <div>
      <form className={classes.form} onSubmit={authenticate}>
        <h1>Login</h1>
        <p>
          <label htmlFor="email">Username</label>
          <input
            id="email"
            name="email"
            value={email}
            onChange={emailHandler}
            required
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={passwordHandler}
            required
          />
        </p>
        <div className={classes.actions}>
          <Link to="../signup">
            <p>new to GlaMMYaPP?</p>
          </Link>

          <Button color="primary" type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
