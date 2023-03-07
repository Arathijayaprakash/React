import React, { useState } from "react";
import classes from "../Login/Login.module.css";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    mobile: "",
    hname: "",
    place: "",
    city: "",
    dist: "",
    state: "",
    pin: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const createUserHandler = (event) => {
    event.preventDefault();

    fetch("https://ebeautyapp-55c72-default-rtdb.firebaseio.com//users.json")
      .then((response) => response.json())
      .then((data) => {
        var flag = false;
        for (const key in data) {
          if (inputs.email === data[key].email) {
            flag = true;
            alert("User already exists");
            break;
          }
        }
        if (!flag) {
          fetch(
            "https://ebeautyapp-55c72-default-rtdb.firebaseio.com//users.json",
            {
              method: "POST",
              body: JSON.stringify(inputs),
              headers: {
                "Content-Type": "application/json",
              },
            }
          ).then(
            alert("Account created successfully"),
            setInputs({
              fname: "",
              lname: "",
              mobile: "",
              hname: "",
              place: "",
              city: "",
              dist: "",
              state: "",
              pin: "",
              email: "",
              password: "",
              cpassword: "",
            }),
            navigate("../login")
          );
        }
      });

  };
  return (
    <div>
      <form className={classes.form} onSubmit={createUserHandler}>
        <h1>Sign Up</h1>
        <div className={classes.name}>
          <p>
            <label>First Name</label>
            <input name="fname" onChange={inputChangeHandler} required />
          </p>
          <p>
            <label>Last Name</label>
            <input name="lname" onChange={inputChangeHandler} required />
          </p>
        </div>

        <p>
          <label>Mobile</label>
          <input name="mobile" onChange={inputChangeHandler} required />
        </p>
        <div className={classes.name}>
          <p>
            <label>House Name</label>
            <input name="hname" onChange={inputChangeHandler} required />
          </p>
          <p>
            <label>Place</label>
            <input name="place" onChange={inputChangeHandler} required />
          </p>
        </div>
        <div className={classes.name}>
          <p>
            <label>City</label>
            <input name="city" onChange={inputChangeHandler} required />
          </p>
          <p>
            <label>District</label>
            <input name="dist" onChange={inputChangeHandler} required />
          </p>
          <p>
            <label>State</label>
            <input name="state" onChange={inputChangeHandler} required />
          </p>
        </div>

        <p>
          <label>Pin code</label>
          <input name="pin" onChange={inputChangeHandler} required />
        </p>
        <p>
          <label>email(Username)</label>
          <input name="email" onChange={inputChangeHandler} required />
        </p>
        <div className={classes.name}>
          <p>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={inputChangeHandler}
              required
            />
          </p>
          <p>
            <label>Confirm Password</label>
            <input
              type="cpassword"
              name="cpassword"
              onChange={inputChangeHandler}
              required
            />
          </p>
        </div>
        <div className={classes.actions}>
          <Link to="../login">
            <p>Allready have an account?</p>
          </Link>

          <Button type="submit">Create Account</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
