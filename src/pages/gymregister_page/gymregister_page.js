import React, { useContext } from 'react';
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import "../../assets/css/bootstrap.min.css";
import photo5 from '../../assets/images/home2.png';
import GymRegister from '../gymregister/gymregister';
import { AuthContext } from '../../context/AuthContext';


const RegisterGymPage = () => {
    const { data } = useContext(AuthContext);

    const home = data?.data?.data;
    const gym_manage_service = home?.gym_manage_service
    const gym_reg_service = home?.gym_reg_service
    
    return (
        <div class="d2c_service_page_wrapper">
            <section class="d2c_services_wrapper d2c_service_page text-center">
                <div class="container">
                    <div class="row">
                        <div
                            class="col-md-10 col-lg-8 col-xl-6 offset-md-1 offset-lg-2 offset-xl-3 text-center wow fadeInDown">
                            <h1 style={{ fontWeight: 600, fontSize: '50px' }}>{home?.gym_reg_tag1}</h1>
                            <p class="d2c_service_page_content">{home?.gym_reg_tag2}</p>
                        </div>
                    </div>
                    <div class="row">
                      
                        {
                            !gym_reg_service ?(
                                <h1> </h1>
                            ):(
                                gym_reg_service.map((el)=>{
                                    return(
                                        <div class="col-md-6 mb-4 col-lg-4 wow fadeInRight">
                                        <div class="d2c_service_card">
                                            <div class="d2c_img_wrapper d-flex justify-content-center align-items-center">
                                                <img src={el.icon} class="img-fluid" alt="haha" />
                                            </div>
                                            <h5 style={{ fontWeight: 600, fontSize: '25px' }}>{el.heading}</h5>
                                            <p class="mb-0" style={{ fontSize: '18px' }}>{el.par}</p>
                                        </div>
                                    </div>
                                    )
                                })
                            )
                        }
                    </div>
                </div>
            </section>
            <section class="d2c_about_wrapper">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 wow fadeInLeft">
                            <img src={photo5} class="w-100 h-100 rounded-3" alt="Image 1" />

                        </div>
                        <div class="col-lg-6 text-center text-lg-start wow fadeInRight">
                            <h2 style={{ fontWeight: 600, fontSize: '45px' }}>{home?.gym_reg_tag3}</h2>
                            <p class="mb-2">{home?.gym_reg_p1}</p>
                            {
                                !gym_manage_service ? (
                                    <h1> </h1>
                                ):(
                                    gym_manage_service.map((el)=>{
                                        return(
                                            <>
                                            <p class="mb-2">✔ {el}</p>
                                            </>
                                        )
                                    })
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>

            <GymRegister />
        </div>
    );
};

export default RegisterGymPage;