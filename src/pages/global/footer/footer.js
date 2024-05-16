import React, { useContext } from "react";
import "../../../assets/css/style.css";
import "../../../assets/css/responsive.css";
import logo from "../../../assets/images/logoBg.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../../context/AuthContext";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const { data } = useContext(AuthContext);

  const home = data?.data?.data;
  // console.log(home);
  return (
    <footer class="d2c_footer_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-4 mb-4 mb-lg-0 wow fadeInLeft">
            <NavLink style={{ margin: "-5px" }} to="/">
              <img src={home?.footer_photo} alt="Footer Logo" width="100" />
            </NavLink>

            <p class="mb-0">{home?.footer_teg1}</p>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-md-0 wow fadeInUp">
            <div class="d2c_contact_details">
              <h5>{home?.footer_teg2}</h5>
              <div class="d2c_info_wrapper d-flex align-items-center mb-2">
              <a href={`tel:${home?.footer_com}`} className="d2c_icon_wrapper">

                  <FontAwesomeIcon icon={faPhone} />
                </a>
                <p class="mb-0">{home?.footer_com}</p>
              </div>
              <div class="d2c_info_wrapper d-flex align-items-center mb-2">
                <a
                  href={`mailto:${home?.footer_email}`}
                  class="d2c_icon_wrapper"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <p class="mb-0">{home?.footer_email}</p>
              </div>
              <div class="d2c_info_wrapper d-flex align-items-center mb-2">
                <a
                  href={home?.footer_location}
                  class="d2c_icon_wrapper"
                >
                  <FontAwesomeIcon icon={faLocationDot} />
                </a>
                <p class="mb-0">{home?.footer_address}</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 wow fadeInRight">
            <div class="d2c_footer_newsletter">
              <h5>Company</h5>
              <Link to="/Terms" style={{textDecoration:"none" , color:"white"}} lass="mb-0">Terms Of Service</Link><br />
              <Link  to="/PrivacyPolicy" style={{textDecoration:"none" , color:"white"}} lass="mb-0">Privacy Policy</Link>

            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="d2c_copy_right_wrapper">
          <p class="mb-0 text-center">
            {home?.footer_copy}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
