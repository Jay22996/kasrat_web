import React from "react";
import service from "../../../assets/images/about_skill_img.png";

const GymService = (props) => {
    const data = props?.data
    const services = data?.services
    return (
        <section class="d2c_skill_wrapper">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <h2 style={{ fontWeight: 700, fontSize: '45px' }}>{data?.about_gym_tag2}</h2>
                        <p style={{fontSize: '18px' }}>{data?.about_gym_p4}</p>
                        <div class="row d2c_progress">
                            {!services?(
                            <h1> </h1>
                            ):(
                                services.map((el)=>{
                                    return(
                                        <div class="col-md-6 mb-4">
                                <div class="d2c_progress_card">
                                    <div class="d-flex justify-content-between">
                                        <p>{el}</p>
                                    </div>
                                </div>
                            </div>
                                    )
                                })
                            )}                            
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="d2c_img_wrapper">
                            <img src={service} class="w-100 h-100" alt="About Skill Image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GymService;