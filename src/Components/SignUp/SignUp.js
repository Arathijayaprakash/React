import React, { useState } from "react";
import classes from "../Login/Login.module.css";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import ClearIcon from '@mui/icons-material/Clear';


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
  const [fnameIsTouched, setFnameIsTouched] = useState(false);
  const [lnameIsTouched, setlnameIsTouched] = useState(false);
  const [mobileIsTouched, setmobileIsTouched] = useState(false);
  const [hnameIsTouched, sethnameIsTouched] = useState(false);
  const [placeIsTouched, setplaceIsTouched] = useState(false);
  const [cityIsTouched, setcityIsTouched] = useState(false);
  const [distIsTouched, setDisteIsTouched] = useState(false);
  const [stateIsTouched, setStateIsTouched] = useState(false);
  const [pinIsTouched, setPinIsTouched] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);
  const [cpasswordIsTouched, setCpasswordIsTouched] = useState(false);

  let formIsValid = false;

  const fnameIsValid = inputs.fname.trim().length >= 3;
  const fnameIsInvalid = fnameIsTouched && !fnameIsValid;

  const lnameIsValid = inputs.lname.trim() !== "";
  const lnameIsInvalid = lnameIsTouched && !lnameIsValid;

  const mobileIsValid = validator.isMobilePhone(inputs.mobile);
  const mobileIsInvalid = mobileIsTouched && !mobileIsValid;

  const hnameIsValid = inputs.hname.trim().length >= 3;
  const hnameIsInvalid = hnameIsTouched && !hnameIsValid;

  const cityIsValid = inputs.city.trim().length >= 3;
  const cityIsInvalid = cityIsTouched && !cityIsValid;

  const distIsValid = inputs.dist.trim().length >= 3;
  const distIsInvalid = distIsTouched && !distIsValid;

  const emailIsValid = validator.isEmail(inputs.email);
  const emailIsInvalid = emailIsTouched && !emailIsValid;

  const pinIsValid = validator.isMobilePhone(inputs.pin);
  const pinIsInvalid = pinIsTouched && !pinIsValid;

  const placeIsValid = inputs.place.trim().length >= 3;
  const placeIsInvalid = placeIsTouched && !placeIsValid;

  const passwordIsValid = validator.isStrongPassword(inputs.password, {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  });
  const passwordIsInvalid = passwordIsTouched && !passwordIsValid;

  const cpasswordIsValid = inputs.cpassword === inputs.password;
  const cpasswordIsInvalid = cpasswordIsTouched && !cpasswordIsValid;

  const stateIsValid = inputs.state.trim().length >= 3;
  const stateIsInvalid = stateIsTouched && !stateIsValid;

  if (
    fnameIsValid &&
    lnameIsValid &&
    mobileIsValid &&
    hnameIsValid &&
    cityIsValid &&
    distIsValid &&
    emailIsValid &&
    pinIsValid &&
    placeIsValid &&
    passwordIsValid &&
    cpasswordIsValid &&
    stateIsValid
  ) {
    formIsValid = true;
  }

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onfnameBlurHandler = () => {
    setFnameIsTouched(true);
  };
  const onlnameBlurHandler = () => {
    setlnameIsTouched(true);
  };
  const onMobileBlurHandler = () => {
    setmobileIsTouched(true);
  };
  const onHnameBlurHandler = () => {
    sethnameIsTouched(true);
  };
  const onCpasswordBlurHandler = () => {
    setCpasswordIsTouched(true);
  };
  const onDistBlurHandler = () => {
    setDisteIsTouched(true);
  };
  const onEmailBlurHandler = () => {
    setEmailIsTouched(true);
  };
  const onPasswordBlurHandler = () => {
    setPasswordIsTouched(true);
  };
  const onPinBlurHandler = () => {
    setPinIsTouched(true);
  };
  const onStateBlurHandler = () => {
    setStateIsTouched(true);
  };
  const onCityBlurHandler = () => {
    setcityIsTouched(true);
  };
  const onPlaceBlurHandler = () => {
    setplaceIsTouched(true);
  };

  const createUserHandler = (event) => {
    event.preventDefault();

    setFnameIsTouched(true);
    setlnameIsTouched(true);
    setmobileIsTouched(true);
    sethnameIsTouched(true);
    setCpasswordIsTouched(true);
    setDisteIsTouched(true);
    setEmailIsTouched(true);
    setPasswordIsTouched(true);
    setPinIsTouched(true);
    setStateIsTouched(true);
    setcityIsTouched(true);
    setplaceIsTouched(true);

    if (
      !fnameIsValid ||
      !lnameIsValid ||
      !mobileIsValid ||
      !hnameIsValid ||
      !emailIsValid ||
      !passwordIsValid ||
      !cpasswordIsValid ||
      !placeIsValid ||
      !stateIsValid ||
      !pinIsValid ||
      !cityIsValid ||
      !stateIsValid
    ) {
      return;
    }

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
    setFnameIsTouched(false);
    setlnameIsTouched(false);
    setmobileIsTouched(false);
    sethnameIsTouched(false);
    setCpasswordIsTouched(false);
    setDisteIsTouched(false);
    setEmailIsTouched(false);
    setPasswordIsTouched(false);
    setPinIsTouched(false);
    setStateIsTouched(false);
    setcityIsTouched(false);
    setplaceIsTouched(false);
  };

  const inputfnameClasses = fnameIsInvalid ? classes.invalid : "";
  const inputlnameClasses = lnameIsInvalid ? classes.invalid : "";
  const inputmobileClasses = mobileIsInvalid ? classes.invalid : "";
  const inputhnameClasses = hnameIsInvalid ? classes.invalid : "";
  const inputcityClasses = cityIsInvalid ? classes.invalid : "";
  const inputplaceClasses = placeIsInvalid ? classes.invalid : "";
  const inputstateClasses = stateIsInvalid ? classes.invalid : "";
  const inputpinClasses = pinIsInvalid ? classes.invalid : "";
  const inputdistClasses = distIsInvalid ? classes.invalid : "";
  const inputemailClasses = emailIsInvalid ? classes.invalid : "";
  const inputpasswordClasses = passwordIsInvalid ? classes.invalid : "";
  const inputcpasswordClasses = cpasswordIsInvalid ? classes.invalid : "";

  return (
    <div>
      <form className={classes.form} onSubmit={createUserHandler}>
        <h1>Sign Up</h1>
        <div className={classes.name}>
          <p>
            <label>First Name</label>
            <input
              className={inputfnameClasses}
              name="fname"
              onChange={inputChangeHandler}
              onBlur={onfnameBlurHandler}
            />
            <span className={classes.error}>
              {fnameIsInvalid && (
                <p>First name should contain atleast 3 characters</p>
              )}
            </span>
          </p>
          <p>
            <label>Last Name</label>
            <input
              className={inputlnameClasses}
              name="lname"
              onChange={inputChangeHandler}
              onBlur={onlnameBlurHandler}
            />
            <span className={classes.error}>
              {lnameIsInvalid && <p>last name should not be empty</p>}
            </span>
          </p>
        </div>

        <p>
          <label>Mobile</label>
          <input
            className={inputmobileClasses}
            name="mobile"
            onChange={inputChangeHandler}
            onBlur={onMobileBlurHandler}
          />
          <span className={classes.error}>
            {mobileIsInvalid && <p>enter valid mobile number</p>}
          </span>
        </p>
        <div className={classes.name}>
          <p>
            <label>House Name</label>
            <input
              className={inputhnameClasses}
              name="hname"
              onChange={inputChangeHandler}
              onBlur={onHnameBlurHandler}
            />
            <span className={classes.error}>
              {hnameIsInvalid && <p>Enter valid housename</p>}
            </span>
          </p>
          <p>
            <label>Place</label>
            <input
              className={inputplaceClasses}
              name="place"
              onChange={inputChangeHandler}
              onBlur={onPlaceBlurHandler}
            />
            <span className={classes.error}>
              {placeIsInvalid && <p>enter valid place</p>}
            </span>
          </p>
        </div>
        <div className={classes.name}>
          <p>
            <label>City</label>
            <input
              className={inputcityClasses}
              name="city"
              onChange={inputChangeHandler}
              onBlur={onCityBlurHandler}
            />
            <span className={classes.error}>
              {cityIsInvalid && <p>enter valid place</p>}
            </span>
          </p>
          <p>
            <label>District</label>
            <input
              className={inputdistClasses}
              name="dist"
              onChange={inputChangeHandler}
              onBlur={onDistBlurHandler}
            />
            <span className={classes.error}>
              {distIsInvalid && <p>enter valid district</p>}
            </span>
          </p>
          <p>
            <label>State</label>
            <input
              className={inputstateClasses}
              name="state"
              onChange={inputChangeHandler}
              onBlur={onStateBlurHandler}
            />
            <span className={classes.error}>
              {stateIsInvalid && <p>enter valid state</p>}
            </span>
          </p>
        </div>

        <p>
          <label>Pin code</label>
          <input
            className={inputpinClasses}
            name="pin"
            onChange={inputChangeHandler}
            onBlur={onPinBlurHandler}
          />
          <span className={classes.error}>
            {pinIsInvalid && <p>enter valid pincode</p>}
          </span>
        </p>
        <p>
          <label>email(Username)</label>
          <input
            className={inputemailClasses}
            name="email"
            onChange={inputChangeHandler}
            onBlur={onEmailBlurHandler}
          />
          <span className={classes.error}>
            {emailIsInvalid && <p>enter valid email</p>}
          </span>
        </p>
        <div className={classes.name}>
          <p>
            <label>Password</label>
            <input
              className={inputpasswordClasses}
              type="password"
              name="password"
              onChange={inputChangeHandler}
              onBlur={onPasswordBlurHandler}
            />
            <span className={classes.error}>
              {passwordIsInvalid && (
                <p>
                  enter valid password
                </p>
              )}
            </span>
          </p>
          <p>
            <label>Confirm Password</label>
            <input
              className={inputcpasswordClasses}
              type="password"
              name="cpassword"
              onChange={inputChangeHandler}
              onBlur={onCpasswordBlurHandler}
            />
            <span className={classes.error}>
              {cpasswordIsInvalid && <p><ClearIcon/></p>}
            </span>
          </p>
        </div>
        <span className={classes.error}>
          {passwordIsInvalid && (
            <p>
              password should contain minLength-8, minLowercase-1,
              minUppercase-1, minNumbers-1, minSymbols-1
            </p>
          )}
        </span>
        <div className={classes.actions}>
          <Link to="../login">
            <p>Allready have an account?</p>
          </Link>

          <Button disabled={!formIsValid} type="submit">
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
