import React from "react";
import { Link } from "react-router-dom";

const GymRegister = (props) => {
  const data = props?.data
    return (
        <section class="d2c_c2a_wrapper d2c_service_c2a text-center wow fadeInUp">
            <div class="container">
                <div class="d2c_c2a_box">
                    <h2 style={{ fontWeight: 700, fontSize: '45px' }}>Would You Like to Join Our Gym?</h2>
                    <p style={{ fontSize: '19px' }}>Elevate your fitness game. Join our gym for expert guidance, top facilities, and supportive
                        community.</p>
                    <Link to={`/gyminquiry/${data?._id}`} class="btn1" style={{textDecoration:"none"}}> Send Inquiry </Link>
                </div>
            </div>
        </section>
    );
};

export default GymRegister;