import React from "react";
import { Typography } from "@mui/material";
import "../../../assets/css/style.css";
import "../../../assets/css/responsive.css";
import { NavLink } from "react-router-dom";
import "../header/header.css";

const Header = () => {
  return (
    <>
      {/* .///////////////////////  */}
      <nav class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <div class="nav-title">KASRAT</div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <ul class="nav-list" style={{ marginBottom: "0px" }}>
          {/* <div className="collapse navbar-collapse js-clone-nav justify-content-end"> */}
          {/* <ul className="navbar-nav "> */}
          <li className="nav-item">
            <NavLink
              className="NavLink"
              style={{ fontSize: "20px", lineHeight: "50px" }}
              to="/"
            >
              Home
            </NavLink>
            {/* <a className="nav-link active" to="/">Home</a> */}
          </li>
          <li className="nav-item">
            <NavLink
              className="NavLink"
              style={{ fontSize: "20px", lineHeight: "50px" }}
              to="/aboutus"
            >
              About
            </NavLink>

            {/* <a className="nav-link" to="/aboutus">About</a> */}
          </li>
          <li className="nav-item">
            <NavLink
              className="NavLink"
              style={{ fontSize: "20px", lineHeight: "50px" }}
              to="/findgym"
            >
              Find gym
            </NavLink>

            {/* <a className="nav-link" href="./pages/findgym.html">Find gym</a> */}
          </li>
          <li className="nav-item">
            <NavLink
              className="NavLink"
              style={{ fontSize: "20px", lineHeight: "50px" }}
              to="/registergym"
            >
              Register gym
            </NavLink>

            {/* <a className="nav-link" href="./pages/service.html">Register gym</a> */}
          </li>
          <li className="nav-item">
            <NavLink
              className="btn1 d2c_nav_btn"
              style={{ lineHeight: "50px" }}
              to="/contactus"
            >
              Contact Us
            </NavLink>

            {/* <a className="btn1 d2c_nav_btn" href="./pages/contact.html">Contact Us</a> */}
          </li>
          {/* </ul>
                    </div> */}
        </ul>
      </nav>
    </>
  );
};

export default Header;
