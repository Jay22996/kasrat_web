import React from "react";
import home from "../../../assets/images/home2.png"

const AboutGym = (props) => {
    const data = props?.data
    // console.log("jay",data);
    return (
        <section class="d2c_about_wrapper">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 wow fadeInLeft">
                        <img src={data?.about_gym_photo2} class="w-100 h-100 rounded-3" alt="Hero 1" />
                    </div>
                    <div class="col-lg-6 text-center text-lg-start wow fadeInRight">
                        <h2 style={{ fontWeight: 700, fontSize: '45px' }}>{data?.about_gym_tag1}</h2>
                        <p class="mb-2" style={{ fontSize: '19px' }}>{data?.about_gym_p2}</p>
                        <p class="mb-2" style={{ fontSize: '19px' }}>{data?.about_gym_p3}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutGym;