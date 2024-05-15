import React from "react";
import myImage from "../../../assets/images/home1.png";
import "../../../assets/css/style.css";
import "../../../assets/css/responsive.css";
import "../../../assets/css/bootstrap.min.css";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { NavLink } from "react-router-dom";

const Intro = () => {
  const { data } = useContext(AuthContext);

  const home = data?.data?.data;

  return (
    <section className="d2c_hero_wrapper">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center text-lg-start order-1 order-lg-0 fadeInLeft">
            <Typography
              style={{ fontWeight: 600, fontSize: "20px", marginBottom: "0px" }}
            >
              {" "}
              {home?.home_teg1}
            </Typography>
            <h1 style={{ fontWeight: 700, fontSize: "45px" }}>
              {home?.home_teg2} <span>{home?.home_teg3}</span>
            </h1>
            <Typography style={{ fontSize: "20px" }}>
              {home?.home_teg4}
            </Typography>
            <NavLink className="btn1" style={{ margin: "-5px" }} to="/findgym">
              {home?.home_button}
            </NavLink>
          </div>
          <div className="col-lg-6 order-0 order-lg-1 mb-5 mb-lg-0 wow fadeInRight">
            <img src={home?.home_photo} className="w-100 h-100 rounded-3" alt="Hero 1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
