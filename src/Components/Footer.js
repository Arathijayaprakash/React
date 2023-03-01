import React from "react";
import classes from "./Footer.module.css";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import CallIcon from "@mui/icons-material/Call";
import HouseIcon from "@mui/icons-material/House";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.content}>
        <div>
          <h3>GlammYaPP</h3>
          <p className={classes.about}>
            {" "}
            <span className={classes.appname}>GlammYaPP</span> is an online
            React web application where the customer can purchase beauty
            products online. Through this online store the users can see
            products by its category and later can add to the shopping cart and
            purchase.
          </p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <div className={classes.email}>
            <AttachEmailIcon fontSize="small" />
            <p className={classes.emailText}>gLammY@gmail.com</p>
          </div>
          <div className={classes.email}>
            <CallIcon fontSize="small" />
            <p className={classes.emailText}>9999564388</p>
          </div>
          <div className={classes.email}>
            <HouseIcon fontSize="small" />
            <p className={classes.emailText}>Kakkanad,Kochi</p>
          </div>
        </div>
      </div>
      <div className={classes.line}>
        <hr />
      </div>
      <div className={classes.icons}>
        <p>
          <LinkedInIcon fontSize="small" />
        </p>
        <p>
          <FacebookIcon fontSize="small" />
        </p>
        <p>
          <InstagramIcon fontSize="small" />
        </p>
      </div>
    </div>
  );
};

export default Footer;
