import React from "react";
import Slider from "react-slick";

const GymTrainer = (props) => {
  const data = props?.data
  const gym_trainers = data?.gym_trainers
  const numItems = gym_trainers ? gym_trainers.length : 0;

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    // centerPadding: '50px',
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow:  numItems <= 2 ? numItems : 3,
    slidesToScroll: 1,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:numItems <= 2 ? numItems : 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <section className="d2c_testimonial_wrapper">
      <div className="container">
        <h2
          class="text-center"
          style={{ marginBottom: "10px", fontWeight: 700, fontSize: "45px" }}
        >
          {data?.about_gym_trainer_tag}
          
        </h2>
        <p
          class="text-center"
          style={{ fontSize: "19px", marginBottom: "50px" }}
        >
         {data?.about_gym_trainer_p}
        </p>
        <div className="row">
          <Slider {...settings}>
            {!gym_trainers?(
                      <h1> </h1>
            ):(
              gym_trainers?.map((el)=>{
                return(
                  <div className="col">
                  <div className="d2c_card">
                    <div className="d2c_customer_info_wrapper d-flex align-items-center">
                      <div className="d2c_img_wrapper">
                        <img
                          src={el?.trainers?.profile_photo}
                          className="w-100 h-100"
                          alt="Testimonial One"
                        />
                      </div>
                      <div className="d2c_customer_info">
                        <h5>{el?.trainers?.name}</h5>
                        {/* <p className="mb-0">
                          <span>NewYork, USA</span>
                        </p> */}
                      </div>
                    </div>
                    <p className="d2c_testimonial_content">
                    {el?.trainers?.bio}
                    </p>
                  </div>
                </div>
                )
              })
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default GymTrainer;
