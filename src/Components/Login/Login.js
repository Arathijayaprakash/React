/* eslint-disable no-lone-blocks */
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

export default function Login(props) {
  const [signupClicked, setSignupClicked] = useState(false);
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
      alert("login successfull");
      navigate("../adminHome");
      dispatch(uiActions.logoutShow());
      dispatch(uiActions.cartIconShown());
      dispatch(uiActions.adminLog());
    } else {
      fetch("https://ebeautyapp-55c72-default-rtdb.firebaseio.com//users.json")
        .then((response) => response.json())
        .then((data) => {
          for (const key in data) {
            if (email === data[key].email) {
              if (password === data[key].password) {
                alert("login successfull");
                navigate("../home");
                localStorage.setItem("user", email);
                dispatch(uiActions.logoutShow());
                dispatch(uiActions.userLog());
              } else {
                alert("Password is incorrect");
              }
            } else {
              alert("User does not exist");
            }
          }
        });
    }
  };
  const signUpHandler = () => {
    setSignupClicked(true);
  };
  const signUpFalseHandler = () => {
    setSignupClicked(false);
  };
  const createUserHandler = () => {
    const users = {
      email: email,
      password: password,
    };
    fetch("https://ebeautyapp-55c72-default-rtdb.firebaseio.com//users.json")
      .then((response) => response.json())
      .then((data) => {
        for (const key in data) {
          if (email === data[key].email) {
            alert("User already exists");
          } else {
            fetch(
              "https://ebeautyapp-55c72-default-rtdb.firebaseio.com//users.json",
              {
                method: "POST",
                body: JSON.stringify(users),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            ).then(
              alert("Account created successfully"),
              setSignupClicked(false),
              setEmail(""),
              setPassword("")
            );
          }
        }
      });
  };
  return (
    <div>
      <form className={classes.form} onSubmit={authenticate}>
        <h1>{signupClicked ? "Sign Up" : "Login"}</h1>
        <p>
          <label>Username</label>
          <input name="email" onChange={emailHandler} required />
        </p>
        <p>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={passwordHandler}
            required
          />
        </p>
        <div className={classes.actions}>
          {signupClicked ? (
            <p onClick={signUpFalseHandler}>Allready have an account</p>
          ) : (
            <p onClick={signUpHandler}>new to GlaMMYaPP?</p>
          )}
          {signupClicked ? (
            <Button onClick={createUserHandler}>Create Account</Button>
          ) : (
            <Button color="primary" type="submit">
              Login
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
