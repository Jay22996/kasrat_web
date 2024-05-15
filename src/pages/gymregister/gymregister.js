import React, { useContext } from 'react';
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import "../../assets/css/bootstrap.min.css";
import { AuthContext } from '../../context/AuthContext';
import { NavLink } from 'react-router-dom';

const GymRegister = () => {
    const { data } = useContext(AuthContext);

    const home = data?.data?.data;
    // console.log(home);
    return (
        <section class="d2c_c2a_wrapper d2c_service_c2a text-center wow fadeInUp">
            <div class="container">
                <div class="d2c_c2a_box">
                    <h2 style={{ fontWeight: 700, fontSize: '45px' }}>{home?.kasrat_gym_join_teg1}</h2>
                    <p style={{  fontSize: '18px' }}>{home?.kasrat_gym_join_teg2}</p>
                    <NavLink className="btn1" style={{ margin: "-5px" }} to="/gymregisterform">
                    {home?.kasrat_gym_join_button}
        </NavLink>
                </div>
            </div>
        </section>
    )
}

export default GymRegister;