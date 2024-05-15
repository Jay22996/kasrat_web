import React from "react";
import {  Typography } from "@mui/material";
import { Link } from "react-router-dom";

const GymHome = (props) => {
    const data = props?.data
    return (
        <section className="d2c_hero_wrapper">
            <div className="container">
            <div className="row align-items-center">
                    <div className="col-lg-6 text-center text-lg-start order-1 order-lg-0 fadeInLeft">
                        <Typography style={{ fontWeight: 600, fontSize: '20px', marginBottom:"0px"  }} > Do Kasrat, With Kasrat, Show Kasrat</Typography>
                        <h1 style={{ fontWeight: 700, fontSize: '45px' }}>Join <span>{data?.gym_name}</span></h1>
                        <Typography style={{ fontSize: '20px' }}>{data?.about_gym_p1}</Typography>
                        {/* <a href="./gyminquiry" class="btn1">Send Inquiry</a> */}
                    <Link to={`/gyminquiry/${data._id}`} class="btn1" style={{textDecoration:"none"}}> Send Inquiry </Link>

                    </div>
                    <div className="col-lg-6 order-0 order-lg-1 mb-5 mb-lg-0 wow fadeInRight">
                        <img src={data.about_gym_photo1} className="w-100 h-100 rounded-3" alt="Hero 1" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GymHome;