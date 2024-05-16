import React, { useContext } from 'react';
import playIcon from '../assets/images/play.png';
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const About = () => {
  const { data } = useContext(AuthContext);
  const home = data?.data?.data;
    return (
        <section class="d2c_about_wrapper">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 wow fadeInLeft">
                        <div class="d2c_about_img_wrapper mb-5 mb-lg-0 mx-auto mx-lg-0">
                            <div class="d2c_img_wrapper">
                                <img src={home?.about_gym_photo} class="w-100 h-100 rounded-3" alt="logo" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 text-center text-lg-start wow fadeInRight">
                        <h2 style={{ fontWeight: 700, fontSize: '45px' }}>{home?.about_gym_teg_1}</h2>
                        <p class="mb-2" style={{ fontSize: '18px' }}>{home?.about_gym_p_1}</p>
                        <p class="mb-2" style={{ fontSize: '18px' }}>{home?.about_gym_p_2}</p>
                        <div class="app-icons">
                            <a href="https://apps.apple.com/in/app/kasrat-member/id6479953019">
                                <img class="apple"
                                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1276560000&h=7e7b68fad19738b5649a1bfb78ff46e9"
                                    alt="Download on the App Store" />
                            </a>
                            <a href='https://play.google.com/store/apps/details?id=com.kasrat.kasratmember'>
                                <img class="android" alt='Get it on Google Play' src={playIcon}
                                    width="150" />
                            </a>
                        </div>
                        <h5></h5>
                        <p style={{fontSize: '17px',marginBottom:"17px" }}>{home?.about_gym_p_3}</p>
                <NavLink className="btn1"  style={{margin:"0px"}} to="/gymregisterform">Register gym</NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;