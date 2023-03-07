/* eslint-disable no-lone-blocks */
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
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
          let flag = false;
          for (const key in data) {
            if (email === data[key].email) {
              if (password === data[key].password) {
                alert("login successfull");
                navigate("../home");
                localStorage.setItem("user", data[key].fname);                
                localStorage.setItem("userEmail", data[key].email);
                dispatch(uiActions.logoutShow());
                dispatch(uiActions.userLog());
                flag = true;
                break;
              } else {
                alert("Password is incorrect");
                break;
              }
            }
          }
          if (!flag) {
            alert("User does not exist");
          }
        });
    }
  };

  
  return (
    <div>
      <form className={classes.form} onSubmit={authenticate}>
        <h1>Login</h1>
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
         
           <Link to='../signup'><p>new to GlaMMYaPP?</p></Link> 
         
            <Button color="primary" type="submit">
              Login
            </Button>
          
        </div>
      </form>
    </div>
  );
}
